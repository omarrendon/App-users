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
        />

        <TemplateCard
          title="Agregar Usuario"
          description=" Puedes registrar a un nuevo usuario"
          nameBtn="Registrar"
        />

        <TemplateCard
          title="Agregar Usuario"
          description=" Puedes registrar a un nuevo usuario"
          nameBtn="Registrar"
        />
      </div>
    );
  }
}
export default Home;
