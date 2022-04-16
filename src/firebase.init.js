// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs3bHI3QH1yQq4A0cTtDAL97GL4kLCweU",
  authDomain: "fancy-photographer.firebaseapp.com",
  projectId: "fancy-photographer",
  storageBucket: "fancy-photographer.appspot.com",
  messagingSenderId: "534338508386",
  appId: "1:534338508386:web:c9c67626fdce0f487f233b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;