import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ProgressiveForm } from "@/components/ProgressiveForm";

interface FormModalProps {
  children: React.ReactNode;
}

export function FormModal({ children }: FormModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md p-0 border-none shadow-2xl">
        <ProgressiveForm onComplete={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}