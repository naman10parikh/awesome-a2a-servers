import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function SiteHeader() {
  return (
    <header className="supports-backdrop-blur:bg-white/60 dark:bg-background-dark/60 sticky top-0 z-40 w-full border-b bg-white/95 dark:bg-background-dark/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Awesome A2A Servers
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Button variant="ghost" className="mr-2" asChild>
              <Link href="/routes/servers">Browse</Link>
            </Button>
            <Button variant="ghost" className="mr-2">GitHub</Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
} 