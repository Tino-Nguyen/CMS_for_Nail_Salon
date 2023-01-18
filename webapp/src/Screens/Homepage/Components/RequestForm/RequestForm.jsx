import {React, useRef, useState} from 'react'
import "./RequestForm.css"

import FunctionsForPage from '../../FunctionsForPage';

export default function RequestForm() {
  
  /*const [returnMessage, getReturnMessage]  = useState('complete the form');
  const selectedSerivces = useRef([]);*/
       

  /*const availableServices = services.map(service => {
      return (
        <div>
            <input type='checkbox' id={service.ServiceID} name='selected-service' className='selected-service' value={service.ServiceID}></input>
            <label for={service.ServiceID}>{service.Service}</label>
        </div>
    )
  })*/
    
// try to loop through the checkboxes and push the value to the || also consider using useState || haven't put ref to input elements

  return (

    <fieldset class="requestform">
      <legend>Request Form</legend>

      <fieldset>
        <legend >Information</legend>
        <input ref={FunctionsForPage.custName} type="text"  id="person" placeholder="Name"/>
        <input ref={FunctionsForPage.custTel} type="tel" id="Phone" name="phone" placeholder="Phone" maxLength={10} />
      </fieldset>

      <fieldset>
        <legend>Date & Time</legend>
        <input ref={FunctionsForPage.preferredDate} type="date"  id="date"/>
        <select ref={FunctionsForPage.preferredTime} id='time-slot' name='time-slot'>
        {/* THIS IS NOT THE FINAL THING. write code to only show available time slot */}
          <option value='time01'>09:00 AM</option>
          <option value='time02'>10:00 AM</option>
          <option value='time03'>11:00 AM</option>
          <option value='time04'>12 noon</option>
          <option value='time05'>13:00 PM</option>
          <option value='time06'>14:00 PM</option>
          <option value='time07'>15:00 PM</option>
          <option value='time08'>16:00 PM</option>
          <option value='time09'>17:00 PM</option>
          <option value='time10'>18:00 PM</option>
        </select>
      </fieldset>

      <fieldset class="services">
        <legend>Services</legend>

        
        
        <label class="lab">
          <input type="checkbox"/>
          <span>Service 1</span>
        </label>


        <label class="lab">
          <input type="checkbox"/>
          <span>Service 2</span>
        </label>

        <label class="lab">
          <input type="checkbox"/>
          <span>Service 3</span>
        </label>
        
        <label class="lab">
          <input type="checkbox"/>
          <span>Service 4</span>
        </label>


        <label class="lab">
          <input type="checkbox"/>
          <span>Service 5</span>
        </label>
        
        <label class="lab">
          <input type="checkbox"/>
          <span>Service 6</span>
        </label>



     
       

      
        
      </fieldset>



      <div class="buttons">
        <button class="bttn">Schedule</button>
        <button class="bttn"onClick={FunctionsForPage.handleCheckin}>Check in</button>
        <button class="bttn">Cancel</button>
      </div>
      <br/>
      
    
     
    </fieldset>

  )
}
