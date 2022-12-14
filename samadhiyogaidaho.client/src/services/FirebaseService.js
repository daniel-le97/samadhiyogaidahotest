

class FirebaseService {
  async uploadFile(e){
  const file = Array.from(e.target.files)[0];
  const extension = file.type.split("/")[1];
   const ref = storage.ref(
     // @ts-ignore
     `uploads/${auth.currentUser.uid}/${Date.now()}.${extension}`
   );
  // console.log("[file]", file);
  // console.log("[extension]", extension);

        
  }
}
export const firebaseService = new FirebaseService();
