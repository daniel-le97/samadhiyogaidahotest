import { ref } from "vue";
import { auth, storage } from "../../lib/firebase.js";
import { AppState } from "../AppState.js";
import { generateId } from "../utils/Helper.js";
import { logger } from "../utils/Logger.js";
import { uploadsService } from "./UploadsService.js";
class FirebaseService {
  async uploadFile(e) {
    // AppState.loading++;
    const imgs = [];

    const files = Array.from(e.target.files);

    for await (const file of files) {
      let id = await generateId();
      const extension = file.type.split("/")[1];
      const ref = storage.ref(
        // @ts-ignore
        `uploads/${id}.${extension}`
      );
      const task = await ref.put(file);
      const img = await this.getURL(ref);
      imgs.push(img);
    }

    // console.log(imgs);
    return imgs;
  }
  async getURL(ref) {
    try {
      const res = await ref.getDownloadURL();
      return res;
      //  console.log(res);
    } catch (error) {}
  }
}
export const firebaseService = new FirebaseService();
