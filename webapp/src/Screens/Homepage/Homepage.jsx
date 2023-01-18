import { async } from '@firebase/util';
import React from 'react'
import { signoutevent, UseAuth } from '../../firebase'
import ActiveModal from './Components/Modals/ActiveModal';
import UpcomingModal from './Components/Modals/UpcomingModal';
import RequestForm from './Components/RequestForm/RequestForm';
import "./Homepage.css";
import Navigation from '../../Routing/Navigation';

export default function Homepage() {
    /*const currentUser=UseAuth();

    const handlesignout= async (e)=>  {
        e.preventDefault();

            
            await signoutevent();
            
            
            console.log(currentUser)
    }*/

  
            
  return (

    <form class="formstyle" >
      <Navigation/>
      
      <div class="bodystyle">
        <RequestForm/>
        <UpcomingModal/>
        <ActiveModal/>

      </div>
       

       
          
        
    </form>
    
  )
}
