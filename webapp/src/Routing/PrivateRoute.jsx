import React from 'react'
import Homepage from '../Screens/Homepage/Homepage';
import Navigation from './Navigation';
import Login from '../Screens/Login/Login';
import {UseAuth} from '../firebase.js';

export default function PrivateRoute() {
    const currentUser=UseAuth();
    
  return (
    currentUser?
    <Homepage/>
    :
    <Login/>

  )
}
