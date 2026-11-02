import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore-lite.js";


const firebaseConfig = {
    apiKey: "AIzaSyAyxaszGW2VDLQTuj0aJYzqJK7vca4HUno",
    authDomain: "csci-3054-project.firebaseapp.com",
    projectId: "csci-3054-project",
    storageBucket: "csci-3054-project.firebasestorage.app",
    messagingSenderId: "1054522318125",
    appId: "1:1054522318125:web:6b01b8dde65c23e7e747a4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
