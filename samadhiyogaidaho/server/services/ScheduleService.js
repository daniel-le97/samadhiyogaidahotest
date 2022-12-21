class ScheduleService {
  async getAllSchedules() {
    const schedules = await dbContext.schedules.find();
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
    scheduleData.creatorId = userId;
    const schedule = await dbContext.schedules.create(scheduleData);
    // populate
    return schedule;
  }
  async getScheduleById(id) {
    const schedule = await dbContext.schedules.findOne({ id });
    if (!schedule) {
      throw new BadRequest("unable to find schedule");
    }
    return schedule;
    
  }
  async updateSchedule(scheduleId, scheduleData, userId) {
    await getAdmins(userId);
    let schedule = await this.getScheduleById(scheduleId);

    let newSchedule = await update(scheduleData, schedule);
    // await newschedule.save();
    return newSchedule;
  }
}
export const scheduleService = new ScheduleService()