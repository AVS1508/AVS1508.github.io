import React from "react";
import { Col } from "react-bootstrap";

const CourseworkCard = (props) => {
    return (
        <Col>
            <div className="flip-card" style={{ width: "320px", height: "200px" }}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <t>{props.title}</t>
                        {props.shortcode}
                        <br />
                        <br />
                        <sm>{props.term}</sm>
                        <sm>{props.institution}</sm>
                    </div>
                    <div className="flip-card-back">
                        <imp style={{ textAlign: "justify", margin: "1em" }}>
                            <sm>{props.details}</sm>
                        </imp>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default CourseworkCard;
