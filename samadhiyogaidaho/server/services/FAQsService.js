import { dbContext } from "../db/DbContext";
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
    return FAQ
  }
  async deleteFAQ(FAQId, userId){
    await getAdmins(userId)
    await dbContext.FAQs.findById(FAQId).remove()
    return "FAQ deleted"
  }
}
export const faqsService = new FAQsService();
