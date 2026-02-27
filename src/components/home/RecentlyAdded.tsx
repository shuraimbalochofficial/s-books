"use client";
import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import BookCard from "../BookCard";

// interface Book{

// }

const RecentlyAdded = () => {
  const [recentBooks, setRecentBooks] = useState<Array<Book>>([]);
  useEffect(() => {
    const fetchRecentBooks = async () => {
      try {
        const response = await axios.get("/api/books");
        const data = response.data;
        setRecentBooks(data.books);
      } catch (error) {
        console.log("Error fetching recent books:", error);
      }
    };

    fetchRecentBooks();
  }, []);

  if (recentBooks.length === 0) {
    return (
      <div className="py-5 px-5 min-h-screen flex items-center justify-center text-foreground">
        <Loader2 className="animate-spin mr-1" /> ...Loading Books
      </div>
    );
  }

  return (
    <section className="px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-foreground">Recently Added</h2>
        <Button variant="outline" asChild>
          <Link href="/explore">View All</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {recentBooks.map((book) => (
          <BookCard key={book._id} {...book} />
        ))}
      </div>
    </section>
  );
};

export default RecentlyAdded;
