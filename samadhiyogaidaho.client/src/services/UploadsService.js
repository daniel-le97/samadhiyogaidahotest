import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"

class UploadsService{

  async addUpload(uploadData){
 const res =await api.post('api/uploads',uploadData);
console.log(res.data);
// AppState.uploadedImgs.push(res.data)
// console.log('addUpload',res.data);
  }

  async getAllUploads(){
    const res = await api.post('api/uploads')
    AppState.uploadedImgs = [...AppState.uploadedImgs,res.data]

  }
}
export const uploadsService = new UploadsService()