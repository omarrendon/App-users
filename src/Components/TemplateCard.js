import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";

class TemplateCard extends Component {
  render() {
    const {classes} = this.props
    const {title, description, nameBtn} = this.props
    return (
      <div>
        <Card className={classes.card}>
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
    card: {
        Width: "auto",
        height: "auto",
        display: "inline-block",
        margin: "100px 0px 0px 60px",
      },
      title: {
        fontSize: 35,
        color : "#283747",
        textAlign: "center"
      },
      texto : {
        color : "#2874A6",
        fontSize: 18,
      },
      pos: {
        marginBottom: 12
      },
      btn : {
        margin : "5px 0px 5px 90px"
      }
}) (TemplateCard);
