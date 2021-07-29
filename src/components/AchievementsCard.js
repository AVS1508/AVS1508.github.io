import React from "react";
import { Col } from "react-bootstrap";

const AchievementsCard = (props) => {
    return (
        <Col>
            <div className="flip-card" style={{ width: "360px", height: "200px", maxWidth: "90vw" }}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <t>{props.title}</t>
                        {props.institution}
                        <br />
                        <br />
                        <sm>{props.date}</sm>
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

export default AchievementsCard;
