// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh641XhDsLQAeIdzCjt8nwUHDDsDWGt3U",
    authDomain: "university-results-data.firebaseapp.com",
    projectId: "university-results-data",
    storageBucket: "university-results-data.appspot.com",
    messagingSenderId: "346391748417",
    appId: "1:346391748417:web:47cd8083713138ad6d8bc0",
    measurementId: "G-G72SJMRD1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;