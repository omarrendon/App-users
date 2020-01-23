import React, { Component } from "react";
import ListUsers from "./ListUsers";
import '../Styles/Form.css'
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
        [event.target.name]: event.target.value
      }
    });
  };

  onSubmit = event => {
    const {name, lastName, email, job} = this.state.user
    event.preventDefault();
    if (
      name === "" ||
      lastName === "" ||
      email === "" ||
      job === ""
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
          this.state.user
        ],
        validation: true
      });
    }
    console.log(this.state.user);
    console.log(this.state.items);
  };

  render() {
    const {validation, items} = this.state
    return (
      <div className='ficha'>
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

        <div className='ficha'>
          {
            validation 
            ? (
                <div className='contenido'>
                  <ListUsers items={items}/>
                </div>
                
            ) 
            : (
              <small>Rellenar los campos</small>
            )
          }
        </div>
      </div>
    );
  }
}
export default Form;
