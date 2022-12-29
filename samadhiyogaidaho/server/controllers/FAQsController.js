import { Auth0Provider } from "@bcwdev/auth0provider";
import { faqsService } from "../services/FAQsService.js";
import BaseController from "../utils/BaseController.js";

export class FAQsController extends BaseController {
  constructor() {
    super("/api/faqs");
    this.router
      .get("", this.getFAQs)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.createFAQ)
      .put("/:id", this.updateFAQ)
      .delete("/:id", this.deleteFAQ);
  }
  async getFAQs(req, res, next) {
    try {
      const Faqs = await faqsService.getFAQs();
      res.send(Faqs);
    } catch (error) {
      next(error);
    }
  }
  async createFAQ(req, res, next) {
    try {
      const FAQ = await faqsService.createFAQ(req.body, req.userInfo.id);
      res.send(FAQ);
    } catch (error) {
      next(error);
    }
  }
  async updateFAQ(req, res, next) {
    try {
      const FAQ = await faqsService.updateFAQ(req.body, req.userInfo.id ,req.params.id);
      res.send(FAQ);
    } catch (error) {
      next(error);
    }
  }

  async deleteFAQ(req, res, next) {
    try {
      const FAQ = await faqsService.deleteFAQ(req.params.id, req.userInfo.id);
      res.send(FAQ);
    } catch (error) {
      next(error);
    }
  }
}
