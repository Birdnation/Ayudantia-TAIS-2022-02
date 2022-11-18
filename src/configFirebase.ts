// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZNPYcXmhsRgA1giZ_rtqbcwWV-1zDBmk",
  authDomain: "ejemplo-ayudantia-tais.firebaseapp.com",
  projectId: "ejemplo-ayudantia-tais",
  storageBucket: "ejemplo-ayudantia-tais.appspot.com",
  messagingSenderId: "336826602261",
  appId: "1:336826602261:web:eb7d2803c1d5fb3f3e0f1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};