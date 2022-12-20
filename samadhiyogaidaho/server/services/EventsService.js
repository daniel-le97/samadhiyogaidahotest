import { Value } from "sass";
import { dbContext } from "../db/DbContext";
import { BadRequest, Forbidden } from "../utils/Errors";
import { getAdmins } from "./AccountService";

class EventsService {
  async getAllEvents() {
    const events = await dbContext.Events.find();
    return events
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
    const event = await dbContext.Events.findOne({ id });
    if (!event) {
      throw new BadRequest("unable to find event");
    }
    return event;
  }
  async updateEvent(eventId, eventData, userId) {
    await getAdmins(userId);
    let event = await this.getEventById(eventId);
    let newEvent = await updateObject(eventData, event);
    await newEvent.save()
    return newEvent;
  }
  // event.title = eventData.title || event.title;
  // event.location = eventData.location || event.location;
  // event.date = eventData.date || event.date;
  // event.description = eventData.description || event.description;
  // event.cost = eventData.cost || event.cost;
  // event.img = eventData.img || event.img;
  // event.isArchived = eventData.isArchived || event.isArchived;
  // await event.save();
}
export async function updateObject(newData, originalData) {
  for (const key in newData) {
    if (originalData[key]) {
      originalData[key] = newData[key] ? newData[key] : originalData[key];
    }
  }
  return originalData;
}

export const eventsService = new EventsService();
