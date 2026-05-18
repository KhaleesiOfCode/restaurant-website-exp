import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail, contactAlertHtml } from "@/lib/email";
import { siteInfo } from "@/data/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await prisma.contactMessage.create({
      data: { name, email, subject: subject || "", message },
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
