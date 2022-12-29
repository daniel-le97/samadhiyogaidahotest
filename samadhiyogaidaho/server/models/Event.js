import mongoose from "mongoose";
import { dbContext } from "../db/DbContext";
const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

export const EventSchema = new Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    address: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, require: true },
    description: { type: String, required: true },
    cost: { type: Object, required: true },
    img: {
      type: String,
      required: true,
      default:
        "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    isArchived: { type: Boolean, default: false },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
