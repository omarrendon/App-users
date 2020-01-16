import React, { Component } from "react";
// import { FormControl, InputLabel, Input, FormHelperText, Button} from "@material-ui/core";
import ListUsers from "../Components/ListUsers";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      email: "",
      job: "",
      items: [],
      validation : false
    };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.name === "" ||this.state.lastName === "" ||this.state.email === "" ||this.state.job === "") {
      alert("Rellenar los campos faltantes correctamente")
    } else {
      this.setState({
        name: "",
        lastName: "",
        email: "",
        job: "",
        items: [
          ...this.state.items,
          this.state.name,
          this.state.lastName,
          this.state.email,
          this.state.job
        ],
        validation: true
      });
    }
    console.log(this.state);
  };

  render() {
    const { name, lastName, email, job } = this.state;
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input
            value={name}
            name="name"
            placeholder="Nombre"
            onChange={this.onChange}
          />

          <input
            value={lastName}
            name="lastName"
            placeholder="Apellidos"
            onChange={this.onChange}
          />

          <input
            value={email}
            name="email"
            placeholder="email"
            onChange={this.onChange}
          />

          <input
            value={job}
            name="job"
            placeholder="Puesto de trabajo"
            onChange={this.onChange}
          />

          <button type="submit">Submit</button>
        </form>

        <div>
          {
            this.state.validation
            ? <ListUsers items={this.state.items} />
            : <small>Rellenar los campos</small>
          }
        </div>
      </div>
    );
  }
}
export default Form;
