import { dbContext } from "../db/DbContext";
import { update } from "../utils/Functions";
import { getAdmins } from "./AccountService";


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
    const schedule = await dbContext.Schedules.create(scheduleData);

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

   await update(scheduleData, schedule);
    await schedule.save()
    return schedule;
  }
}
export const schedulesService = new SchedulesService();
