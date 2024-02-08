// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';
import 'firebase/auth';
import { getAuth,setPersistence, browserSessionPersistence  } from "firebase/auth";
// import {useAuthState} from 'react-firebase-hooks/auth';
// import {useCollectionData} from 'react-firebase-hooks/firestore';



// const auth= firebase.auth();
// const firestore=firebase.firestore();


const firebaseConfig = {
  apiKey: "AIzaSyDyNnwo-6iRjJ7hWSJj8Llp0TpwqrCT-Ng",
  authDomain: "meeting-minutes-papl.firebaseapp.com",
  projectId: "meeting-minutes-papl",
  storageBucket: "meeting-minutes-papl.appspot.com",
  messagingSenderId: "243874885679",
  appId: "1:243874885679:web:ca14c4656ab683cec2d6da",
  measurementId: "G-M6ZYTE6LVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Set persistence to browser session
export const auth = getAuth(app);

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Authentication persistence set");
  })
  .catch((error) => {
    console.error("Error setting authentication persistence:", error);
  });


  const db = getFirestore(app);
  
  export { db,app };