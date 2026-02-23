// Did NOT use Ai, i coded all this part myself and as mentioned 30% should be Ai so saving rest percentages for future and coded this part myself while lookng at the AddBookForm.tsx

import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    cover: { type: String, required: true },
    genre: { type: String, required: true },

    description: { type: String, required: true },
    publishedYear: { type: Number },
    addedBy: {
      id: { type: String, required: true },
      firstName: { type: String, required: true },
    },
  },
  { timestamps: true },
);


