import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js";
import { update } from "../utils/Functions.js";
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
 retreat.archived = true
  await retreat.save()
  return retreat
 
  }

  async updateRetreat(id,newRetreatData,userId){
    await getAdmins(userId)
    let retreat = this.getRetreatById(id)
   await update(newRetreatData,retreat)
   await retreat.save()
   return retreat
  }
}
export const retreatsService = new RetreatsService();
