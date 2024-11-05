// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe00IXFtNuybRfbep-8JrbvawahyAma74",
  authDomain: "social-media-website-455a1.firebaseapp.com",
  projectId: "social-media-website-455a1",
  storageBucket: "social-media-website-455a1.appspot.com",
  messagingSenderId: "810822490464",
  appId: "1:810822490464:web:2fc81445186be08d2d6605",
  measurementId: "G-R7T8L3405Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };