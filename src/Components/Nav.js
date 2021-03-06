import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "../Pages/Users";
import Tabs from "@material-ui/core/Tabs";
import AppBar from "@material-ui/core/AppBar";
import '../Styles/Nav.css'
import Home from "../Pages/Home";
import Registro from "../Pages/Registro";

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
          <Route exact path="/" component={Home} />
          <Route  path="/Registro" component={Registro} />
          <Route   path="/Usuarios" component={Users} />
        </Switch>
      </Router>
    );
  }
}
export default Nav
// export default withStyles({

// }) (Nav);
