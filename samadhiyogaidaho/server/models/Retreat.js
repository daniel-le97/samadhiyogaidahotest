import mongoose from "mongoose";
const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

export const RetreatSchema = new Schema(
  {
    title: { type: String, required: true },
    location: { type: Object, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: { type: String, required: true },
    cost: { type: Object, required: true },
    subTitle: { type: String, required: false },
    coverImg: { type: String, required: true },
    accommodations: { type: Object, required: false },
    food: { type: Object, required: false },
    schedule: { type: Object },
    vacancy: { type: Object, required: true },
    archived:{type:Boolean,required:true,default:false},
    featuredImgs:[{type:String,required:false}],
    yoga: { type: String, required: true },
    activities: [{ type: String, required: false }],
    highlights: [{ type: String, required: false }],
    FAQS: [{ type: Object, required: true }],
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
