// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUWZ0aSFZynLMJ32RGwoq8NSs5EYBKLek",
  authDomain: "movieworld-5e95e.firebaseapp.com",
  projectId: "movieworld-5e95e",
  storageBucket: "movieworld-5e95e.appspot.com",
  messagingSenderId: "91654987884",
  appId: "1:91654987884:web:799778c2c2f5eb824d3849"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const moviesRef=collection(db,"movies");
export const reviewsRef=collection(db,"reviews");
export const usersRef=collection(db,"users");
export default app;