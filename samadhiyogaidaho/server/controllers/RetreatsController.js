import { newsLetterService } from "../services/NewsLetterService.js";
import { retreatsService } from "../services/RetreatsService.js";
import BaseController from "../utils/BaseController.js";

export class RetreatsController extends BaseController {
  constructor() {
    super("/api/retreats");
    this.router
    .get("")
    .post("", this.createRetreat);
  }

  async createRetreat(req, res, next) {
    try {
      const Retreats = await retreatsService.createRetreat(req.body);
      await res.send(Retreats);
    } catch (error) {
      next(error);
    }
  }
}
