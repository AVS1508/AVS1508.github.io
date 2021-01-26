import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Achievements = lazy(() => import("./pages/Achievements"));
const Error_404 = lazy(() => import("./pages/Error_404"));

const Loading = () => {
  return (
    <div className="center outer-structure" style={{ display: "flex", flexDirection: "column" }}>
      <Spinner animation="border" variant="dark" />
    </div>
  );
};

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <NavigationBar />
        <Suspense fallback={Loading()}>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route exact path={process.env.PUBLIC_URL + "/about"} component={About} />
            <Route exact path={process.env.PUBLIC_URL + "/education"} component={Education} />
            <Route exact path={process.env.PUBLIC_URL + "/experience"} component={Experience} />
            <Route exact path={process.env.PUBLIC_URL + "/projects"} component={Projects} />
            <Route exact path={process.env.PUBLIC_URL + "/skills"} component={Skills} />
            <Route exact path={process.env.PUBLIC_URL + "/achievements"} component={Achievements} />
            <Route component={Error_404} />
          </Switch>
        </Suspense>
        <Footer style={{ zIndex: -2 }} />
      </div>
    </Router>
  );
};

export default App;
