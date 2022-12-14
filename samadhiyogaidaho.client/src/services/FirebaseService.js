import { auth, storage } from "../../lib/firebase.js";
import { AppState } from "../AppState.js";
class FirebaseService {
  async uploadFile(e) {
    const file = Array.from(e.target.files)[0];
    const extension = file.type.split("/")[1];
    const ref = storage.ref(
      // @ts-ignore
      `uploads/${Date.now()}.${extension}`
    );
    // console.log("[file]", file);
    // console.log("[extension]", extension);
    console.log(ref);

    // Starts the upload
    const task = ref.put(file);
    
    task
      .then((d) => ref.getDownloadURL())
      .then((url) => {
        AppState.uploadedImgs.push(url);
        
      });

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
