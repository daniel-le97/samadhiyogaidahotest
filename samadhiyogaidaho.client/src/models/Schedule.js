export class Schedule {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.location = data.location;
    this.time = data.time;
    this.address = data.address;
    this.description = data.description;
    this.cost = data.cost;
  }
}
