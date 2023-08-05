import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAccrq6ujH6WdHddj4vqsp7E_Dk7FiNtpo",
  authDomain: "vagas-30f14.firebaseapp.com",
  projectId: "vagas-30f14",
  storageBucket: "vagas-30f14.appspot.com",
  messagingSenderId: "816787975526",
  appId: "1:816787975526:web:b3478404b634eade4d6ca7"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);