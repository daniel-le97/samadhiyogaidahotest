import { AppState } from "../AppState.js";
import { NewsLetter } from "../models/NewsLetter.js";
import { api } from "./AxiosService.js";

class NewsLetterService {
  async addNewsLetterSubscription(data) {
    const res = await api.post('api/newsLetter',data)
  let newSubscription = new NewsLetter(res.data)
  AppState.newsLetterSubscription = [...AppState.newsLetterSubscription,newSubscription]
  }
}
export const newsLetterService = new NewsLetterService();
