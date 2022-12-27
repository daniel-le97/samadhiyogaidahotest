import { AppState } from "../AppState.js";
import { Retreat } from "../models/Retreat.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class RetreatsService {
  async createRetreat(retreatFormData) {
    const res = await api.post("api/retreats", retreatFormData);
    AppState.currentRetreat = new Retreat(res.data);
  }
  
  async getAllRetreats() {
    const res = await api.get("api/retreats");
    logger.log(res.data);
AppState.retreats = res.data.map(r=> new Retreat(r))
AppState.retreats.forEach(r=> {
  if (r.archived) {
    AppState.archivedRetreats.push(r)
  }
})

AppState.retreats.find(f=> {
  if (f.current ) {
    AppState.currentRetreat = f
  }
})
 
    // logger.log(AppState.retreats);
  }
}

export const retreatsService = new RetreatsService();
