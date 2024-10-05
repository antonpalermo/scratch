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
import { DialogClose } from "@/components/ui/dialog";

import leafSchema from "../../(main)/_actions/leaf-schema";
import createLeaf from "../../(main)/_actions/create-leaf";
import { usePathname } from "next/navigation";

export default function LeafForm() {
  const pathname = usePathname();
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(createLeaf, {
    success: false,
    message: ""
  });

  const form = useForm<z.output<typeof leafSchema>>({
    resolver: zodResolver(leafSchema),
    defaultValues: {
      name: "",
      noteId: pathname.split("/")[2]
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
                  <Input placeholder="Untitled" {...field} />
                </FormControl>
                <FormDescription>You can change this later</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="noteId"
            render={({ field }) => <Input {...field} className="hidden"/>}
          />
        </div>
        <div className="inline-flex w-full items-center justify-end space-x-3">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit">
            {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {pending ? "Creating" : "Create"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
