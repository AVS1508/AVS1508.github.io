import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import TitleBar from "../components/TitleBar";

class Achievements extends React.Component {
  render() {
    return (
      <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
        <TitleBar title="Achievements & Awards" />
        <div className="center inner-structure">
          <Container fluid>
            <Row className="justify-content-center" style={{ alignItems: "center" }}>
              <h1>Work-in-Progress</h1>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Achievements;
