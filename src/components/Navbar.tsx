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
            <Button
              variant={isActive("/") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link href="/">Feed</Link>
            </Button>
            {/* <------------------------------------------> */}
            <Button
              variant={isActive("/explore") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link href="/explore">Explore </Link>
            </Button>
            {/* <------------------------------------------> */}
            <Button
              variant={isActive("/add-book") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link href="/add-book">Add Book</Link>
            </Button>
            {/* <------------------------------------------> */}
            <Button
              variant={isActive("/library") ? "default" : "ghost"}
              size="sm"
              asChild
            >
              <Link href="/library">Library</Link>
            </Button>
            {/* <------------------------------------------> */}
            <Button variant={"outline"}>
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
