// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcyCZGqy7LnV7UmzdzB0KDSlnPYwHDfUw",
  authDomain: "flavor-riot-client.firebaseapp.com",
  projectId: "flavor-riot-client",
  storageBucket: "flavor-riot-client.appspot.com",
  messagingSenderId: "11831820896",
  appId: "1:11831820896:web:c85c9555b09ce728aff905"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;