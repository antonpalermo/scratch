import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Landing() {
  return (
    <div className="space-y-3 sm:space-y-5 md:space-y-10">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Organize notes, documents and manymore in one place
      </h1>
      <h3 className="text-lg sm:text-base font-semibold text-slate-500">
        Work together, organize together, faster together.
      </h3>
      <Button>
        Get started <ArrowRight className="ml-3 w-5 h-5" />
      </Button>
    </div>
  );
}
