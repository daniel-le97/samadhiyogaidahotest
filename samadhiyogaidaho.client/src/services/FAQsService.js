import { AppState } from "../AppState.js";
import { FAQ } from "../models/FAQ.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class FAQsService {
 async createFAQ(faqData) {
    const res = await api.post("api/faqs", faqData);
    logger.log(res.data);
    let newFAQ = new FAQ(res.data);
    AppState.FAQS.push(newFAQ);
  }

  async getFAQs() {
    const res = await api.get("api/faqs");
    logger.log(res.data);
    AppState.FAQS = res.data.map((e) => new FAQ(e));
  }
  async updateFAQ(faqData) {
    let id = faqData.id;
    const res = await api.put(`api/faqs/${id}`, faqData);
    logger.log(res.data);
    let updatedFAQ = new FAQ(res.data);
    let index = AppState.faqs.findIndex((e) => e.id == updatedFAQ.id);
    AppState.FAQS[index] = updatedFAQ;
  }
  async deleteFAQ(id) {
    await api.delete(`api/faqs/${id}`);
    AppState.FAQS = AppState.faqs.filter((e) => e.id != id);
  }
}
export const faqsService = new FAQsService()