import { redirect } from "next/navigation";

export default async function NotesPage() {
  return redirect("/home");
}
