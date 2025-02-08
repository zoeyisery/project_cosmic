import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "@/models/prismaClient";

// POST /api/auth/signin
export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    console.log("Received email:", email); // 이메일 데이터 확인
    console.log("Received password:", password); // 비밀번호 데이터 확인

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      console.log("User not found in the database.");
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Password valid:", isPasswordValid); // 비밀번호 비교 결과

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }

    if (!user.id) {
      console.error("User ID is missing");
      return NextResponse.json(
        { message: "User ID is missing, cannot generate token" },
        { status: 500 }
      );
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1h" } // 토큰 만료 시간
    );

    return NextResponse.json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Internal Server Error", error: errorMessage },
      { status: 500 }
    );
  }
}
