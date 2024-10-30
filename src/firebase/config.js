// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe4RxjMTMwfsf0Q-murPbv0e0PKW0kjOI",
  authDomain: "curso-react-5af77.firebaseapp.com",
  projectId: "curso-react-5af77",
  storageBucket: "curso-react-5af77.appspot.com",
  messagingSenderId: "1080471923744",
  appId: "1:1080471923744:web:07bc9eac2be415e1d7e045"
};

// Initialize Firebase
export const firebaseApp  = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth( firebaseApp );

export const firebaseDB   = getFirestore( firebaseApp );