import { contactsService } from "../services/ContactsService.js";
import BaseController from "../utils/BaseController.js";

export class ContactsController extends BaseController {
  constructor() {
    super("/api/contacts");
    this.router.get("").post("", this.addContact);
  }
  async addContact(req, res, next) {
    try {
      const contact = await contactsService.addContact(req.body);
      await res.send(contact);
    } catch (error) {
      next(error);
    }
  }
}
