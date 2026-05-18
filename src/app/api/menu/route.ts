import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const categories = await prisma.menuCategory.findMany({
    include: { items: { orderBy: { order: "asc" } } },
    orderBy: { order: "asc" },
  });

  return NextResponse.json(categories);
}
