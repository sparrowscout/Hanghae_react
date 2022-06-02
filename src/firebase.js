// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAENrGhAZUV3O8pHjsMWkRpnWcM9l7K4UE",
  authDomain: "react-prac-4d96c.firebaseapp.com",
  projectId: "react-prac-4d96c",
  storageBucket: "react-prac-4d96c.appspot.com",
  messagingSenderId: "472705032391",
  appId: "1:472705032391:web:9a159e3ffa0b85be815ee2",
  measurementId: "G-F9PXQBTEP4"
};

initializeApp(firebaseConfig)
//firebase 초기화

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const db = getFirestore();