"use client";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import NoteForm from "@/app/(main)/_components/note-form";

export default function CreateNoteDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Note</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Create new note</DialogTitle>
          <DialogDescription>
            Give your note awesome name to make it pop!
          </DialogDescription>
        </DialogHeader>
        <NoteForm />
      </DialogContent>
    </Dialog>
  );
}
