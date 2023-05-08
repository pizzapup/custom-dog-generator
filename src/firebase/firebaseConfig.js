import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARlwbakdeChA_b-JdKvcVyRx5wZE_oV9M",
  authDomain: "custom-dog-generator.firebaseapp.com",
  projectId: "custom-dog-generator",
  storageBucket: "custom-dog-generator.appspot.com",
  messagingSenderId: "61686443482",
  appId: "1:61686443482:web:c1becb7265cf6652b424e3",
  databaseURL: "https://custom-dog-generator-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
