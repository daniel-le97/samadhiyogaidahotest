import { AppState } from "../AppState.js";
import { NewsLetter } from "../models/NewsLetter.js";
import { api, ghostAPI } from "./AxiosService.js";

class NewsLetterService {
  async addNewsLetterSubscription(data) {
    const res = await ghostAPI.post("/api/send-magic-link/", data);
    console.log(res);
    // TODO check ghost cms to see if this works
  }
}
export const newsLetterService = new NewsLetterService();
