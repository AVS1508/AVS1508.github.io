import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TitleBar = (props) => {
  return (
    <div className="title-bar">
      <Row className="justify-content-center" style={{ alignItems: "center" }}>
        <h1>{props.title}</h1>
      </Row>
    </div>
  );
};

export default TitleBar;
