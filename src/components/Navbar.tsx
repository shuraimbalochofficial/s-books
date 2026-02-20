"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { BookKey } from "lucide-react";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  console.log(pathname);
  function isActive(path: string) {
    if (pathname === path) {
      return true;
    }
    return false;
  }
  return (
    <nav className="border-b border-[#DAD3C8] bg-[#FCFAF7]/50 backdrop-blur-xs sticky top-0 z-50 px-4">
      <div className="mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <BookKey className="w-6 h-6" />
            <span className="text-xl font-bold text-foreground">SBooks</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button>
              <Link href="/">Feed</Link>
            </Button>
            <Button>
              <Link href="/">Explore </Link>
            </Button>
            <Button>
              <Link href="/">Add Book</Link>
            </Button>
            <Button>
              <Link href="/">Library</Link>
            </Button>
            <Button>
              <Link href="/">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
