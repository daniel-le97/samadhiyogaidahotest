import { BadRequest } from "@bcwdev/auth0provider/lib/Errors";
import { dbContext } from "../db/DbContext";
import { getAdmins } from "./AccountService";

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
  async deleteNewsLetterSubscription(newsLetterId, userId) {
    await getAdmins(userId);
    const newsLetter = this.getNewsLetterById(newsLetterId);
    await newsLetter.remove();
    return "newsletter deleted";
  }
  async getNewsLetterById(id) {
    const newsLetter = await dbContext.NewsLetters.find({ id });
    if (!newsLetter) {
      throw new BadRequest("couldn't find newsletter");
    }
    return newsLetter;
  }
}
export const newsLetterService = new NewsLetterService();
