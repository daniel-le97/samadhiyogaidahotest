import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

export const FAQSchema = new Schema(
  {
    q: { type: String, required: true },
    a: { type: String, required: true },
  },
  { timestamps: true }
);
