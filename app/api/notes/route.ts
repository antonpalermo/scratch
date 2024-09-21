import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import options from "../auth/options";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function GET(req: Request) {
  const session = await getServerSession(options);

  if (!session) {
    return NextResponse.json(
      {
        success: false,
        message: "You do not have enough rights to access this resource"
      },
      { status: 401 }
    );
  }

  try {
    const notes = await prisma.notes.findMany({
      where: {
        owner: { email: session?.user?.email! }
      }
    });

    return NextResponse.json({
      data: notes,
      success: true,
      message: "successfully fetched all available notes."
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "unable to fetch all available notes."
    });
  }
}
