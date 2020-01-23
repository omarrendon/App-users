import React, { Component } from "react";
import "../Styles/CardUser.css";


class CardUser extends Component {
  render() {
    const { name, lastName, email, job } = this.props;
    return (
      <div className="contenedor1">
        <div className="contenido">
          <label>Nombre </label> 
          <p>{name}</p>
          <label>Apellidos </label>
          <p> {lastName}</p>
          <label>Email</label>
          <p>{email}</p>
          <label>Puesto</label>
          <p>{job}</p>
          <button>Eliminar</button>
          <button>Editar</button>
        </div>
      </div>
    );
  }
}
export default CardUser;
