import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail, reservationConfirmationHtml, adminAlertHtml } from "@/lib/email";
import { siteInfo } from "@/data/site";

const MAX_CAPACITY_PER_SLOT = 30;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, guests, notes } = body;

    if (!name || !email || !phone || !date || !time || !guests) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const guestCount = parseInt(guests);

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
