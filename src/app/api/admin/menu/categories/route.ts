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

  const categories = await prisma.menuCategory.findMany({
    include: { items: { orderBy: { order: "asc" } } },
    orderBy: { order: "asc" },
  });

  return NextResponse.json(categories);
}

export async function POST(request: NextRequest) {
  const user = getUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const category = await prisma.menuCategory.create({
    data: {
      name: body.name,
      description: body.description || "",
      order: body.order || 0,
    },
  });

  return NextResponse.json(category, { status: 201 });
}
