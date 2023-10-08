import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-ab746.firebaseapp.com",
  projectId: "chat-ab746",
  storageBucket: "chat-ab746.appspot.com",
  messagingSenderId: "901216368405",
  appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCFz84e8YsNVDFY2qieMm72WZ3uWx9jZZo",
//   authDomain: "chat-app-8ff75.firebaseapp.com",
//   projectId: "chat-app-8ff75",
//   storageBucket: "chat-app-8ff75.appspot.com",
//   messagingSenderId: "960077040565",
//   appId: "1:960077040565:web:8fcc35060b0abe72b2a7fc",
//   measurementId: "G-9WP03THFR2"
// };

// // Initialize Firebase
//  export const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);