"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full px-10">
      <div className="max-w-5xl mx-auto flex flex-row py-10 justify-between items-center">
        <Image width={100} height={80} src="/scratch-dark.svg" alt="logo" />
        <div className="space-x-3">
          <Button variant="ghost">Docs</Button>
          <Button variant="ghost">Pricing</Button>
          <Button>Sign In</Button>
        </div>
      </div>
    </nav>
  );
}
