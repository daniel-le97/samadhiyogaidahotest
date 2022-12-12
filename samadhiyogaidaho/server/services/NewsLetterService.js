import { BadRequest } from "@bcwdev/auth0provider/lib/Errors";
import { dbContext } from "../db/DbContext";

class NewsLetterService {
  async addNewsLetterSubscription(email) {
    const res = await dbContext.NewsLetter.find({ email });
    if (res) {
      throw new BadRequest("already signed up");
    }
    let newsLetter = await dbContext.NewsLetter.create({email: email});
    return newsLetter;
  }
}
export const newsLetterService = new NewsLetterService();
