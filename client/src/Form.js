import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    gender:"",
    birthdate:"",
    phone:"",
    email:"",
  };


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  render() {
    // Notice how each input has a `value`, `name` and'on change'
    return (
      <div>
        <p>
          Newsfeed
        
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.gender}
            name="Gender"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Gender"
          />
          <input
            value={this.state.birthdate}
            name="Birthdate"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Birthdate"
          />
          <input
            value={this.state.phone}
            name="Phone number"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Phone number"
          />
          <input
            value={this.state.email}
            name="Email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
