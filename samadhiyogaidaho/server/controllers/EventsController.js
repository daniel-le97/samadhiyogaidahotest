import { Auth0Provider } from "@bcwdev/auth0provider";
import { eventsService } from "../services/EventsService.js";
// import { newsLetterService } from "../services/NewsLetterService.js";
import BaseController from "../utils/BaseController.js";

export class EventsController extends BaseController {
  constructor() {
    super("api/events");
    this.router
      .get("", this.getAllEvents)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.createEvent)
      .delete("/:id", this.deleteEvent)
      .put("/:id", this.updateEvent);
  }

  async getAllEvents(req, res, next) {
    try {

      const events = await eventsService.getAllEvents();
      res.send(events);
    } catch (error) {
      next(error);
    }
  }

  async createEvent(req, res, next) {
    try {
      
      const newsLetter = await eventsService.createEvent(
        req.body,
        req.userInfo.id
      );
      res.send(newsLetter);
    } catch (error) {
      next(error);
    }
  }
  async deleteEvent(req, res, next) {
    try {
      const event = await eventsService.deleteEvent(
        req.userInfo.id,
        req.params.id
      );
      res.send(event);
    } catch (error) {
      next(error);
    }
  }
  async updateEvent(req, res, next) {
    try {
      const event = await eventsService.updateEvent(
        req.params.id,
        req.body,
        req.userInfo.id
      );
      res.send(event);
    } catch (error) {
      next(error);
    }
  }
}
