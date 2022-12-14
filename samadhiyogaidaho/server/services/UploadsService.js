import { dbContext } from "../db/DbContext.js"

class UploadsService{
async getAllUploads() {
const uploads = await dbContext.Upload.find()
return uploads
}
async addUpload(uploadData){
const upload = await dbContext.Upload.create(uploadData)
return upload
}
}
export const uploadsService = new UploadsService()