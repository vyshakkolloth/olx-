
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// const firebaseConfig = {
//   apiKey: "AIzaSyAflPJ9QxFeCeLgT1YLn9EaZlp_kYxS7_Y",
//   authDomain: "olxdemo-d34c3.firebaseapp.com",
//   projectId: "olxdemo-d34c3",
//   storageBucket: "olxdemo-d34c3.appspot.com",
//   messagingSenderId: "93831633579",
//   appId: "1:93831633579:web:474bba24bce261dc9eb5ee",
//   measurementId: "G-XSSX1ZTK52"
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbxgsQHV_EHUiyKmdEznBl29qou7wDEPU",
  authDomain: "olx-vy.firebaseapp.com",
  projectId: "olx-vy",
  storageBucket: "olx-vy.appspot.com",
  messagingSenderId: "739550574699",
  appId: "1:739550574699:web:f32f9065050e5f6ced192e",
  measurementId: "G-ZED1X7ZXQ1"
};

const firebase= initializeApp(firebaseConfig);
const db =getFirestore(firebase)
const storage = getStorage(firebase)
 export {firebase,db,storage}

 