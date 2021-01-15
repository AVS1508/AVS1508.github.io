import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Error_404 from "./pages/Error_404";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + "/about"} component={About} />
          <Route exact path={process.env.PUBLIC_URL + "/experience"} component={Experience} />
          <Route exact path={process.env.PUBLIC_URL + "/projects"} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + "/skills"} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + "/honors"} component={Home} />
          <Route component={Error_404} />
        </Switch>
        <Footer style={{ zIndex: -2 }} />
      </div>
    </Router>
  );
};

export default App;
