import { auth, storage } from "../../lib/firebase.js";
import { AppState } from "../AppState.js";
import { uploadsService } from "./UploadsService.js";
class FirebaseService {
  async uploadFile(e) {
    const file = Array.from(e.target.files)[0];
    const extension = file.type.split("/")[1];
    const ref = storage.ref(
      // @ts-ignore
      `uploads/${Date.now()}.${extension}`
    );

    const task = ref.put(file);

    task
      .then((d) => ref.getDownloadURL())
      .then((res) => {
         AppState.newActiveUpload = res
        AppState.uploadedImgs.push(res);
        
        // console.log(AppState.newActiveUpload);
      });

    // console.log(AppState.newActiveUpload);
    await uploadsService.addUpload(AppState.newActiveUpload)
    // console.log(AppState.uploadedImgs);
    // AppState.uploadedImgs.push(task)
    // Listen to updates to upload task
    // task.on(STATE_CHANGED, (snapshot) => {
    //   const pct = (
    //     (snapshot.bytesTransferred / snapshot.totalBytes) *
    //     100
    //   ).toFixed(0);
    //   // @ts-ignore
    //   setProgress(pct);
    // });

    // Get downloadURL AFTER task resolves (Note: this is not a native Promise)
  }
}
export const firebaseService = new FirebaseService();
