import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserForm from "./UserForm";
import Users from "./Users";
import App from "../App";
import Tabs from "@material-ui/core/Tabs";
import AppBar from "@material-ui/core/AppBar";
import '../Styles/Nav.css'

class Nav extends Component {
  
  render() {
    return (
      <Router>
        <AppBar position="static">
          <Tabs  >
            <Link to={"/" } className='Links' >Home</Link>
            <Link to={"/Registro" } className='Links'>Registro</Link>
            <Link to={"/Usuarios" } className='Links'>Usuarios</Link>
          </Tabs>
        </AppBar>
        <Switch>
          <Route exact path="/Home" component={App} />
          <Route path="/Registro" component={UserForm} />
          <Route path="/Usuarios" component={Users} />
        </Switch>
      </Router>
    );
  }
}
export default Nav
// export default withStyles({

// }) (Nav);
