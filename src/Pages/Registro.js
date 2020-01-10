import React, { Component } from "react";
import Form from "../Components/Form";
import CardUser from "../Components/CardUser";

class Registro extends Component {
  state = {
    user: {
      name: "",
      lastName: "",
      email: "",
      job: ""
    },
    users: []
  };

  handleChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    const users = this.state.users
    users.push(this.state.user)
    this.setState({ 
      users
    });
    
    e.preventDefault();
    console.log(this.state.user);
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <Form
          onChange={this.handleChange}
          user={this.state.user}
          onSubmit={this.handleSubmit}
        />
        <div>
          {users.map(() => {
            return <CardUser {...this.state.user} />;
          })}
        </div>
      </div>
    );
  }
}
export default Registro;
