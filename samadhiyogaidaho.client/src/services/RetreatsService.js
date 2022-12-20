import { AppState } from "../AppState.js";
import { Retreat } from "../models/Retreat.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class RetreatsService {
  async createRetreat(retreatFormData) {
    const res = await api.post("api/retreats", retreatFormData);
    AppState.currentRetreat = new Retreat(res.data);
  }
  async getCurrentRetreat() {
    const res = await api.get("api/retreats");
    // AppState.currentRetreat = new Retreat(res.data);
  }
  async getAllRetreats() {
    const res = await api.get("api/retreats");
    logger.log(res.data);

    res.data.map((r) => {
      if (r.archived == false) {
        AppState.currentRetreat = new Retreat(r);
      } else AppState.archivedRetreats.push(new Retreat(r));
    });

    logger.log(AppState.archivedRetreats);
  }
}

export const retreatsService = new RetreatsService();
