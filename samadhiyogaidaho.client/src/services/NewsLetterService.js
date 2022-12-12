import { api } from "./AxiosService.js";

class NewsLetterService {
  async addNewsLetterSubscription() {
    const res = await api.post('api/newsLetter')
    
  }
}
export const newsLetterService = new NewsLetterService();
