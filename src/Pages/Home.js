import React, { Component } from "react";
import TemplateCard from "../Components/TemplateCard";
import '../Styles/Home.css'

class Home extends Component {
  render() {
    return (
      <div className='contenedor'>
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
