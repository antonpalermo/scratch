"use client";

import {
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { create } from "@/app/(main)/_actions/create-note";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { useState } from "react";

function CreateNoteSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" form="create-form" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? "Creating" : "Create note"}
    </Button>
  );
}

export default function CreateNote() {
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
        <form id="create-form" action={createNote}>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" name="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea id="description" name="description" />
            </div>
          </div>
          <div className="w-full space-x-3 inline-flex items-center justify-end">
            <Button variant="ghost">Cancel</Button>
            <CreateNoteSubmitButton />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
