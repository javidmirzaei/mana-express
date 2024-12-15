import { Schema, model } from "mongoose";

export const blogSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, minlength: 5 },
    text: {
      type: String,
      required: true,
      trim: true,
      minlength: 4,
    },
    show: { type: Boolean, default: false },
    likes: { type: Number, default: 0 },
    bookmarks: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
);

export const blogModel = model("blog", blogSchema);
