"use client";

import { z } from "zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useFormStatus } from "react-dom";
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

function CreateNoteSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" form="create-form" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? "Creating" : "Create note"}
    </Button>
  );
}

export default function NoteForm() {
  const form = useForm<z.output<typeof noteSchema>>({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      name: "",
      description: ""
    }
  });

  return (
    <Form {...form}>
      <form>
        <div className="grid gap-4 py-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Untitled Note" {...field} />
                </FormControl>
                <FormDescription>You can change this later</FormDescription>
                <FormMessage />
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
          <Button variant="ghost">Cancel</Button>
          <CreateNoteSubmitButton />
        </div>
      </form>
    </Form>
  );
}
