import mongoose from "mongoose";
const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

export const RetreatSchema = new Schema(
  {
    title: { type: String, required: true },
    subTitle: { type: String, required: false },
    location: { type: Object, required: false },
    date: { type: Date, required: true,},
    cost: { type: Object, required: true },
    description: { type: String, required: true },
    coverImg: { type: String, required: true },
    food: { type: Object, required: false },
    schedule: { type: Object },
    archived:{type:Boolean,required:true,default:false},
    featuredImages:[{type:String,required:false}],
    activities: [{ type: String, required: false }],
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

// RetreatSchema.virtual("creator", {
//   localField: "creatorId",
//   foreignField: "_id",
//   count: true,
//   ref: "Account",
// });

// TODO add this to dbContext
