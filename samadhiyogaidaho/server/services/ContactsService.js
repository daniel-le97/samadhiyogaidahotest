import { BadRequest } from "@bcwdev/auth0provider/lib/Errors";
import { dbContext } from "../db/DbContext";

class ContactsService {
  async addContact(contactData) {
    const foundContact = await dbContext.Contact.find({contactData});
    if (foundContact) {
     throw new BadRequest("contact already") 
    }
  }
  //
}
export const contactsService = new ContactsService();
