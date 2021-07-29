import React from "react";
import { Col, Button } from "react-bootstrap";

const CourseworkButton = (props) => {
    return (
        <Button className="resume-btn modified" style={{ padding: "15px 10px !important" }} size="md" href={props.link} target="_blank">
            <Col style={{ display: "flex", flexDirection: "column" }}>
                <t style={{ padding: "0px 5px" }}>{props.title}</t>
                {props.shortcode}
                <br />
                <br />
                <sm style={{ padding: "0px 5px" }}>{props.term}</sm>
                <sm style={{ padding: "0px 5px" }}>{props.institution}</sm>
            </Col>
        </Button>
    );
};

export default CourseworkButton;
