"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { Button } from "./button";

export default function BackButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const onBack = () => router.back();

  return (
    <Button onClick={onBack} className="flex gap-1" variant="secondary">
      <IconArrowLeft className="size-4 mr-2" />
      {children}
    </Button>
  );
}
