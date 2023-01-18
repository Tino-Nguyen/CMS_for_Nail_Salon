import RequestForm from "./Components/RequestForm/RequestForm";

import {React, useRef, useState} from 'react'

export default function FunctionsForPage(props) {
    
    const custName = useRef();
    const custTel = useRef();
    const preferredDate = useRef();
    const preferredTime = useRef();
    const selectedSerivces = useRef([]);     
    const [returnMessage, getReturnMessage]  = useState('complete the form');
    
    /*const availableServices = services.map(service => {


        return (
            <div>
                <input type='checkbox' id={service.ServiceID} name='selected-service' className='selected-service' value={service.ServiceID}></input>
                <label for={service.ServiceID}>{service.Service}</label>
            </div>
        )
    })*/
    
// try to loop through the checkboxes and push the value to the || also consider using useState || haven't put re
    
/*let customerNames = customers.map(customer => customer.CustomerName); //may need to use useEffect and useState to
const getCustList = (e)=> {
    if(custName.current.value.length > 0) {
        let nameSearched = custName.current.value.toLowerCase;
        customerNames = customerNames.filter(customerName => customerName.toLowerCase.indexOf(nameSearched) !== -1);
    }
    
}*/



const dataCollect = () => {

    
    document.querySelectorAll('input[type=checkbox]').forEach( (serviceBox) => {
        if(serviceBox.checked) {
            selectedSerivces.current.push(serviceBox.value)
        }
    })

    return {
        name: custName.current.value,
        tel: custTel.current.value,
        date: preferredDate.current.valueAsDate,
        time: preferredTime.current.value,
        services: selectedSerivces
    }
}
const dataOnFormReset = () => {
    custName.current.value = '';
    custTel.current.value = '';
    preferredDate.current.value = new Date();
    // preferredTime.current.value = default;
    // dont know how to reset time yet
    selectedSerivces.current= [];
    document.querySelectorAll('input[type=checkbox]').forEach( (serviceBox) => {
        serviceBox.checked = false;
    })
}
const handleCheckin = (e) => {
    e.preventDefault();
    let sessionInfo = dataCollect();
    console.log(sessionInfo);
    //the console.log will be replaced with database interaction
    getReturnMessage('customer has been successfully checked in')
    dataOnFormReset();
}







    
    return (
        <div>Functions</div>
    )

    }