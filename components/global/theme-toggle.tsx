"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const isDarkMode = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
    >
      {isDarkMode ? (
        <>
          <Moon />
          <span className="sr-only">Switch to light mode</span>
        </>
      ) : (
        <>
          <Sun />
          <span className="sr-only">Switch to dark mode</span>
        </>
      )}
    </Button>
  );
}
