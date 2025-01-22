// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP75JMCWZNj9nxFdr8TFfmqXy9VDzi2Ik",
  authDomain: "cosmic-31476.firebaseapp.com",
  projectId: "cosmic-31476",
  storageBucket: "cosmic-31476.firebasestorage.app",
  messagingSenderId: "858954317646",
  appId: "1:858954317646:web:ef79ab02beda3fabf9681f",
  measurementId: "G-JYJE7582EE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Firebase 인증 인스턴스

export { auth };
