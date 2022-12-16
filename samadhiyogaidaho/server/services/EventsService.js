import { dbContext } from "../db/DbContext";
import { BadRequest, Forbidden } from "../utils/Errors";
import { getAdmins } from "./AccountService";

class EventsService {
  async deleteEvent(eventData, userId) {
    await getAdmins(userId);
    const event = await this.getEventById(userId);
    // @ts-ignore
    await event.remove();
    return event;
  }
  async createEvent(eventData, userId) {
    await getAdmins(userId);
    eventData.creatorId = userId;
    // const isEvent = await dbContext.Events.find(eventData)
    // if (isEvent) {
    //   throw new BadRequest("this event may be a duplicate")
    // }
    const event = await dbContext.Events.create(eventData);
    // populate??

    return event;
  }
  async getEventById(id) {
    const event = await dbContext.Events.find({ id });
    if (!event) {
      throw new BadRequest("unable to find event");
    }
    return event;
  }
  async updateEvent(eventData, userId){
    await getAdmins(userId)
    const event = await this.getEventById(eventData.id)
    event.title = eventData.title || event.title
    event.location = eventData.location || event.location
    event.date = eventData.date || event.date
    event.description = eventData.description || event.description
    event.cost = eventData.cost || event.cost
    event.img = eventData.img || event.img
    event.isArchived = eventData.isArchived || event.isArchived
  }
  //
}
export const eventsService = new EventsService();
