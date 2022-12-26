import { dbContext } from "../db/DbContext.js";
import { getAdmins } from "./AccountService.js";

class UploadsService {
  async getAllUploads() {
    const uploads = await dbContext.Uploads.find();
    return uploads;
  }
  async addUpload(uploadData, userId) {
    await getAdmins(userId)
    const upload = await dbContext.Uploads.create(uploadData)
    return upload;
  }
}
export const uploadsService = new UploadsService();
