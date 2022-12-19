import { getDate, getDateTime } from "../utils/Functions.js";

export class Event {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.location = data.location;
   this.startDate = getDate(data.startDate);
   this.endDate = getDateTime(data.endDate)
    this.cost = data.cost;
    this.description = data.description;
    this.img = data.img
  }
}
