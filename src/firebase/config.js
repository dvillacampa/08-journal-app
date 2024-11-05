// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// Your web app's Firebase configuration
const firebaseConfig = {
  /*
  apiKey: "AIzaSyCe4RxjMTMwfsf0Q-murPbv0e0PKW0kjOI",
  authDomain: "curso-react-5af77.firebaseapp.com",
  projectId: "curso-react-5af77",
  storageBucket: "curso-react-5af77.appspot.com",
  messagingSenderId: "1080471923744",
  appId: "1:1080471923744:web:07bc9eac2be415e1d7e045"
  */

  apiKey: "AIzaSyAPzSD-0syTJhmFqrL3qEA4KpCeoZGcjz8",
  authDomain: "curso-react-journal-app-956b6.firebaseapp.com",
  projectId: "curso-react-journal-app-956b6",
  storageBucket: "curso-react-journal-app-956b6.firebasestorage.app",
  messagingSenderId: "966011320297",
  appId: "1:966011320297:web:7aa9584b93abf302287d78"

};

// Initialize Firebase
export const firebaseApp  = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth( firebaseApp );

export const firebaseDB   = getFirestore( firebaseApp );