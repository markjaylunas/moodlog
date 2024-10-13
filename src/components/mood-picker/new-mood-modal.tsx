"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

type Props = { mood: string };

export default function NewMoodModal({ mood }: Props) {
  const router = useRouter();

  const onOpenChange = (isOpen: boolean) => {
    if (!isOpen) router.push("/mood");
  };

  return (
    <Dialog onOpenChange={onOpenChange} defaultOpen>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{mood}</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            cupiditate fugit exercitationem! Vero sapiente voluptas eius sint
            minima dolores fuga hic, natus non fugit officiis laudantium est
            autem praesentium aspernatur!
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
