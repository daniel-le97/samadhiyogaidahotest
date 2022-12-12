import mongoose from "mongoose";
import { AccountSchema } from "../models/Account";
import { ContactSchema } from "../models/Contact";
import { NewsLetterSchema } from "../models/NewsLetter";
import { ValueSchema } from "../models/Value";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Account = mongoose.model("Account", AccountSchema);
  NewsLetter = mongoose.model("NewsLetter", NewsLetterSchema);
  Contact = mongoose.model("Contact", ContactSchema);
}

export const dbContext = new DbContext();
