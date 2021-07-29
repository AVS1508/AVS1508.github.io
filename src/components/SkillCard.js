import React from "react";
import {
    Python,
    Javascript,
    Java,
    C,
    Cplusplus,
    R,
    ReactJs,
    Express,
    Mongodb,
    Postgresql,
    Postman,
    Nodedotjs,
    Django,
    Flask,
    Bootstrap,
    Html5,
    CssThree,
    Git,
    Markdown,
    Adobeillustrator,
    Adobephotoshop,
    Blender,
    Ibm,
    Hackerrank,
    Coursera,
} from "@icons-pack/react-simple-icons";
import { Row, Button } from "react-bootstrap";

const logoDictionary = {
    python: Python,
    javascript: Javascript,
    java: Java,
    c: C,
    cplusplus: Cplusplus,
    r: R,
    react: ReactJs,
    express: Express,
    mongodb: Mongodb,
    postgresql: Postgresql,
    postman: Postman,
    node: Nodedotjs,
    django: Django,
    flask: Flask,
    bootstrap: Bootstrap,
    html5: Html5,
    css3: CssThree,
    git: Git,
    markdown: Markdown,
    illustrator: Adobeillustrator,
    photoshop: Adobephotoshop,
    blender: Blender,
    ibm: Ibm,
    hackerrank: Hackerrank,
    coursera: Coursera,
};

const SkillCard = (props) => {
    let Logo = logoDictionary[`${props.logo}`];
    console.log(Logo);
    return (
        <Button className="resume-btn" size="md" href={props.link} target="_blank">
            <Row>
                <Logo size={24} color={props.color} />
                <span style={{ padding: "0px 5px" }}>{props.title}</span>
            </Row>
        </Button>
    );
};

export default SkillCard;
