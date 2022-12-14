import { AppState } from "../AppState.js";
import { Retreat } from "../models/Retreat.js";
import { api } from "./AxiosService.js";

class RetreatsService {
  async createRetreat(retreatFormData) {
    const res = await api.post("api/retreats", retreatFormData);
    AppState.currentRetreat = new Retreat(res.data);
  }
  async getCurrentRetreat() {
    const res = await api.get("api/retreats");
    console.log(res.data[0]);
    // AppState.currentRetreat = new Retreat(res.data);
  }
  async getAllRetreats() {
    const res = await api.get("api/retreats");
console.log(res.data);
    AppState.archivedRetreats = res.data.map((r) => new Retreat(r));
    AppState.currentRetreat = AppState.archivedRetreats[0];
    // console.log(AppState.archivedRetreats);
    // AppState.currentRetreat = new Retreat(res.data);
  }
}

export const retreatsService = new RetreatsService();
