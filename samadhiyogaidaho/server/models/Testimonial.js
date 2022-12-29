import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

export const TestimonialSchema = new Schema(
  {
    rating: { type: String, required: true },
    text: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);
