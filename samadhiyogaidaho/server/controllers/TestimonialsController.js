import { Auth0Provider } from "@bcwdev/auth0provider";
import { eventsService } from "../services/EventsService.js";
// import { newsLetterService } from "../services/NewsLetterService.js";
import BaseController from "../utils/BaseController.js";
import { testimonialsService } from "../services/TestimonialsService.js";
export class testimonialsController extends BaseController {
  constructor() {
    super("api/testimonials");
    this.router
      .get("", this.getAllTestimonials)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.createTestimonial)
      .delete("/:id", this.deleteTestimonial)
      .put("/:id", this.updateTestimonial);
  }

  async getAllTestimonials(req, res, next) {
    try {
      const testimonials = await testimonialsService.getAllTestimonials();
      res.send(testimonials);
    } catch (error) {
      next(error);
    }
  }

  async createTestimonial(req, res, next) {
    try {
      const newsLetter = await testimonialsService.createTestimonial(
        req.body,
        req.userInfo.id
      );
      res.send(newsLetter);
    } catch (error) {
      next(error);
    }
  }
  async deleteTestimonial(req, res, next) {
    try {
      const testimonial = await testimonialsService.deleteTestimonial(
        req.userInfo.id,
        req.params.id
      );
      res.send(testimonial);
    } catch (error) {
      next(error);
    }
  }
  async updateTestimonial(req, res, next) {
    try {
      const testimonial = await testimonialsService.updateTestimonial(
        req.params.id,
        req.body,
        req.userInfo.id
      );
      res.send(testimonial);
    } catch (error) {
      next(error);
    }
  }
}
