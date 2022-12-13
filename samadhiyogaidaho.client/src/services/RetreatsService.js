import { api } from "./AxiosService.js"

class RetreatsService{

  async createRetreat(retreatFormData) {
    const res = await api.post('api/retreats', retreatFormData)
  }

}

export const retreatsService = new RetreatsService()