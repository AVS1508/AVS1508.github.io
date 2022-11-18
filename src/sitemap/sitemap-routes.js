import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import About from "../pages/About";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Achievements from "../pages/Achievements";
import Error_404 from "../pages/Error_404";

export default (
  <Router basename={process.env.PUBLIC_URL}>
    <NavigationBar />
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
      <Route exact path={process.env.PUBLIC_URL + "/about"} component={About} />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/education"}
        component={Education}
      />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/experience"}
        component={Experience}
      />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/projects"}
        component={Projects}
      />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/skills"}
        component={Skills}
      />
      <Route
        exact
        path={process.env.PUBLIC_URL + "/achievements"}
        component={Achievements}
      />
      <Route component={Error_404} />
    </Switch>
    <Footer style={{ zIndex: -2 }} />
  </Router>
);
