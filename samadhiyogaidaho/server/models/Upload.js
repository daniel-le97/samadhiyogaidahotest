import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const UploadSchema = new Schema(
  {
    url: { type: String, required: true },
    name: { type: String, required: true },
    pocketId: { type: String, required: true },
    pocketCollectionId: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
