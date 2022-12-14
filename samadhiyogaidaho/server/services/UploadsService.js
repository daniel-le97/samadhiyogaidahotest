import { dbContext } from "../db/DbContext.js";

class UploadsService {
  async getAllUploads() {
    const uploads = await dbContext.Upload.find();
    return uploads;
  }
  async addUpload(uploadData) {
    let hi = uploadData;
    // const upload = await dbContext.Upload.create(uploadData)
    return hi;
  }
}
export const uploadsService = new UploadsService();
