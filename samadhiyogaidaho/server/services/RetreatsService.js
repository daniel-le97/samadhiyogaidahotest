import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js";

class RetreatsService {
  async createRetreat(retreatData) {
    // const retreats = await dbContext.Retreat.find({ retreatData });
    // if (retreats) {
    //   throw new BadRequest("Already created this type of retreat");
    // }
    const newRetreat = await dbContext.Retreat.create(retreatData);
    return newRetreat;
  }
  async findRetreatById(retreatId){
    const found = await dbContext.Retreat.findById(retreatId)
    if (!found) {
      throw new BadRequest('Invalid Retreat Id')
    }
    return found
  }
}
export const retreatsService = new RetreatsService();
