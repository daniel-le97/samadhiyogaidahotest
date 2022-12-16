export class Event {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.location = data.location;
    this.date = data.date;
    this.cost = data.cost;
    this.description = data.description;
  }
}
