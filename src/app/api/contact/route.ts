import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail, contactAlertHtml } from "@/lib/email";
import { siteInfo } from "@/data/site";
import { sanitize } from "@/lib/utils";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    if (!rateLimit(`contact:${ip}`, 3, 60000)) {
      return NextResponse.json({ error: "Too many requests. Please wait before trying again." }, { status: 429 });
    }

    const body = await request.json();
    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const subject = sanitize(body.subject || "");
    const message = sanitize(body.message);

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await prisma.contactMessage.create({
      data: { name, email, subject, message },
    });

    await sendEmail({
      to: siteInfo.contact.adminEmail,
      subject: `New Contact: ${name} — ${subject || "No Subject"}`,
      html: contactAlertHtml({ name, email, subject: subject || "", message }),
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
