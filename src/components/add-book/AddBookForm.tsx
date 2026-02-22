"use client";
import React, { useState } from "react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const AddBookForm = () => {
  const [coverPreview, setCoverPreview] = useState(null);
  return (
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

            <div>
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
                  className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#E6B81D] file:text-white"
                />
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
