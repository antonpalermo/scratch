"use server";

import { ZodError, z } from "zod";
import leafSchema from "./leaf-schema";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export type FormState = {
  success: boolean;
  message: string;
  fields?: Record<string, string>;
  errors?: Record<string, string>[];
};

const toErrorMap = (error: ZodError<z.infer<typeof leafSchema>>) => {
  return error.errors.map(e => ({ field: e.path, message: e.message }));
};

export default async function createLeaf(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const noteDetails = Object.fromEntries(formData);
  const { data, success, error } = leafSchema.safeParse(noteDetails);

  if (!success) {
    console.log("err", toErrorMap(error));
    return {
      success: false,
      message: "Form contains invalid data",
      fields: data
    };
  }

  try {
    await prisma.leafs.create({
      data: { title: data.name }
    });

    revalidatePath("/notes");

    return { success: true, message: "untitled leaf created" };
  } catch (error) {
    return { success: false, message: "unable to create leaf" };
  }
}