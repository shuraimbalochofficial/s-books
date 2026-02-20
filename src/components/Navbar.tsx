import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="">
        <div className="">
          <Link href="/">SBooks</Link>
          <div>
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
