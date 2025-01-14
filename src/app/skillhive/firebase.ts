import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA_6jAdPH_-vCUJ5fzPy3qIde6Oqu9KGdo",
    authDomain: "major-project-caf60.firebaseapp.com",
    projectId: "major-project-caf60",
    storageBucket: "major-project-caf60.appspot.com",
    messagingSenderId: "810110548327",
    appId: "1:810110548327:web:c735d60aa11d693fd6d7c2",
    measurementId: "G-JD4S8QVCX0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth }; 
// Export the app instance
export { app };

// Also export authentication
export const authentication = firebase.auth();

