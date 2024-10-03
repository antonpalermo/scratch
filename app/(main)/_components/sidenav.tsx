import dynamicIconImports from "lucide-react/dynamicIconImports";
import SidenavItem from "./sidenav-item";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/options";
import Link from "next/link";

type Item = {
  href: string;
  label: string;
  icon: keyof typeof dynamicIconImports;
};

export default async function Sidenav() {
  const session = await getServerSession(options);

  const items: Item[] = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: "layout-dashboard"
    },
    {
      href: "/drafts",
      label: "Drafts",
      icon: "drafting-compass"
    }
  ];

  const notes = await prisma.notes.findMany({
    where: { owner: { email: session?.user?.email! } }
  });

  return (
    <nav className="grid gap-5 items-start px-2 text-sm font-medium lg:px-4">
      <div>
        {items.map(item => (
          <SidenavItem
            key={item.label}
            label={item.label}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="grid-row-2 grid">
        <span className="py-2 text-sm font-semibold text-gray-500">Notes</span>
        {notes.map(note => (
          <Link
            key={note.id}
            href={`/notes/${note.id}`}
            className="rounded px-3 py-2 hover:bg-slate-100"
          >
            {note.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
