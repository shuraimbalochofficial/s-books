import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ _id, title, author, cover, genre, addedBy }: Book) => {
  return (
    <Link href={`/book/${_id}`}>
      <div>
        <div className="relative w-full h-80 overflow-hidden">
          <Image
            src={cover}
            alt="cover"
            className="w-full h-full object-contain rounded-t-sm transition-transform duration-300 ease-in-out group-hover:scale-105"
            fill
          />
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
