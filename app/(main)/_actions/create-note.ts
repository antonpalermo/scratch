"use server";

import { z, ZodError } from "zod";

import prisma from "@/lib/prisma";
import noteSchema from "./note-schema";

export type FormState = {
  success: boolean;
  message: string;
  fields?: Record<string, string>;
  errors?: Record<string, string>[];
};

const toErrorMap = (error: ZodError<z.infer<typeof noteSchema>>) => {
  return error.errors.map(e => ({ field: e.path, message: e.message }));
};

export default async function createNote(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const noteDetails = Object.fromEntries(formData);
  const { data, success, error } = noteSchema.safeParse(noteDetails);

  if (!success) {
    console.log("err", toErrorMap(error));
    return {
      success: false,
      message: "Form contains invalid data",
      fields: data
    };
  }

  try {
    await prisma.notes.create({
      data
    });
    return { success: true, message: "Notes successfully created" };
  } catch (error) {
    throw error;
  }
}
