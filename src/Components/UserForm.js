import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Paper, withStyles } from "@material-ui/core";

class UserForm extends Component {
  
  constructor(args) {
    super(args);
    this.state ={
      name: '',
      lastName: '',
      email: '',
      job: ''
    };
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
      [e.target.lastName] : e.target.value,
      [e.target.email] : e.target.value,
      [e.target.job] : e.target.value
    })
  }
  

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  
  render() {
    const { classes } = this.props;
    const {name, lastName, email, job} = this.state
    return (
      <div>
        <h1 className={classes.titulo}>
          Registra a un nuevo usuario
        </h1>
        <form className={classes.Espacios} >
          <Paper square={false} elevation={5} className={classes.Paper}>
            <div className={classes.Espacios}>
              
              <TextField
                value={name}
                onChange={this.handleChange}
                id="name"
                name='name'
                label="Nombres"
                type="text"
              />
            </div>

            <div className={classes.Espacios}>
              <TextField
                value={lastName}
                id="lastName"
                name='lastName'
                label="Apellidos"
                type="text"
                onChange={this.handleChange}
              />
            </div>

            <div className={classes.Espacios}>
              <TextField
                value={email}
                id="email"
                name='email'
                label="Corro Eléctronico"
                type="email"
                onChange={this.handleChange}
              />
            </div>

            <div className={classes.Espacios}>
              <TextField
                value={job}
                id="job"
                name='job'
                label="Puesto"
                type="text"
                onChange={this.handleChange}
              />
            </div>

            <div className={classes.Espacios}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.botton}
                onClick={this.handleSubmit}
              >
                Agregar
              </Button>
            </div>
          </Paper>
        </form>
      </div>
    );
  }
}
export default withStyles({
  Paper: {
    margin: "10px 400px 180px 550px",
    padding: "20px 30px 20px 50px",
    width: "200px"
  },
  botton: {
    marginLeft: "40px",
    marginTop: "10px"
  },
  Espacios: {
    paddingTop: "10px",
    paddingBottom: "10px"
  },
  titulo: {
    fontFamily: "Roboto Condensed",
    color: "#154360",
    textAlign: "center",
    fontSize: "40px"
  }
})(UserForm);
