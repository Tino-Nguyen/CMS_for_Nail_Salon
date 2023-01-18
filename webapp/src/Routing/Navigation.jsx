import React from 'react'
import { UseAuth, signoutevent } from '../firebase';

export default function Navigation() {

    const currentUser=UseAuth();
    const handlesignout= async (e)=>  {
        e.preventDefault();
            
            await signoutevent();
            
            
            console.log("Sucessfully SIgnedout")
    }
  return (

    <div class="navbar">

        <h1>CMS</h1>
       
        
    
        <button class="signout" type='submit' to="/" onClick={handlesignout} >sign out </button>
  </div>
  )
}
