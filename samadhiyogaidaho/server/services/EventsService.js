import { dbContext } from "../db/DbContext";
import { BadRequest, Forbidden } from "../utils/Errors";
import { getAdmins } from "./AccountService";

class EventsService {
  async getAllEvents(userId) {
    const isAdmin = await getAdmins(userId);
    return await dbContext.Events.find();
  }
  async deleteEvent(userId, eventId) {
    await getAdmins(userId);
    const event = await this.getEventById(eventId);
    // @ts-ignore
    await event.remove();
    return event;
  }
  async createEvent(eventData, userId) {
    await getAdmins(userId);
    eventData.creatorId = userId;
    const event = await dbContext.Events.create(eventData);
    // populate
    return event;
  }
  async getEventById(id) {
    const event = await dbContext.Events.find({ id });
    if (!event) {
      throw new BadRequest("unable to find event");
    }
    return event;
  }
  async updateEvent(eventId, eventData, userId) {
    await getAdmins(userId);
    const event = await this.getEventById(eventId);
    event.title = eventData.title || event.title;
    event.location = eventData.location || event.location;
    event.date = eventData.date || event.date;
    event.description = eventData.description || event.description;
    event.cost = eventData.cost || event.cost;
    event.img = eventData.img || event.img;
    event.isArchived = eventData.isArchived || event.isArchived;
    await event.save();
    return event;
  }
}
export const eventsService = new EventsService();
