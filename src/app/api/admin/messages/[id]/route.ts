import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getTokenFromRequest, verifyToken } from "@/lib/auth";

function getUser(req: NextRequest) {
  const token = getTokenFromRequest(req);
  if (!token) return null;
  return verifyToken(token);
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const user = getUser(request);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await request.json();
    const message = await prisma.contactMessage.update({
      where: { id: params.id },
      data: { isRead: body.isRead },
    });
    return NextResponse.json(message);
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
