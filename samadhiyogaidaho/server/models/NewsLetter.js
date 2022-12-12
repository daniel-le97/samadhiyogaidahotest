import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

export const NewsLetterSchema = new Schema(
  {
    email: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

NewsLetterSchema.virtual("creator", {
  localField: "creatorId",
  foreignField: "_id",
  count: true,
  ref: "Account",
});

// TODO add this to dbContext
