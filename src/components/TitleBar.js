import React from "react";
import { Row } from "react-bootstrap";

const TitleBar = (props) => {
  return (
    <div className="title-bar">
      <Row className="justify-content-center" style={{ alignItems: "center", margin: 0 }}>
        <h1>{props.title}</h1>
      </Row>
    </div>
  );
};

export default TitleBar;
