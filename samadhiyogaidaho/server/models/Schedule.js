import mongoose from "mongoose";
import { dbContext } from "../db/DbContext";
const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

export const ScheduleSchema = new Schema(
  {
    title: { type: String, required: true },
    location: { type: Object, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, require: true },
    description: { type: String, required: true },
    cost: { type: Object, required: true },
    img: { type: String, required: true},
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
