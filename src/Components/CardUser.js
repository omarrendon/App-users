import React, { Component } from "react";


class CardUser extends Component {
    render() {
        const  {name, lastName, email, job} = this.props
        return(
            <div>
               
               
               
               
               name {name}
               lastName {lastName}
               email {email}
               job {job}
            </div>
        )
    }
}
export default CardUser;