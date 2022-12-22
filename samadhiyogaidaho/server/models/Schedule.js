import mongoose from "mongoose";
import { dbContext } from "../db/DbContext";
const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

export const ScheduleSchema = new Schema(
  {
    title: { type: String, required: true },
    location: { type: Object, required: true },
    time: { type: String, required: true },
    description: { type: String, required: false},
    cost: { type: Object, required: true, default: 0},
    address:{type: String, required: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
