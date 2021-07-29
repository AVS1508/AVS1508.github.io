import React from "react";
import { Col } from "react-bootstrap";

const EducationCard = (props) => {
    return (
        <Col>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <picture>
                            <source className="flip-card-img" type="image/webp" srcset={props.image} />
                            <img className="flip-card-img" src={props.fallback_image} alt="Avatar" />
                        </picture>
                        <t>{props.title}</t>
                        <sm>{props.address}</sm>
                        <br />
                        {props.degree}
                        <sm>{props.major}</sm>
                    </div>
                    <div className="flip-card-back">
                        <t>{props.class}</t>
                        <sm>{props.duration}</sm>
                        <sm>
                            <b>{props.grade}</b>
                        </sm>
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

export default EducationCard;
