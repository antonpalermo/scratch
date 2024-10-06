import Shell from "@/components/shell";
import options from "@/app/api/auth/options";
import { getServerSession } from "next-auth";

import CreateNoteDialog from "@/app/(main)/_components/create-dialog";

export default async function Dashboard() {
  const session = await getServerSession(options);

  return (
    <Shell>
      <div className="w-full flex items-center justify-between">
        <Shell.Heading>Dashboard</Shell.Heading>
        <CreateNoteDialog />
      </div>
      <div className="grid grid-cols-3 gap-5">
      </div>
    </Shell>
  );
}
