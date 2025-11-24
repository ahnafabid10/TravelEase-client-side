// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: import.meta.env.VITE_apiKey,
authDomain: import.meta.env.VITE_authDomain,
projectId: import.meta.env.VITE_projectId,
storageBucket: import.meta.env.VITE_storageBucket,
messagingSenderId: import.meta.env.VITE_messagingSenderId,
appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB81epG3y422mV5rDApIjPBwN50B9_Vw3c",
//   authDomain: "travelease-7766e.firebaseapp.com",
//   projectId: "travelease-7766e",
//   storageBucket: "travelease-7766e.firebasestorage.app",
//   messagingSenderId: "486031794274",
//   appId: "1:486031794274:web:92021ab5a9eeaafe4c313b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // export const auth = getAuth(app);