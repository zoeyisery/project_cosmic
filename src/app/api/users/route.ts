import { NextResponse } from "next/server";
import prisma from "@/models/prismaClient";

// GET /api/users
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching users" },
      { status: 500 }
    );
  }
}

// POST /api/users
export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, name } = body;

  const newUser = await prisma.user.create({
    data: {
      email,
      password,
      name,
    },
  });

  return NextResponse.json(newUser);
}

// DELETE /api/users
export async function DELETE(request: Request) {
  const { id } = await request.json();

  await prisma.user.delete({
    where: { id },
  });

  return NextResponse.json({ message: "User deleted successfully" });
}
