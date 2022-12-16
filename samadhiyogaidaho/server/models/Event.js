import mongoose from "mongoose";
const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

export const EventSchema = new Schema(
  {
    title: { type: String, required: true },
    location: { type: Object, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    cost: { type: Object, required: true },
    img: { type: String, required: true },


  },
  { timestamps: true, toJSON: { virtuals: true } }
);
