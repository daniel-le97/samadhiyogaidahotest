import { AppState } from "../AppState.js";
import { Schedule } from "../models/Schedule.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class ScheduleService {
  async createSchedule(scheduleData) {
    const res = await api.post("api/schedules", scheduleData);
    let newSchedule = new Schedule(res.data);

    AppState.schedules.push(newSchedule);
  }

  async getSchedules() {
    const res = await api.get("api/schedules");
    AppState.schedules = res.data.map((s) => new Schedule(s));
  }
  async updateSchedule(scheduleData) {
    let id = scheduleData.id;
console.log(id);
    const res = await api.put(`api/schedules/${id}`, scheduleData);
    let updatedSchedule = new Schedule(res.data);
    logger.log(updatedSchedule)
    // AppState.schedules.filter((s) => s.id == id);
    // AppState.schedules.push(updatedSchedule);
    let index = AppState.schedules.findIndex((s) =>  s.id == id);

    AppState.schedules.splice(index, 1, updatedSchedule);
  }

  async deleteSchedule(id) {
    await api.delete(`api/schedules/${id}`);
    AppState.schedules = AppState.schedules.filter((s) => s.id != id);
  }
}
export const scheduleService = new ScheduleService();
