import { newsLetterService } from "../services/NewsLetterService.js";
import BaseController from "../utils/BaseController.js";

export class NewsLetterController extends BaseController {
  constructor() {
    super("/api/newsLetter");
    this.router
    .get("")
    .post("", this.createEvent);
  }

  async createEvent(req, res, next) {
    try {
      const newsLetter = await newsLetterService.addNewsLetterSubscription(
        req.body
      );
      await res.send(newsLetter);
    } catch (error) {
      next(error);
    }
  }
}
