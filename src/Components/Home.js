import React, { Component } from "react";
import TemplateCard from "./TemplateCard";

class Home extends Component {
  render() {
    return (
      <div>
        <TemplateCard
          title="Agregar Usuario"
          description=" Puedes registrar a un nuevo usuario"
          nameBtn="Registrar"
          link = '/Registro'
        />

        <TemplateCard
          title="Ver Usuarios"
          description="Puedes observar el listado de usuarios"
          nameBtn="Usuarios"
          link = '/Usuarios'
        />

        <TemplateCard
          title="Editar Usuarios"
          description=" Puedes Editar y Eliminar usuarios"
          nameBtn="Editar"
          link = '/Registro'
        />
      </div>
    );
  }
}
export default Home;
