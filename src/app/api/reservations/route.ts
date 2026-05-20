import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail, reservationConfirmationHtml, adminAlertHtml } from "@/lib/email";
import { siteInfo } from "@/data/site";
import { sanitize } from "@/lib/utils";
import { rateLimit } from "@/lib/rate-limit";

const MAX_CAPACITY_PER_SLOT = parseInt(process.env.MAX_CAPACITY_PER_SLOT || "30", 10);

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    if (!rateLimit(`reservation:${ip}`, 3, 60000)) {
      return NextResponse.json({ error: "Too many requests. Please wait before trying again." }, { status: 429 });
    }

    const body = await request.json();
    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const phone = sanitize(body.phone);
    const date = sanitize(body.date);
    const time = sanitize(body.time);
    const notes = sanitize(body.notes || "");

    if (!name || !email || !phone || !date || !time || !body.guests) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const guestCount = parseInt(body.guests);

    // Check availability before creating
    const existing = await prisma.reservation.findMany({
      where: { date, time, status: { not: "cancelled" } },
    });
    const totalGuests = existing.reduce((sum, r) => sum + r.guests, 0);

    if (totalGuests + guestCount > MAX_CAPACITY_PER_SLOT) {
      const remaining = MAX_CAPACITY_PER_SLOT - totalGuests;
      return NextResponse.json(
        { error: `Only ${remaining} seat${remaining === 1 ? "" : "s"} remaining at ${time} on ${date}.` },
        { status: 409 }
      );
    }

    const reservation = await prisma.reservation.create({
      data: { name, email, phone, date, time, guests: guestCount, notes: notes || "" },
    });

    await sendEmail({
      to: email,
      subject: "Reservation Confirmed — Ristorante Bella Vita",
      html: reservationConfirmationHtml({ name, date, time, guests: guestCount }),
    });

    await sendEmail({
      to: siteInfo.contact.adminEmail,
      subject: `New Reservation: ${name} — ${date} at ${time}`,
      html: adminAlertHtml({
        name,
        email,
        phone,
        date,
        time,
        guests: guestCount,
        notes: notes || "",
      }),
    });

    return NextResponse.json({ success: true, reservation }, { status: 201 });
  } catch (error) {
    console.error("Reservation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
