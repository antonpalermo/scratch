import prisma from "@/lib/prisma";
import Editor from "@/components/editor";

import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const id = params.slug;

  const page = await prisma.pages.findUnique({
    where: { id }
  });

  if (!page) {
    return notFound();
  }

  return <Editor />;
}
