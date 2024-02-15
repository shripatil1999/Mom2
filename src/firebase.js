import  { useState, useEffect } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';
import 'firebase/auth';
import { getAuth,setPersistence, browserSessionPersistence, 
  onAuthStateChanged,
   updateProfile  } from "firebase/auth";
import {getStorage,ref as sRef , 
  // uploadBytes,
  getDownloadURL,  updateMetadata  } from 'firebase/storage'

// import {useAuthState} from 'react-firebase-hooks/auth';
// import {useCollectionData} from 'react-firebase-hooks/firestore';

// const [photoURL, setPhotoURL]=useState()
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
const auth = getAuth(app);
const storage =getStorage();
const db = getFirestore(app);

// const analytics = getAnalytics(app);
// Set persistence to browser session
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe  = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsubscribe ;
  }, [])

  return currentUser;
}


// Set persistence to browser session
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log('Authentication persistence set');
  })
  .catch((error) => {
    console.error('Error setting authentication persistence:', error);
  });


  export async function upload(file, currentUser, setLoading) {
    const fileRef = sRef(storage, 'ProfilePics/' + currentUser.uid + '.png');
  
    setLoading(true);
  
    // Set the content type to 'image/png'
    const metadata = {
      contentType: 'image/png'
    };
  
    // Update the metadata before uploading
    await updateMetadata(fileRef, metadata);
  
    // Upload the file
    // const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);
  
    // Update the user's profile with the new photoURL
    updateProfile(currentUser, { photoURL });
    setLoading(false);
    alert('Uploaded..!!!!');
    var profileFetched=true;
    return photoURL && profileFetched; 
  }

  
  export { auth, db, storage, app, onAuthStateChanged, updateProfile };