"use client";
import React, { useState } from "react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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

const AddBookForm = () => {
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  return (
    // jaan zer chunu
    <div>
      <Card className="p-8">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="font-semibold text-lg">
              Book Title*
            </Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter the book title"
              required
              className="h-12 text-base!"
            />
          </div>
          {/* heheehhehhehheehhhehheh */}
          <div className="space-y-2">
            <Label htmlFor="author" className="font-semibold text-lg">
              Author *
            </Label>

            <Input
              id="author"
              name="author"
              placeholder="Enter the author's name"
              required
              className="h-12 text-base!"
            />
          </div>
          {/* heheehhehhehheehhhehheh */}
          <div className="space-y-2">
            <Label htmlFor="cover" className="font-semibold text-lg">
              Cover Image *
            </Label>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-32 h-48 bg-muted rounded overflow-hidden border flex items-center justify-center">
                {coverPreview ? (
                  <img
                    src={coverPreview}
                    alt="cover preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div>No Cover Selected</div>
                )}
              </div>

              <div className="flex-1">
                <input
                  id="cover"
                  name="cover"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0] ?? null;
                    if (!file) {
                      setCoverPreview(null);
                      return;
                    }

                    if (coverPreview) URL.revokeObjectURL(coverPreview);
                    const url = URL.createObjectURL(file);
                    setCoverPreview(url);
                  }}
                  className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#E6B81D] file:text-white"
                />
                <p className="text-sm! text-muted-foreground mt-1">
                  Upload a cover image (JPEG/PNG). Max size: 5MB.
                </p>
              </div>

              {/* Genre */}
              <div className="space-y-3">
                <Label className="font-semibold text-lg">Genre *</Label>
                <div>
                  {popularGenres.map((genre) => (
                    <Button key={genre}></Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};
//shadcn

export default AddBookForm;
