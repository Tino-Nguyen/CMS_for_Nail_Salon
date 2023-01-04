import { initializeApp } from'firebase/app';
import {useState, useEffect} from 'react';

//calling the firebase module getAuth
import{getAuth, signInWithEmailAndPassword, onAuthStateChanged,signOut } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBit4Di97-9J8p5fTqWjmwnozkIK8bwETk",
    authDomain: "bobacorp-37e89.firebaseapp.com",
    projectId: "bobacorp-37e89",
    storageBucket: "bobacorp-37e89.appspot.com",
    messagingSenderId: "617994952226",
    appId: "1:617994952226:web:08678b71267adcf4fe347b",
    measurementId: "G-9SYPS7WMXG"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //initialize firebase authentication and get a reference to the service
  export const auth=getAuth()


  export const LoginEvent = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)

  }

  export const signoutevent=()=>{
    return signOut(auth)
  }




// customized hook

export function UseAuth() {
 const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
  const unSubsribe = onAuthStateChanged(auth, user => setCurrentUser(user))
  return unSubsribe; 

  }, [])
  console.log(currentUser);
  return currentUser;
}


