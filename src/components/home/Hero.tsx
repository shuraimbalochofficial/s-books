import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="border-b border-[#DAD3C8]">
      <div>
        <div>
          <h1>Welcome to the Reading Room</h1>
          <p>
            A sanctuary for bibliophiles. Discover, share and discuss the
            written word with fellow readers acriss the realm.
          </p>

          <Button asChild>
            <Link href="/explore">
              Explore all Books <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
