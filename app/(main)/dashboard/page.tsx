import CreateNoteDialog from "@/app/(main)/_components/create-dialog";
import Shell from "@/components/shell";
import prisma from "@/lib/prisma";
import Note from "../_components/note";

export default async function Dashboard() {
  const notes = await prisma.notes.findMany();

  return (
    <Shell>
      <div className="w-full flex items-center justify-between">
        <Shell.Heading>Dashboard</Shell.Heading>
        <CreateNoteDialog />
      </div>
      <div className="grid grid-cols-3 gap-5">
        {notes.map(note => (
          <div key={note.id}>
            <Note details={note} />
          </div>
        ))}
      </div>
    </Shell>
  );
}
