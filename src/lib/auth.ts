import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("JWT_SECRET environment variable is required in production");
    }
    return "dev-secret-change-in-production";
  }
  return secret;
}

const JWT_SECRET = getJwtSecret();

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function signToken(payload: { id: string; email: string }): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): { id: string; email: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { id: string; email: string };
  } catch {
    return null;
  }
}

export function getTokenFromRequest(request: NextRequest): string | null {
  return request.cookies.get("token")?.value ?? null;
}

export function getTokenFromCookies(): string | null {
  return cookies().get("token")?.value ?? null;
}

export function getSession(): { id: string; email: string } | null {
  const token = getTokenFromCookies();
  if (!token) return null;
  return verifyToken(token);
}
