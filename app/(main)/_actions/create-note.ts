"use server";

import { z, ZodError } from "zod";

import prisma from "@/lib/prisma";
import noteSchema from "./note-schema";

export async function create(formData: FormData) {
  const noteDetails = Object.fromEntries(formData);

  try {
    const data = noteSchema.parse(noteDetails);

    await prisma.notes.create({
      data
    });
  } catch (error) {
    if (error instanceof ZodError) {
      console.log("zod error: ", error);

      throw error;
    }

    throw error;
  }
}
