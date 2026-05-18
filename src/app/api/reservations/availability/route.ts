import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const MAX_CAPACITY_PER_SLOT = 30;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");
  const time = searchParams.get("time");

  if (!date) {
    return NextResponse.json({ error: "Date is required" }, { status: 400 });
  }

  if (time) {
    const existing = await prisma.reservation.findMany({
      where: { date, time, status: { not: "cancelled" } },
    });

    const totalGuests = existing.reduce((sum, r) => sum + r.guests, 0);
    const remaining = MAX_CAPACITY_PER_SLOT - totalGuests;

    return NextResponse.json({
      available: remaining > 0,
      remainingSeats: Math.max(0, remaining),
      totalGuests,
    });
  }

  // Return availability for all time slots on this date
  const timeSlots = [
    "12:00", "12:30", "13:00", "13:30",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00",
  ];

  const allReservations = await prisma.reservation.findMany({
    where: { date, status: { not: "cancelled" } },
  });

  const slots = timeSlots.map((slot) => {
    const slotReservations = allReservations.filter((r) => r.time === slot);
    const totalGuests = slotReservations.reduce((sum, r) => sum + r.guests, 0);
    return {
      time: slot,
      available: totalGuests < MAX_CAPACITY_PER_SLOT,
      remainingSeats: Math.max(0, MAX_CAPACITY_PER_SLOT - totalGuests),
    };
  });

  return NextResponse.json({ date, slots });
}
