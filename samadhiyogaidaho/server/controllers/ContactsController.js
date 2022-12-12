import BaseController from "../utils/BaseController.js";

export class ContactsController extends BaseController {
  constructor() {
    super("/api/contacts");
    this.router
    .get("")
    .post("", this.addContact);
  }
  async addContact(req, res, next) {
    try {
      const example = await res.send();
    } catch (error) {
      next(error);
    }
  }
}
