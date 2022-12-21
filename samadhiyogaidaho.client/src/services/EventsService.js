import { AppState } from "../AppState.js";
import { Event } from "../models/Event.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";
const url = "api/events"

class EventsService {
  async createEvent(eventData) {
    const res = await api.post(url, eventData);
    logger.log(res.data)
    let newEvent = new Event(res.data);
    AppState.events.push(newEvent);
  }

  async getEvents(){
    const res = await api.get(url)
    logger.log(res.data)
    AppState.events = res.data.map(e=> new Event(e))
  }
  async updateEvent(){

  }
  async deleteEvent(event){
    let hi
    if (!hi) {
      return
    }
    const res = await api.delete(url + `/${event.id}`)
  }
}
export const eventsService = new EventsService();
