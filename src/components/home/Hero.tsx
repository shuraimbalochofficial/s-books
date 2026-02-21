import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="border-b border-[#DAD3C8]">
      <div>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-7xl! md:text-6xl font-bold text-foreground">
            Welcome to the Reading Room
          </h1>
          <p className="text-lg text-[#847062] leading-relaxed">
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
