// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDZFlIk5mcOJgoAYwxbOeea3dBTDoWiLrI",
//   authDomain: "restaplate.firebaseapp.com",
//   projectId: "restaplate",
//   storageBucket: "restaplate.firebasestorage.app",
//   messagingSenderId: "244795942156",
//   appId: "1:244795942156:web:6117e60d7a2d76ec729529",
//   measurementId: "G-DSGEKR0PMQ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZFlIk5mcOJgoAYwxbOeea3dBTDoWiLrI",
  authDomain: "restaplate.firebaseapp.com",
  projectId: "restaplate",
  storageBucket: "restaplate.firebasestorage.app",
  messagingSenderId: "244795942156",
  appId: "1:244795942156:web:314ad0f091721df5729529",
  measurementId: "G-J1QC7BKDPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);