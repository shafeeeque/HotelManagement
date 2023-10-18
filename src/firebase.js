
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB8pnHHSVXBoy46-C_8JFeEcwUgVEl_huY",
  authDomain: "web-site113.firebaseapp.com",
  projectId: "web-site113",
  storageBucket: "web-site113.appspot.com",
  messagingSenderId: "700822389085",
  appId: "1:700822389085:web:94018982e9b290963a28b4",
  measurementId: "G-QF4CCVJS5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};