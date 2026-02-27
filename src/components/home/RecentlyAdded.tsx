"use client";
import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

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
    <section>
      <div className="">
        <h2>Recently Added</h2>
        <Button variant="outline" asChild>
          <Link href="/explore">View All</Link>
        </Button>
      </div>
    </section>
  );
};

export default RecentlyAdded;
