import React from "react";
import CardUser from "./CardUser";
import '../Styles/ListUsers.css'

function ListUsers(props) {
  return (
    <div className='fichaGenrador'>
      {props.items.map((person, index) => {
        return (
          <div key={index}>
            <CardUser {...person} />
          </div>
        );
      })}
    </div>
  );
}
export default ListUsers;
