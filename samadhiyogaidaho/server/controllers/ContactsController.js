import { Auth0Provider } from "@bcwdev/auth0provider";
import { contactsService } from "../services/ContactsService.js";
import BaseController from "../utils/BaseController.js";

export class ContactsController extends BaseController {
  constructor() {
    super("/api/contacts");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getAllContacts)
      .post("", this.addContact)
      .delete("/:id", this.deleteContact)
      .put("/:id", this.updateContact);
  }

  async getAllContacts(req, res, next) {
    try {
      const contacts = await contactsService.getAllContacts(req.userInfo.id);
      res.send(contacts);
    } catch (error) {
      next(error);
    }
  }

  async addContact(req, res, next) {
    try {
      const contact = await contactsService.addContact(req.body);
      await res.send(contact);
    } catch (error) {
      next(error);
    }
  }

  async deleteContact(req, res, next) {
    try {
      const contact = await contactsService.deleteContact(
        req.params.id,
        req.userInfo.id
      );
      res.send(contact);
    } catch (error) {
      next(error);
    }
  }
  async updateContact(req, res, next) {
    try {
      const contact = await contactsService.updateContact();
      res.send(contact);
    } catch (error) {
      next(error);
    }
  }
}
