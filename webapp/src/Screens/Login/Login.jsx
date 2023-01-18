import {React, useState, useRef} from 'react';
import './Login.css'

import { LoginEvent } from '../../firebase';
import{onAuthStateChanged} from "firebase/auth"
import Homepage from '../Homepage/Homepage';

export default function Login(props) {

    const emailRef = useRef();
    const passwordRef = useRef();
    //const currentUser = UseAuth();
    const [errMsg, getErrMsg] = useState('   ');
    const [confirm, getConfirm] = useState('   ');
    const handleLogIn= async(e)=> {
    e.preventDefault();
    
    try{
        
        LoginEvent(emailRef.current.value, passwordRef.current.value)
        




        

    
    } catch (err) {
        getErrMsg('unmatched email or password') 
    }  
 
}

    return (

        <div className="form">

            <div className="container">
                <div className="smallercontainer">

                    
                    <input ref={emailRef} class="info" type="email" placeholder="Email" required id="inputs"/>
                   
                    <input ref={passwordRef} class="info" type="password" placeholder="Password" required id="inputs"/>
                    <button type='submit' id="loginButton" onClick={handleLogIn} ><span></span>Log in </button>
                    <p>{confirm}</p>
                    <p>{errMsg}</p>
                </div>
            

            </div>
        </div>
    
  )
}
