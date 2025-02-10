// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDv5Dhk9YPgFMVOaJUDaF4fvfWEus66Ms",
  authDomain: "cosmic-d9778.firebaseapp.com",
  projectId: "cosmic-d9778",
  storageBucket: "cosmic-d9778.firebasestorage.app",
  messagingSenderId: "419029373762",
  appId: "1:419029373762:web:fa88690ebde46501c9aedb",
  measurementId: "G-5XK6HESGMX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app); // Firebase 인증 인스턴스

export { app, auth };
