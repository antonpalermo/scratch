import { ReactNode } from "react";

export type NotesLayoutProps = {
  children: ReactNode;
};

export default function NotesLayout({ children }: NotesLayoutProps) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
