import { BadRequest } from "@bcwdev/auth0provider/lib/Errors";
import { dbContext } from "../db/DbContext";
import { getAdmins } from "./AccountService";

class ContactsService {
  async getAllContacts(userId) {
    const isAdmin = await getAdmins(userId);
    const contacts = await dbContext.Contacts.find();
    return contacts;
  }
  async addContact(contactData) {
    const foundContact = await dbContext.Contacts.find({ contactData });
    if (foundContact) {
      throw new BadRequest("contact already");
    }
    const contact = await dbContext.Contacts.create(contactData);
    return contact;
  }
  async deleteContact(contactId, userId) {
    await getAdmins(userId);
    const contact = await this.getContact(contactId);
    await contact.remove();
    return "contact deleted";
  }
  async getContact(id) {
    const contact = await dbContext.Contacts.find({ id });
    if (!contact) {
      throw new BadRequest("unable to find contact");
    }
    return contact;
  }
  async updateContact(contactData, contactId, userId) {}
}
export const contactsService = new ContactsService();
