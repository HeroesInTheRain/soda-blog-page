// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHtAFg101pX3zUH5WX9gi-WmiCaQPbvpQ",
  authDomain: "soda-blog-page.firebaseapp.com",
  projectId: "soda-blog-page",
  storageBucket: "soda-blog-page.appspot.com",
  messagingSenderId: "1081482163596",
  appId: "1:1081482163596:web:b2d76abef3f6a2589b52a9",
  measurementId: "G-8MH389N5ZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const rootRef = firebase.database().ref("nombreDeTabla")

rootRef.push({
    item: "item"
})