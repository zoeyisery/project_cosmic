import { NextResponse } from "next/server";
import prisma from "@/models/prismaClient";

export async function POST(request: Request) {
  try {
    const { product, imageUrl, detailUrl, adText, adTitle } =
      await request.json();

    const banner = await prisma.banner.create({
      data: { product, imageUrl, detailUrl, adText, adTitle },
    });

    return NextResponse.json(banner, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error saving banner" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const banners = await prisma.banner.findMany();
    return NextResponse.json(banners, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching banners" },
      { status: 500 }
    );
  }
}
