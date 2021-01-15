import React from "react";
import { Col } from "react-bootstrap";

const ExperienceCard = (props) => {
  return (
    <Col>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img class="flip-card-img" src={props.image} alt="Avatar" />
            <t>{props.title}</t>
            {props.organization}
            <sm>{props.address}</sm>
          </div>
          <div class="flip-card-back">
            <t>{props.alternateTitle}</t>
            <sm>{props.duration}</sm>
            <br />
            <imp style={{ textAlign: "justify" }}>
              <sm>{props.details}</sm>
            </imp>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ExperienceCard;
