import React, { Component } from 'react'
import "./login_form_styles.css";
// THIS IS THE STOPPING POINT! video = 20:42
import { useAuth } from '../../Context/AuthContext';

export default class login_form_module extends Component {
  render() {
    return (
      <div id="login_module">
        <form>
          <h1 id="login_title">Log in</h1>
          <label for="name_input">Username:</label>
          <br/>
          <input type="text" id="name_input"/>
          <br/>
          <label for="password_input">Password:</label>
          <br/>
          <input type="password" id="password_input"/>
          <br/>
          <input type="submit" value="log in"/>
        </form>
      </div>
    )
  }
}
