import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class UploadsService {
  async addUpload(uploadData) {
    logger.log(uploadData);
    let data = { url: uploadData };
    const res = await api.post("api/uploads", data);
    logger.log(res.data);
    // AppState.uploadedImgs.push(res.data)
  }

  async getAllUploads() {
    const res = await api.post("api/uploads");
    AppState.uploadedImgs = [...AppState.uploadedImgs, res.data];
  }
  async deleteUpload() {
    const res = await api.delete()
  }
}
export const uploadsService = new UploadsService();
