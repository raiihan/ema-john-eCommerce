// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPcZPZ4pJu_NPEYEJpYV07O35N10c_01s",
    authDomain: "ema-john-39658.firebaseapp.com",
    projectId: "ema-john-39658",
    storageBucket: "ema-john-39658.appspot.com",
    messagingSenderId: "702924456012",
    appId: "1:702924456012:web:7c907dbe89b6b54dd4f4e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;