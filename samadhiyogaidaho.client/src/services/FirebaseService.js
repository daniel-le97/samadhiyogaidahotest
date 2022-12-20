import { ref } from "vue";
import {  storage } from "../../lib/firebase.js";
import { AppState } from "../AppState.js";
import { generateId } from "../utils/Helper.js";
import { logger } from "../utils/Logger.js";
import { uploadsService } from "./UploadsService.js";
class FirebaseService {
  async uploadFile(e) {
    // AppState.loading++;
    const imgs = [];

    const files = Array.from(e.target.files);
    AppState.uploadedImgs = 0
    let totalBytes
    let bytes
    
    
    for await (const file of files) {
      let id = await generateId();
      const extension = file.type.split("/")[1];
      const ref = storage.ref(`uploads/${id}.${extension}`);
      const task = await ref.put(file);
      totalBytes = task.totalBytes / 3
      bytes = task.bytesTransferred / 3
      AppState.uploadedImgs = bytes/totalBytes
      const img = await this.getURL(ref);
      imgs.push(img);
    }
    return imgs;
  }
  async getURL(ref) {
    try {
      const res = await ref.getDownloadURL();
      // let observer = ref.
      return res;
    } catch (error) {
      logger.error(error)
    }
  }
}
export const firebaseService = new FirebaseService();
