import { Auth0Provider } from "@bcwdev/auth0provider";
import { eventsService } from "../services/EventsService.js";
// import { newsLetterService } from "../services/NewsLetterService.js";
import BaseController from "../utils/BaseController.js";

export class EventsController extends BaseController {
  constructor() {
    super("/api/events");
    this.router
      .get("")
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.createEvent)
      .delete(":id", this.deleteEvent);
  }

  async createEvent(req, res, next) {
    try {
      const newsLetter = await eventsService.createEvent(
        req.body,
        req.userInfo?.id
      );
      res.send(newsLetter);
    } catch (error) {
      next(error);
    }
  }
  async deleteEvent(req, res, next) {
    try {
      const event = await eventsService.deleteEvent(req.body, req.userInfo.id);
     res.send(event);
    } catch (error) {
      next(error);
    }
  }
}
