"use client";

import { z } from "zod";
import { useRef } from "react";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useFormState, useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import noteSchema from "../_actions/note-schema";
import createNote from "../_actions/create-note";
import { DialogClose } from "@/components/ui/dialog";

export default function NoteForm() {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(createNote, {
    success: false,
    message: ""
  });

  const form = useForm<z.output<typeof noteSchema>>({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      name: "",
      description: ""
    }
  });

  const noteFormRef = useRef<HTMLFormElement>(null);

  return (
    <Form {...form}>
      <form
        ref={noteFormRef}
        action={formAction}
        onSubmit={e => {
          e.preventDefault();
          form.handleSubmit(() => {
            formAction(new FormData(noteFormRef.current!));
          })(e);
        }}
      >
        <div className="grid gap-4 py-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Name</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input placeholder="Untitled Note" {...field} />
                </FormControl>
                <FormDescription>You can change this later</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="w-full space-x-3 inline-flex items-center justify-end">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit">
            {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {pending ? "Creating" : "Create note"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
