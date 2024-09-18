import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import LeafForm from "./leaf-form";

export default function CreateLeafDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Leaf</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Create new leaf</DialogTitle>
          <DialogDescription>
            Give your note awesome name to make it pop!
          </DialogDescription>
        </DialogHeader>
        <LeafForm />
      </DialogContent>
    </Dialog>
  );
}
