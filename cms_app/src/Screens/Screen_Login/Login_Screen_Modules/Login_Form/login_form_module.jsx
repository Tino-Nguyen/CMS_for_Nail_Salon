import React, { Component } from 'react'
import "./login_form_styles.css";
// THIS IS THE STOPPING POINT! video = 20:42
import { useAuth } from '../../Context/AuthContext';

export default class login_form_module extends Component {
  render() {
    return (
      <div id="login_module">
        <form>
          <h1 id="login_title">s.nail <span>cms</span></h1>
       
          <input type="text" id="name_input" placeholder='username'/>
          <br/>
           
          <br/>
          <input type="password" id="password_input" placeholder='password'/>
          <br/>
          <input type="submit" value="log in"/>
        </form>
      </div>
    )
  }
}
