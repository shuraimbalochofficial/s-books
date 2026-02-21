import React from "react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const AddBookForm = () => {
  return (
    <div>
      <Card className="p-8">
        <form>
          <div>
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
          <div>
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
        </form>
      </Card>
    </div>
  );
};
//shadcn

export default AddBookForm;
