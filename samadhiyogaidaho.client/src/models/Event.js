import { getDate, getDateTime } from "../utils/Functions.js";

export class Event {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.location = data.location;
    this.address = data.address;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.cost = data.cost;
    this.description = data.description;
    this.img =
      data.img ||
      "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
  }
}
