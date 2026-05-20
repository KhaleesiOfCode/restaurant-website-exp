import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getTokenFromRequest, verifyToken } from "@/lib/auth";

function getUser(req: NextRequest) {
  const token = getTokenFromRequest(req);
  if (!token) return null;
  return verifyToken(token);
}

export async function GET(request: NextRequest) {
  const user = getUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const today = new Date().toISOString().split("T")[0];

  const [reservations, messages] = await Promise.all([
    prisma.reservation.findMany(),
    prisma.contactMessage.findMany(),
  ]);

  return NextResponse.json({
    totalReservations: reservations.length,
    pendingReservations: reservations.filter((r) => r.status === "pending").length,
    confirmedReservations: reservations.filter((r) => r.status === "confirmed").length,
    todayReservations: reservations.filter((r) => r.date === today).length,
    totalMessages: messages.length,
    unreadMessages: messages.filter((m) => !m.isRead).length,
  });
}
