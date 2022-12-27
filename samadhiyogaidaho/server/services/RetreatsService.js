import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js";
import { getAdmins } from "./AccountService.js";

class RetreatsService {
  async createRetreat(retreatData) {
    const newRetreat = await dbContext.Retreats.create(retreatData);
    return newRetreat;
  }

  async getCurrentRetreat(id) {
   const currentRetreat = this.getRetreatById(id)
    return currentRetreat;
  }
  async getAllRetreats() {
    const retreats = await dbContext.Retreats.find();

    return retreats;
  }

  async getRetreatById(id) {
    const retreat = await dbContext.Retreats.findById(id);
    if (!retreat) {
      throw new BadRequest("Invalid Retreat Id");
    }
    return retreat;
  }
  async archiveRetreat(id,userId){
    await getAdmins(userId)
let retreat = this.getRetreatById(id)
await retreat.archived = true
  await retreat.save()
 
  }

  async updateRetreat(id,newRetreatData,userId){
    await getAdmins(userId)
    let retreat = this.getRetreatById(id)
   
  }
}
export const retreatsService = new RetreatsService();
