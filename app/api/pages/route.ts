import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json(
      { data: null, message: "Unauthorized Access", isSuccess: false },
      { status: 401 }
    );
  }

  try {
    const pages = await prisma.pages.findMany({
      where: { owner: { email: session.user?.email! } }
    });

    return NextResponse.json({
      data: pages,
      message: "Fetched all available page.",
      isSuccess: true
    });
  } catch (error) {
    return NextResponse.json({
      data: null,
      message: "Internal Server Error: Unable to create empty page.",
      isSuccess: true
    });
  }
}
