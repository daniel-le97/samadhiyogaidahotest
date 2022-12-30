import { AppState } from "../AppState.js";
import { NewsLetter } from "../models/NewsLetter.js";
import { api, ghostAPI } from "./AxiosService.js";

class NewsLetterService {
  async addNewsLetterSubscription(data) {
    const res = await ghostAPI.post("/api/send-magic-link/", data);



    
  // let newSubscription = new NewsLetter(res.data)
  // AppState.newsLetterSubscription = [...AppState.newsLetterSubscription,newSubscription]
  }
}
export const newsLetterService = new NewsLetterService();
