import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjfowu4hV7rXUSXtMDy8bQ5guMbmXJffs",
  authDomain: "pragati-e9374.firebaseapp.com",
  projectId: "pragati-e9374",
  storageBucket: "pragati-e9374.appspot.com",
  messagingSenderId: "480047018659",
  appId: "1:480047018659:web:cc16433677bfde531d0516",
  measurementId: "G-XJ68PS6HR0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };