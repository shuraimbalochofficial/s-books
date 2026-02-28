"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Funnel } from "lucide-react";
import React, { useEffect, useState } from "react";

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
  const [books, setBooks] = useState<Array<Book>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/books");
        const data = response.data;
        setBooks(data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([]);
      } finally {
        setLoading(false);
      }

      fetchBooks();
    };
  }, []);

  return (
    <div className="py-5 px-5">
      <h2 className="text-5xl! md:text-3xl font-bold text-foreground">
        Explore Our Collection
      </h2>
      <p className="text-base text-[#847062] leading-relaxed">
        Browse through {books.length} literary treasures
      </p>

      <div className="mt-8 flex items-center text-[#847062]">
        <Funnel className="w-4 h-4 mr-1" />
        <p>Filter By Genre</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
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
      <p>Showing {books.length} Books</p>
    </div>
  );
};

export default page;
