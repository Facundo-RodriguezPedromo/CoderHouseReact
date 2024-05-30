import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCmy-lbVXYQhJ_Mo82NOoNZPv8S5GOMsns",
    authDomain: "react-coderhousefr.firebaseapp.com",
    projectId: "react-coderhousefr",
    storageBucket: "react-coderhousefr.appspot.com",
    messagingSenderId: "183874084498",
    appId: "1:183874084498:web:6f47aa64d7f38bf909104b"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firestore
const db = getFirestore(app);

export { db };