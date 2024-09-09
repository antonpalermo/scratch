"use server";

import { z } from "zod";

import prisma from "@/lib/prisma";

const noteInputSchema = z.object({
  name: z.string().min(1),
  description: z.optional(z.string())
});

export async function create(formData: FormData) {
  const data: z.infer<typeof noteInputSchema> = {
    name: formData.get("name") as string,
    description: formData.get("description") as string
  };

  const sanitizedData = noteInputSchema.parse(data);

  try {
    await prisma.notes.create({
      data: sanitizedData
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
