import React, { Component } from "react";
import Form from "../Components/Form";
import CardUser from "../Components/CardUser";
import ListUser from "../Components/ListUsers";

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
    e.preventDefault();
    const newItem = this.state.user
    if(newItem.name !==""){
      const newItems = [...this.state.users, newItem]
      this.setState({
        list:newItems,
        user: {
          name: '',
          lastName: '',
          email: '',
          job : ''
        }
      })
    } else {
      alert('Lenar los campos')
    }
    // const users = [...this.state.users];
    // users.push(this.state.user);
    // this.setState({
    //   users,                                                                                                       
    // });
    // e.preventDefault();
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
          {
            users.map( item => {
              return (
                <p>item.user.name</p>
              )
            })
          }
          {/* <ListUser
            users={this.state.users}
          /> */}
        </div>
        {/* <div>
          {users.map(e => {
            return <CardUser {...this.state.user} />;
          })}
        </div> */}
      </div>
    );
  }
}
export default Registro;
