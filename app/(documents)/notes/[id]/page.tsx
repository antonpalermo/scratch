import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import CreateLeafDialog from "../../_components/create-dialog";

export type NotePageProps = {
  params: { id: string };
};

export default async function NotePage({ params: { id } }: NotePageProps) {
  const note = await prisma.notes.findFirst({ where: { id } });

  if (!note) {
    return notFound();
  }

  return (
    <div>
      {JSON.stringify(note)}
      <CreateLeafDialog />
    </div>
  );
}
