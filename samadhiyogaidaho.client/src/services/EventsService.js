import { AppState } from "../AppState.js";
import { Event } from "../models/Event.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class EventsService {
  async createEvent(eventData) {
    const res = await api.post("api/events", eventData);
    logger.log(res.data)
    let newEvent = new Event(res.data);
    AppState.events.push(newEvent);
  }

  async getEvents(){
    const res = await api.get('api/events')
    logger.log(res.data)
    AppState.events = res.data.map(e=> new Event(e))
  }
  async updateEvent(){
    
  }
}
export const eventsService = new EventsService();
