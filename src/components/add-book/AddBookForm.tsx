import React from "react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";

const AddBookForm = () => {
  return (
    <div>
      <Card className="p-8">
        <form>
          <div>
            <Label>Book Title*</Label>
          </div>
        </form>
      </Card>
    </div>
  );
};
//shadcn

export default AddBookForm;
