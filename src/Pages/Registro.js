import React, { Component } from "react";
// import UserForm from "../Components/UserForm";
import Form from "../Components/Form";
import CardUser from "../Components/CardUser";

class Registro extends Component {
  state = {
    user: {
        name : '',
        lastName : '',
        email : '',
        job : '',
    }
  };

  handleChange = e => {
    
    this.setState({
        user: {
          ...this.state.user,
          [e.target.name]: e.target.value
        }  
    });
  };

  render() {
    console.log(this.state)
    return (
      <div>
        <Form
          onChange = {this.handleChange}
          user = {this.state.user}
        />
        <div>
          <CardUser
            {...this.state.user}
          />
        </div>
      </div>
    );
  }
}
export default Registro;
