import { newsLetterService } from "../services/NewsLetterService.js";
import { retreatsService } from "../services/RetreatsService.js";
import BaseController from "../utils/BaseController.js";

export class RetreatsController extends BaseController {
  constructor() {
    super("/api/retreats");
    this.router
    .get("", this.getallRetreats)
    .get('/:id',this.getCurrentRetreat)
 
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
  async getallRetreats(req,res,next){
    try {
        const retreats = await retreatsService.getAllRetreats()
        await res.send(retreats)
      } catch (error) {
        next(error)
      }
  }

  async getCurrentRetreat(req,res,next){
try {
    const currentRetreat = await retreatsService.getCurrentRetreat(req.params.id);
    await res.send(currentRetreat)
  } catch (error) {
    next(error)
  }
  }


}
