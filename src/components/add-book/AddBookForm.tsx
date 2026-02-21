import React, { useState } from "react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const AddBookForm = () => {
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  return (
    <div>
      <Card className="p-8">
        <form>
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
              <div></div>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};
//shadcn

export default AddBookForm;
