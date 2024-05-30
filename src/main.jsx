import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCmy-lbVXYQhJ_Mo82NOoNZPv8S5GOMsns",
  authDomain: "react-coderhousefr.firebaseapp.com",
  projectId: "react-coderhousefr",
  storageBucket: "react-coderhousefr.appspot.com",
  messagingSenderId: "183874084498",
  appId: "1:183874084498:web:6f47aa64d7f38bf909104b",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
