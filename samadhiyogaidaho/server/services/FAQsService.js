import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";
import { update } from "../utils/Functions";
import { getAdmins } from "./AccountService";

class FAQsService {
  async getFAQs() {
    const FAQs = await dbContext.FAQs.find();
    return FAQs;
  }
  async createFAQ(FAQData, userId) {
    await getAdmins(userId);
    const FAQ = await dbContext.FAQs.create(FAQData);
    return FAQ;
  }
  async updateFAQ(FAQData, userId, FAQId){
    await getAdmins(userId)
    let FAQ = await dbContext.FAQs.findById(FAQId)
    await update(FAQData, FAQ)
    await FAQ.save()
    return FAQ
  }
  async deleteFAQ(FAQId, userId){
    await getAdmins(userId)
    await (await this.getFAQById(FAQId)).remove()
    return "FAQ deleted"
  }

  async getFAQById(id){
    const FAQ = await dbContext.FAQs.findById(id)
    if (!FAQ) {
      throw new BadRequest("unable to find FAQ")
    }
    return FAQ
  }
}
export const faqsService = new FAQsService();
