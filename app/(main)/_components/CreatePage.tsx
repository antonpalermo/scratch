"use client";
import { MouseEvent } from "react";

import Icon from "@/components/icon";
import { Button } from "@/components/ui/button";

export default function CreatePage() {
  const handleOnCreate = async () => {
    try {
      const request = await fetch("/api/pages/create", { method: "POST" });
      const page = await request.json();

      console.log(page);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      variant="ghost"
      onClick={handleOnCreate}
      className="w-full justify-start px-3 py-2 text-muted-foreground hover:text-primary"
    >
      <Icon name="file" className="mr-2 h-4 w-4" /> Create new page
    </Button>
  );
}
