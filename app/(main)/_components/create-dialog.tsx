"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { create } from "@/app/(main)/_actions/create-note";

import NoteForm from "./note-form";

function CreateNoteSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" form="create-form" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? "Creating" : "Create note"}
    </Button>
  );
}

export default function CreateNoteDialog() {
  const [open, setOpen] = useState(false);

  async function createNote(formData: FormData) {
    await create(formData);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
