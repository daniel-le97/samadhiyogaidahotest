import { newsLetterService } from "../services/NewsLetterService.js";
import { retreatsService } from "../services/RetreatsService.js";
import { uploadsService } from "../services/UploadsService.js";
import BaseController from "../utils/BaseController.js";

export class RetreatsController extends BaseController {
  constructor() {
    super("/api/uploads");
    this.router
      .get("", this.getAllUploads)
    
      .post("", this.addUpload);
  }

  async addUpload(req, res, next) {
    try {
     const upload = await uploadsService.addUpload(req.body)
      await res.send(upload);
    } catch (error) {
      next(error);
    }
  }
  async getAllUploads(req, res, next) {
    try {
      const retreats = await uploadsService.getAllUploads();
      await res.send(retreats);
    } catch (error) {
      next(error);
    }
  }

 
}
