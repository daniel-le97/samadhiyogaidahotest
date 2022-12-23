import {pb} from "../../lib/pocketBase"
import { logger } from "../utils/Logger"

class  PocketBaseService {

  async getFiles(){
    const record = await pb.collection('images').getFullList()
    logger.log(record)
  }
  
}
export const pocketBaseService = new PocketBaseService()