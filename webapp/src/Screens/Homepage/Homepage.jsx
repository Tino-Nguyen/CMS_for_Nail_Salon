import { async } from '@firebase/util';
import React from 'react'
import { signoutevent, UseAuth } from '../../firebase'


export default function Homepage() {
    const currentUser=UseAuth();

    const handlesignout= async (e)=>  {
        e.preventDefault();

            
            await signoutevent();
            
            
            console.log(currentUser)
    }
            
            
  return (


    <div>
        Homepage
        <button style={{color: "black"}} type='submit' id="signoutButton" onClick={handlesignout} >sign out </button>
    </div>
    
  )
}
