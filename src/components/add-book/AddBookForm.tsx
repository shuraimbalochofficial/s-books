"use client";
import React, { useState } from "react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { BookPlus } from "lucide-react";

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
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    if (coverFile) {
      formData.set("cover", coverFile);
    }

    console.log("Form Data: ", formData);

    setIsLoading(false);
  };
  return (
    <div className="max-w-3xl mx-auto py-6">
      <Card className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
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
                      setCoverFile(null);
                      setCoverPreview(null);
                      return;
                    }

                    if (coverPreview) URL.revokeObjectURL(coverPreview);
                    const url = URL.createObjectURL(file);
                    setCoverFile(file);
                    setCoverPreview(url);
                  }}
                  className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#E6B81D] file:text-white"
                />
                <p className="text-sm! text-muted-foreground mt-1">
                  Upload a cover image (JPEG/PNG). Max size: 5MB.
                </p>
              </div>
            </div>

            {/* Genre */}
            <div className="space-y-3">
              <Label className="font-semibold text-lg">Genre *</Label>
              <div className="flex flex-wrap gap-2">
                {popularGenres.map((genre) => (
                  <Button
                    key={genre}
                    type="button"
                    variant={selectedGenre === genre ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => setSelectedGenre(genre)}
                  >
                    {genre}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="font-semibold text-lg">
                Description *
              </Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Tell Us about this Book..."
                rows={6}
                required
                className="resize-none text-base!"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="year" className="font-semibold text-lg">
                Publication Year
              </Label>

              <Input
                id="year"
                name="publishedYear"
                type="number"
                placeholder="2007"
                min="1000"
                max={new Date().getFullYear()}
                className="h-12 text-base!"
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                size={"lg"}
                className="w-full"
                disabled={isLoading}
              >
                <BookPlus
                  className={`w-5 h-5 mr-2 `}
                />
                {isLoading ? "Adding..." : "Add Book to Library"}
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};
//shadcn

export default AddBookForm;
