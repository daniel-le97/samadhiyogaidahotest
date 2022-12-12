import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

export const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: false},
    email: { type: String, required: true },
    subject: { type: String, required: true },
    // STUB be to sure add whats appropriate
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

ContactSchema.virtual("creator", {
  localField: "creatorId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});

// TODO add this to dbContext
