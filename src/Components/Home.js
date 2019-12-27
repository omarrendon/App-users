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
            Agregar Usuario
          </Typography>
          {/* <Typography variant="h5" component="h2">
            Registra un nuevo usuario
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography> */}
          <Typography variant="body2" component="p" className={classes.texto}>
            Puedes registrar a un nuevo usuario
          </Typography>
        </CardContent>
        <CardActions>
        <Button className={classes.btn} variant="contained"size="Large" color="secondary" >Learn More</Button>
        </CardActions>
      </Card>
      

      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Lista de Usuarios
          </Typography>
          {/* <Typography variant="h5" component="h2">
            be nev o lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography> */}
          <Typography variant="body2" component="p" className={classes.texto}>
           Consulta la lista de los usuarios registrados
          </Typography>
        </CardContent>
        <CardActions>
        <Button className={classes.btn} variant="contained"size="Large" color="secondary" >Learn More</Button>
        </CardActions>
      </Card>

      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Eliminar Usuarios
          </Typography>
          {/* <Typography variant="h5" component="h2">
            Corrige y elimina a los usuarios previamente agregados
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography> */}
          <Typography variant="body2" component="p" className={classes.texto}> 
            Elimina a los usuarios previamente agregados
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
}) (Home);
