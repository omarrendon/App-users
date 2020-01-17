import React, { Component } from "react";
// import { FormControl, InputLabel, Input, FormHelperText, Button} from "@material-ui/core";
import ListUsers from "../Components/ListUsers";
import CardUser from "./CardUser";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        lastName: "",
        email: "",
        job: ""
      },
      items: [],
      validation: false
    };
  }

  onChange = event => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name] : event.target.value,
      }
    });
    console.log(this.state.user);
  };

  onSubmit = event => {
    event.preventDefault();
    if (
      this.state.user.name === "" ||
      this.state.user.lastName === "" ||
      this.state.user.email === "" ||
      this.state.user.job === ""
    ) {
      alert("Rellenar los campos faltantes correctamente");
    } else {

      this.setState({
        user: {
          name: "",
          lastName: "",
          email: "",
          job: ""
        },
        items: [
          ...this.state.items,
          // this.state.user
          this.state.user.name,
          this.state.user.lastName,
          this.state.user.email,
          this.state.user.job
        ],
        validation: true
      });
    }
    console.log(this.state);
  };

  render() {
    // const { name, lastName, email, job } = this.state.user;
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input
            value={this.state.user.name}
            name="name"
            placeholder="Nombre"
            onChange={this.onChange}
            type="text"
          />

          <input
            value={this.state.user.lastName}
            name="lastName"
            placeholder="Apellidos"
            onChange={this.onChange}
            type="text"
          />

          <input
            value={this.state.user.email}
            name="email"
            placeholder="email"
            onChange={this.onChange}
            type="email"
          />

          <input
            value={this.state.user.job}
            name="job"
            placeholder="Puesto de trabajo"
            onChange={this.onChange}
            type="text"
          />

          <button type="submit">Submit</button>
        </form>

        <div>
          {this.state.validation ? (
            <ListUsers
              items={this.state.items}
              // name= {this.state.name}
              // lastName= {this.state.lastName}
              // email= {this.state.email}
              // job= {this.state.job}
            />
          ) : (
            <small>Rellenar los campos</small>
          )}
        </div>
      </div>
    );
  }
}
export default Form;
