import { dbContext } from "../db/DbContext";
import { getAdmins } from "./AccountService";
import { update } from "./EventsService.js";

class SchedulesService {
  async getAllSchedules() {
    const schedules = await dbContext.Schedules.find();
    return schedules;
  }
  async deleteSchedule(userId, scheduleId) {
    await getAdmins(userId);
    const schedule = await this.getScheduleById(scheduleId);
    // @ts-ignore
    await schedule.remove();
    return schedule;
  }
  async createSchedule(scheduleData, userId) {
    await getAdmins(userId);
    // scheduleData.creatorId = userId;
    const schedule = await dbContext.Schedules.create(scheduleData);
    // populate
    return schedule;
  }
  async getScheduleById(id) {
    const schedule = await dbContext.Schedules.findById(id);
    if (!schedule) {
      throw new BadRequest("unable to find schedule");
    }
    return schedule;
  }
  async updateSchedule(scheduleId, scheduleData, userId) {
    await getAdmins(userId);
    let schedule = await this.getScheduleById(scheduleId);

    // schedule.address =scheduleData.address || schedule.address;
    // schedule.location = scheduleData.location || schedule.location;
    // schedule.cost = scheduleData.cost || schedule.cost;
    // schedule.title = scheduleData.title || schedule.title;
    // schedule.description = scheduleData.description || schedule.description;
    // schedule.time = scheduleData.time || schedule.time;
    await update(scheduleData, schedule);
    await schedule.save();
    return schedule;
  }
}
export const schedulesService = new SchedulesService();
