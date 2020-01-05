import React, { Component } from "react";
import UserForm from "./UserForm";


class UserInformation extends Component {
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
        user : {
            ...this.state.user,
            [e.target.name]: e.target.value,
            [e.target.lastName]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.job]: e.target.value
        }
      
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
      console.log(this.state)
      return (
          
          <div>
            <UserForm
                onChange={this.handleChange}
                user={this.state.user}
                onClick={this.handleSubmit}
            />
           
        </div>
    );
  }
}
export default UserInformation;
