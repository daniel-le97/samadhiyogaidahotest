export class Retreat {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.subTitle = data.subTitle;
    this.location = data.location;
    this.date = data.date;
    this.cost = data.cost;
    this.description = data.description;
    this.coverImg = data.coverImg;
    this.food = data.food;
    this.schedule = data.schedule;
    this.archived = data.archived;
    this.featuredImgs = data.featuredImgs;
    this.activities = data.activities;
    this.highlights = data.highlights;
    this.yoga = data.yoga;
    this.accommodations = data.accommodations;
    this.FAQS = data.FAQS;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}
