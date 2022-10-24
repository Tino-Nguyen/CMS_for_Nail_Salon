import React, { Component } from 'react'

export default class login_form_module extends Component {
  render() {
    return (
      <div>
        <form>
          <label for="name_input">Username:</label>
          <input type="text" id="name_input"/>
          <br/>
          <label for="password_input">Password:</label>
          <input type="password" id="password_input"/>
          <br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
