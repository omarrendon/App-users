import React, { Component } from "react";
// import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import '../Styles/CardUser.css'


class CardUser extends Component {
    render() {
    const {name, lastName, email, job} = this.props
    return (
      <div className='contenedor'>
        <Card >
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
            >
              {name}
            </Typography>
            <Typography variant="h5" component="h2">
              {lastName}
            </Typography>
            <Typography  color="textSecondary">
              {email}
            </Typography>
            <Typography variant="body2" component="p">
              {job}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}
export default CardUser;
