import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJxlo5FAwKoaneSUldFoK1X-tMaieP1IM",
  authDomain: "ersaal-hub.firebaseapp.com",
  projectId: "ersaal-hub",
  storageBucket: "ersaal-hub.firebasestorage.app",
  messagingSenderId: "643378306381",
  appId: "1:643378306381:web:1e0a25852d739bd7baeb04",
  measurementId: "G-YEGVYP6Z3S"
};

export const app = initializeApp(firebaseConfig);

export const initAnalytics = async () => {
  if (typeof window !== "undefined" && await isSupported()) {
    return getAnalytics(app);
  }
  return null;
};