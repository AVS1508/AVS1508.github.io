import React from "react";
import { Container, Row } from "react-bootstrap";

const Error404 = () => {
    return (
        <Container className="center outer-structure">
            <Row>
                <h1>Sorry! This page does not exist!</h1>
            </Row>
        </Container>
    );
};

export default Error404;
