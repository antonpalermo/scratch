import { NextResponse } from "next/server";
import { auth } from "@/app/api/auth/auth";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.json(
      { data: null, message: "Unauthorized Access", isSuccess: false },
      { status: 401 }
    );
  }

  // TODO: add schema validation here.

  try {
    const page = await prisma.pages.create({
      data: {
        title: "Untitled",
        owner: { connect: { email: session.user?.email! } }
      }
    });

    revalidatePath('/home')

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
