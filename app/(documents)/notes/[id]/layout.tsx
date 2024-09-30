import Icon from "@/components/icon";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { ReactNode } from "react";

export type NotesLayoutProps = {
  children: ReactNode;
  params: { id: string };
};

export default async function NotesLayout({
  children,
  params
}: NotesLayoutProps) {
  const leaf = await prisma.leafs.findMany({ where: { noteId: params.id } });

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden space-y-2 border-r bg-muted/40 px-3 md:block">
        {JSON.stringify(leaf)}
      </div>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        {children}
      </main>
    </div>
  );
}
