import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";


class Home extends Component {

  render() {
    
    const {classes} = this.props
    
    return (
        <div>
        <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be nev o lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
        <Button className={classes.btn} variant="contained"size="Large" color="secondary" >Learn More</Button>
        </CardActions>
      </Card>
      

      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be nev o lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
        <Button className={classes.btn} variant="contained"size="Large" color="secondary" >Learn More</Button>
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be nev o lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
        <Button className={classes.btn} variant="contained"size="Large" color="secondary" >Learn More</Button>
        </CardActions>
      </Card>

      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be nev o lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.btn} variant="contained"size="Large" color="secondary" >Learn More</Button>
        </CardActions>
      </Card>

      </div>
    );
  }
}
export default withStyles({
    card: {
        Width: "auto",
        height: 280,
        display: "inline-block",
        margin: "100px auto 0px 75px"
      },
      title: {
        fontSize: 30,
        color : "#785"
      },
      pos: {
        marginBottom: 12
      },
      btn : {
        margin : "5px 20px 5px 40px"
      }
}) (Home);
