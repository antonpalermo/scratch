"use client";

import {
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { create } from '@/app/(main)/_actions/create-note'

export default function CreateNote() {
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
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Textarea id="username" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost">Cancel</Button>
          <Button type="submit">Create note</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
