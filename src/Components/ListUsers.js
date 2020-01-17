import React from "react";
import CardUser from "./CardUser";

function ListUsers(props) {
  return (
    <div>
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
