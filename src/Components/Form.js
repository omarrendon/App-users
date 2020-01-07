import React, { Component } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from "@material-ui/core";
import Button from "@material-ui/core/Button";

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <FormControl>
            <InputLabel htmlFor="my-input">Nombre(s)</InputLabel>
            <Input id="name" aria-describedby="name-helper" type="text" />
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
            />
            <FormHelperText id="lastName-helper">
              Ingesa tus Apellidos
            </FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="my-input">Email</InputLabel>
            <Input id="email" aria-describedby="email-helper" type=" email" />
            <FormHelperText id="email-helper">
              Tu email asignado en el trabajo
            </FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="my-input">Puesto de trabajo</InputLabel>
            <Input id="job" aria-describedby="job-helper" type="text" />
            <FormHelperText id="job-helper">
              Tu posición dentro de la empresa
            </FormHelperText>
          </FormControl>
          
          <Button variant="contained" color="secondary">
            Guardar
          </Button>
        </form>
      </div>
    );
  }
}
export default Form;
