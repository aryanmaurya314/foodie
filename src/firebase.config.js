import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcf8wllqRoUcJ-ABuWSOMM6o7ph_Gua-c",
  authDomain: "foodie-f52b0.firebaseapp.com",
  databaseURL: "https://foodie-f52b0-default-rtdb.firebaseio.com",
  projectId: "foodie-f52b0",
  storageBucket: "foodie-f52b0.appspot.com",
  messagingSenderId: "698823011787",
  appId: "1:698823011787:web:bf82560885d9c25057da4e",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
