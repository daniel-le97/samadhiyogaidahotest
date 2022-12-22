import { Auth0Provider } from "@bcwdev/auth0provider";
import { schedulesService } from "../services/SchedulesService.js";
// import { schedulesService } from "../services/SchedulesService.js";
// import { newsLetterService } from "../services/NewsLetterService.js";
import BaseController from "../utils/BaseController.js";

export class SchedulesController extends BaseController {
  constructor() {
    super("api/schedules");
    this.router
      .get("", this.getAllSchedules)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post("", this.createSchedule)
      .delete("/:id", this.deleteSchedule)
      .put("/:id", this.updateSchedule);
  }

  async getAllSchedules(req, res, next) {
    try {
      const schedules = await schedulesService.getAllSchedules();
      res.send(schedules);
    } catch (error) {
      next(error);
    }
  }

  async createSchedule(req, res, next) {
    try {
      const newsLetter = await schedulesService.createSchedule(
        req.body,
        req.userInfo.id
      );
      res.send(newsLetter);
    } catch (error) {
      next(error);
    }
  }
  async deleteSchedule(req, res, next) {
    try {
      const schedule = await schedulesService.deleteSchedule(
        req.userInfo.id,
        req.params.id
      );
      res.send(schedule);
    } catch (error) {
      next(error);
    }
  }
  async updateSchedule(req, res, next) {
    try {
      const schedule = await schedulesService.updateSchedule(
        req.params.id,
        req.body,
        req.userInfo.id
      );
      res.send(schedule);
    } catch (error) {
      next(error);
    }
  }
}
