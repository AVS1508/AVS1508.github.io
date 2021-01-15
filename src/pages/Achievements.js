import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import TitleBar from "../components/TitleBar";

class Achievements extends React.Component {
  render() {
    return (
      <div className="primary center-structure" style={{ display: "flex", flexDirection: "column" }}>
        <TitleBar title="Achievements & Awards" />
        Work-in-Progress
      </div>
    );
  }
}

export default Achievements;
