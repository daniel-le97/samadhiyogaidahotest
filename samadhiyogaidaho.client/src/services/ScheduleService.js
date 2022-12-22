import { AppState } from "../AppState.js";
import { Schedule } from "../models/Schedule.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class ScheduleService {
  async createSchedule(scheduleData) {
   logger.log(scheduleData)
    const res = await api.post("api/schedules", scheduleData);
    let newSchedule = new Schedule(res.data);
    logger.log(newSchedule)
    AppState.schedules.push(newSchedule);
  }

  async getSchedule() {
    const res = await api.get("api/schedules");
    AppState.schedules = res.data.map((s) => new Schedule(s));
  }
  async updateSchedule(scheduleData) {
    const res = await api.put("api/schedules", scheduleData);
    let updatedSchedule = new Schedule(res.data);
    let index = AppState.schedules.findIndex((s) => {
      s.id == scheduleData.id;
    });

    AppState.schedules.splice(index, 1, updatedSchedule);
  }

  async deleteSchedule(id) {
    await api.delete(`api/schedules/${id}`);
    AppState.schedules = AppState.schedules.filter((s) => s.id != id);
  }
}
export const scheduleService = new ScheduleService();
