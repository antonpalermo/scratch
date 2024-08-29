"use client";

import { Button } from "@/components/ui/button";
import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const scrolled = useScrollTop();

  return (
    <nav
      className={cn(
        "sticky top-0 w-full px-5 md:px-10",
        scrolled && "border-b shadow bg-white bg-opacity-90"
      )}
    >
      <div className="max-w-6xl mx-auto flex flex-row py-5 justify-between items-center">
        <Image width={100} height={80} src="/scratch-dark.svg" alt="logo" />
        <div className="space-x-3">
          <Button variant="ghost">Sign In</Button>
          <Button>Request a demo</Button>
        </div>
      </div>
    </nav>
  );
}
