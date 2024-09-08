"user server";

import prisma from "@/lib/prisma";

export async function create(name: string) {
  try {
    const note = await prisma.notes.create({
      data: {
        name
      }
    });

    return note;
  } catch (error) {
    console.log(error);
  }
}
