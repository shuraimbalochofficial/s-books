import { Button } from "@/components/ui/button";
import { Funnel } from "lucide-react";
import React, { useState } from "react";

const popularGenres = [
  "Classic",
  "Fiction",
  "Romance",
  "Drama",
  "Gothic",
  "Dystopian",
  "Adventure",
  "Poetry",
  "Mystery",
  "Fantasy",
];

const page = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  return (
    <div className="py-5 px-5">
      <h2 className="text-5xl! md:text-3xl font-bold text-foreground">
        Explore Our Collection
      </h2>
      <p className="text-base text-[#847062] leading-relaxed">
        Browse through (x) literary treasures
      </p>

      <div className="mt-8 flex items-center text-[#847062]">
        <Funnel className="w-4 h-4 mr-1" />
        <p>Filter By Genre</p>
      </div>

      <div>
        {popularGenres.map((genre) => (
          <Button
            key={genre}
            type="button"
            variant={selectedGenre === genre ? "default" : "outline"}
            size="sm"
            onClick={() => handleGenreClick(genre)}
            className="rounded-full"
          >
            {genre}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default page;
