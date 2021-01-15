import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Error_404 from "./pages/Error_404";

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/projects" component={Home} />
          <Route exact path="/skills" component={Home} />
          <Route exact path="/honors" component={Home} />
          <Route component={Error_404} />
        </Switch>
        <Footer style={{ zIndex: -2 }} />
      </div>
    </Router>
  );
};

export default App;
