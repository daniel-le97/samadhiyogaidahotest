import { AppState } from "../AppState.js"
import { Retreat } from "../models/Retreat.js"
import { api } from "./AxiosService.js"

class RetreatsService{

  async createRetreat(retreatFormData) {
    const res = await api.post('api/retreats', retreatFormData)
    AppState.currentRetreat = new Retreat(res.data)
  }

}

export const retreatsService = new RetreatsService()