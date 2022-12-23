export class Retreat {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.subTitle = data.subTitle;
    this.location = data.location;
    this.startDate = data.startDate;
    this.endDate = data.endDate
    this.cost = data.cost;
    this.description = data.description;
    this.coverImg = data.coverImg;
    this.food = data.food;
    this.schedule = data.schedule;
    this.archived = data.archived || false
    this.featuredImgs = data.featuredImgs;
    this.activities = data.activities;
    this.highlights = data.highlights;
    this.yoga = data.yoga;
    this.accommodations = data.accommodations;
    this.FAQS = data.FAQS;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.current = data.current || false
  }
}
