import React, { Component } from "react";

class CardUser extends Component {
  render() {
    const { name, lastName, email, job } = this.props;
    return (
      <div>
        
        <p>Nombre {name}</p>
        <p>Apellido {lastName}</p>
        <p>email {email}</p>
        <p>puesto{job}</p>
      </div>
    );
  }
}
export default CardUser;
