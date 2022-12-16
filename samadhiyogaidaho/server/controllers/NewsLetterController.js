import { newsLetterService } from "../services/NewsLetterService.js";
import BaseController from "../utils/BaseController.js";

export class NewsLetterController extends BaseController {
  constructor() {
    super("/api/newsLetter");
    this.router
      .get("")
      .post("", this.addNewsLetterSubscription)
      .delete(":id", this.deleteNewsLetterSubscription);
  }

  async addNewsLetterSubscription(req, res, next) {
    try {
      const newsLetter = await newsLetterService.addNewsLetterSubscription(
        req.body
      );
      await res.send(newsLetter);
    } catch (error) {
      next(error);
    }
  }
   async deleteNewsLetterSubscription(req, res, next){
    try{
      const newsLetter = await newsLetterService.deleteNewsLetterSubscription(req.params.id, req.userInfo.id)
   res.send(newsLetter)
    }
    catch (error) {
    next(error)
    }
    }
}
