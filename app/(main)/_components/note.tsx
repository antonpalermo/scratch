"use client";

import moment from "moment";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export type NoteProps = {
  details: {
    id: string;
    name: string;
    description: string | null;
    updatedAt: Date;
  };
};

export default function Note({
  details: { id, name, description, updatedAt }
}: NoteProps) {
  const router = useRouter();

  return (
    <Card>
      <div className="min-h-[290px] relative">
        <Image
          src={"https://ui.shadcn.com/placeholder.svg"}
          alt="placeholder"
          objectFit="cover"
          fill
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold">{name}</h3>
        {description && (
          <p className="text-sm font-medium text-gray-500">{description}</p>
        )}
        <div className="w-full inline-flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">
            Last modified {moment(updatedAt).fromNow()}
          </span>
          <Button variant="link" onClick={() => router.push(`/notes/${id}`)}>
            View
          </Button>
        </div>
      </div>
    </Card>
  );
}
