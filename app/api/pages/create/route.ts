import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json(
      { data: null, message: "Unauthorized Access", isSuccess: false },
      { status: 401 }
    );
  }

  try {
    const page = await prisma.pages.create({
      data: {
        title: "Untitled",
        owner: { connect: { email: session.user?.email! } }
      }
    });

    return NextResponse.json(
      {
        data: page,
        message: "Blank page successfully created",
        isSuccess: true
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({
      data: null,
      message: "Internal Server Error: Unable to create empty page.",
      isSuccess: true
    });
  }
}
