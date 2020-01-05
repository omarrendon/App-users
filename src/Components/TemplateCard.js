import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';
import '../Styles/TemplateCard.css'

class TemplateCard extends Component {
  render() {
    const { classes } = this.props;
    const { title, description, nameBtn, link } = this.props;
    return (
      <div className='contenedor'>
        <Card className={classes.card} className='card'>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="body2" component="p" className={classes.texto}>
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className={classes.btn}
              variant="contained"
              size="Large"
              color="secondary"
              component ={Link}
              to = {link}
            >
              {nameBtn}
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default withStyles({
  
  title: {
    fontSize: 35,
    color: "#283747",
    textAlign: "center"
  },
  texto: {
    color: "#2874A6",
    fontSize: 18
  },
  btn: {
    margin: "5px 0px 5px 90px"
  }
})(TemplateCard);
