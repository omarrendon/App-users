import React, { Component } from "react";
// import { FormControl, InputLabel, Input, FormHelperText, Button} from "@material-ui/core";

class Form extends Component {
  render() {
    const { onChange, user, onSubmit } = this.props;

    return (
      <div>
        <form onSubmit={onSubmit}>
          <input
            id="name"
            name="name"
            placeholder="name"
            type="text"
            value={user.name}
            onChange={onChange}
          >
          </input>
          <input
            id="lastName"
            placeholder="last name"
            type="text"
            name='lastName'
            value ={user.lastName}
            onChange={onChange}
          >
          </input>
          <input
            id="email" 
            name='email'
            value ={user.email}
            placeholder="email"
            type=" email" 
            onChange={onChange}
          >
          </input>
          <input
            id="job" 
            name='job'
            placeholder="job"
            type="text" 
            value ={user.job}
            onChange={onChange}
          >
          </input>
          <button type="submit">Guardar</button>
        </form>
      </div>
      /* <FormControl>
            <InputLabel htmlFor="my-input">Nombre(s)</InputLabel>
            <Input 
              id="name"
              name ='name'
              aria-describedby="name-helper" 
              type="text"
              value ={user.name}
              onChange={onChange}
            />
            <FormHelperText id="name-helper">
              Ingesa solo tus nombres
            </FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="my-input">Apellidos</InputLabel>
            <Input
              id="lastName"
              aria-describedby="lastName-helper"
              type="text"
              name='lastName'
              value ={user.lastName}
              onChange={onChange}
            />
            <FormHelperText id="lastName-helper">
              Ingesa tus Apellidos
            </FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input 
              id="email" 
              name='email'
              value ={user.email}
              aria-describedby="email-helper" 
              type=" email" 
              onChange={onChange}
            />
            <FormHelperText id="email-helper">
              Tu email asignado en el trabajo
            </FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="my-input">Puesto de trabajo</InputLabel>
            <Input 
              id="job" 
              name='job'
              aria-describedby="job-helper" 
              type="text" 
              value ={user.job}
              onChange={onChange}
            />
            <FormHelperText id="job-helper">
              Tu posición dentro de la empresa
            </FormHelperText>
          </FormControl>
          
          <Button variant="contained" color="secondary" type="submit">
            Guardar
          </Button> */
    );
  }
}
export default Form;
