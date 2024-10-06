import Link from "next/link";
import Image from "next/image";

import Shell from "@/components/shell";
import { Button } from "@/components/ui/button";

export default function PageNotFound() {
  return (
    <Shell className="min-h-full">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="h-96 w-96">
          <Image
            src="/60-Failure.svg"
            width={550}
            height={550}
            alt="Product illustration"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
        <div className="w-full space-y-5 text-center">
          <Shell.Heading>Ooh no, 404!</Shell.Heading>
          <p className="text-slate-500">
            The resource you are looking for is not available or moved to
            another location
          </p>
          <Button variant={"link"} asChild>
            <Link href={"/home"}>Return Home</Link>
          </Button>
        </div>
      </div>
    </Shell>
  );
}
