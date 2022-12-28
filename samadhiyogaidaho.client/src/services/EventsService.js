import { AppState } from "../AppState.js";
import { Event } from "../models/Event.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class EventsService {
  async createEvent(eventData) {
    const res = await api.post("api/events", eventData);
    logger.log(res.data);
    let newEvent = new Event(res.data);
    AppState.events.push(newEvent);
  }

  async getEvents() {
    const res = await api.get("api/events");
    logger.log(res.data);
    AppState.events = res.data.map((e) => new Event(e));
  }
  async updateEvent(eventData) {
    let id = eventData.id;

    const res = await api.put(`api/events/${id}`, eventData);
    logger.log(res.data)
    let updatedEvent = new Event(res.data);
    let index = AppState.events.findIndex((e) => e.id == updatedEvent.id);
    AppState.events[index] = updatedEvent

const res = await api.put(`api/events/${id}`,eventData)
let updatedEvent = new Event(res.data)
  let index = AppState.events.findIndex((e) =>  e.id == id);

    AppState.events.splice(index, 1, updatedEvent);
  }
  async deleteEvent(id){
  
    await api.delete(`api/events/${id}`)
  let index = AppState.events.findIndex((e) => e.id == event.id);

    AppState.events.splice(index, 1);
  }
}
export const eventsService = new EventsService();
