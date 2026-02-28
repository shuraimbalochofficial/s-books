import { Funnel } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="py-5 px-5">
      <h2 className="text-5xl! md:text-3xl font-bold text-foreground">Explore Our Collection</h2>
      <p className="text-base text-[#847062] leading-relaxed">Browse through (x) literary treasures</p>

      <div className="mt-8 flex">
        <Funnel />
        <p>Filter By Genre</p>
      </div>
    </div>
  );
};

export default page;
