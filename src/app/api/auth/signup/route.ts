import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/models/prismaClient";

// POST /api/auth/signup
export async function POST(request: Request) {
  const { name, email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  console.log("회원가입 성공:", newUser);

  return NextResponse.json(newUser);
}
