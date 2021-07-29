import React from "react";
import { Col } from "react-bootstrap";

const ExperienceCard = (props) => {
    return (
        <Col>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <picture>
                            <source className="flip-card-img" type="image/webp" srcset={props.image} />
                            <img className="flip-card-img" src={props.fallback_image} alt="Avatar" />
                        </picture>
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
