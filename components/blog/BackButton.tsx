"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { MoveLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  const handleBackClick = () => {
    const previousPath = document.referrer;
    const isInternal = previousPath.includes(window.location.origin);

    if (isInternal) {
      router.back();
    } else {
      router.push("/blog");
    }
  };

  return (
    <Button
      variant="link"
      className="cursor-pointer text-muted-foreground hover:text-primary"
      onClick={handleBackClick}
    >
      <MoveLeft />
      Back to blog
    </Button>
  );
}
