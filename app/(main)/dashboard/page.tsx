import CreateNoteDialog from "@/app/(main)/_components/create-dialog";
import Shell from "@/components/shell";
import prisma from "@/lib/prisma";
import Note from "../_components/note";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/options";

export default async function Dashboard() {
  const session = await getServerSession(options);
  const notes = await prisma.notes.findMany({
    where: {
      owner: {
        email: session?.user?.email!
      }
    }
  });

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
