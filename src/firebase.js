import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhqBMdsJ8QJjCfqTdYeYDXmEpkbzYqiPQ",
  authDomain: "quiz-app-215c7.firebaseapp.com",
  projectId: "quiz-app-215c7",
  storageBucket: "quiz-app-215c7.appspot.com",
  messagingSenderId: "332323514600",
  appId: "1:332323514600:web:b844346dc389fd951fc15d",
  measurementId: "G-WTTGKZB4PH"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth}