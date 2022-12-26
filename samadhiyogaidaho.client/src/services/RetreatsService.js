import { AppState } from "../AppState.js";
import { Retreat } from "../models/Retreat.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class RetreatsService {
  async createRetreat(retreatFormData) {
    const res = await api.post("api/retreats", retreatFormData);
    AppState.currentRetreat = new Retreat(res.data);
  }
  // async getCurrentRetreat() {
  //   const res = await api.get("api/retreats");
  //   // AppState.currentRetreat = new Retreat(res.data);
  // }
  async getAllRetreats() {
    const res = await api.get("api/retreats");
    logger.log(res.data);
AppState.retreats = res.data.map(r=> new Retreat(r))
AppState.retreats.forEach(r=> {
  if (r.archived) {
    AppState.archivedRetreats.push(r)
  }
})
// AppState.retreats = AppState.retreats.filter((r) => r.archived == false);
// for (const r of AppState.retreats) {
//   if (r.archived == true) {
//       let index = AppState.retreats.findIndex((x) => {
//           x.id == r.id;
//         });
    
//         AppState.retreats.splice(index, 1);
//     AppState.archivedRetreats.push(r)
//   }
// }
AppState.retreats.find(f=> {
  if (f.current ) {
    AppState.currentRetreat = f
  }
})
    // res.data.map((r) => {
    //   if (r.archived == false) {
    //     AppState.currentRetreat = new Retreat(r);
    //   } else AppState.retreats.push(new Retreat(r));
    // });

    logger.log(AppState.retreats);
  }
}

export const retreatsService = new RetreatsService();
