import mongoose from "mongoose";
import { AccountSchema } from "../models/Account";
import { ContactSchema } from "../models/Contact";
import { EventSchema } from "../models/Event.js";
import { NewsLetterSchema } from "../models/NewsLetter";
import { RetreatSchema } from "../models/Retreat.js";
import { UploadSchema } from "../models/Upload.js";
import { ValueSchema } from "../models/Value";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Account = mongoose.model("Account", AccountSchema);
  NewsLetters = mongoose.model("NewsLetter", NewsLetterSchema);
  Contacts = mongoose.model("Contact", ContactSchema);
  Retreats = mongoose.model("Retreat", RetreatSchema);
  Uploads = mongoose.model('Upload',UploadSchema)
  Events = mongoose.model('Event', EventSchema)
}

export const dbContext = new DbContext();
