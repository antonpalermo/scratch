"use client";

import Icon from "@/components/icon";
import { Button } from "@/components/ui/button";

export default function CreatePage() {
  return (
    <Button
      className="w-full justify-start px-3 py-2 text-muted-foreground hover:text-primary hover:text-slate-200"
      variant="ghost"
    >
      <Icon name="file" className="mr-2 h-4 w-4" /> Create new page
    </Button>
  );
}
