import { BadRequest } from "@bcwdev/auth0provider/lib/Errors";
import { dbContext } from "../db/DbContext";

class NewsLetterService {
  async addNewsLetterSubscription(newsLetterData) {
    const emailString = newsLetterData.email.toString();
    // let hi = newsLetterData;
    const newsLetter = await dbContext.NewsLetter.findOne({
      email: emailString,
    });
    if (newsLetter) {
      if (newsLetterData.phone != newsLetter.phone) {
        newsLetter.phone = newsLetterData.phone.toString();
        await newsLetter.save();
        return newsLetter;
      }
      throw new BadRequest("already signed up");
    }
    let createdNewsLetter = await dbContext.NewsLetter.create(newsLetterData);
    return createdNewsLetter;
  }
}
export const newsLetterService = new NewsLetterService();
