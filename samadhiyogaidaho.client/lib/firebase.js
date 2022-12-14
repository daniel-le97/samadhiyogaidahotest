import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCo1uP74FtMGUTUyMo8_eLWbKems9dNX5A",
  authDomain: "samadhiyoga-822be.firebaseapp.com",
  projectId: "samadhiyoga-822be",
  storageBucket: "samadhiyoga-822be.appspot.com",
  messagingSenderId: "614042141308",
  appId: "1:614042141308:web:a3ffe57ada695a6670fff9",
  measurementId: "G-24EDEQWVEC",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}
