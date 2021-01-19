import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import TitleBar from "../components/TitleBar";
import ProfessionalHeadshot from "../assets/professional-me.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
        <TitleBar title="About Me" />
        <div className="inner-structure center" style={{ flexDirection: "column" }}>
          <Container fluid style={{ padding: "1.5em" }}>
            <Row className="justify-content-center" style={{ alignItems: "center" }}>
              <Col style={{ textAlign: "center" }}>
                <img className="header-img" src={ProfessionalHeadshot} alt="header" fluid />
              </Col>
            </Row>
            <Row className="justify-content-center" style={{ alignItems: "center" }}>
              <Col lg="10">
                <p
                  id="about"
                  style={{
                    padding: "25px 10px",
                    textAlign: "justify",
                    color: "#111111",
                    margin: "0w",
                  }}
                >
                  I am a rising junior at the University of Massachusetts Amherst, double majoring in Computer Science
                  and Mathematics with a concentration in Statistics and Data Science. Currently, I'm involved as a
                  Software Developer for BUILD UMass, where I use my software engineering skills for pro-bono app/web
                  development and tech consulting for the Amherst community. I also serve as a Designer for the
                  HackUMass Organizing Team, responsible for graphics design and production for the annual hackathon.
                  I'm actively searching for Software Engineering and/or Web Development internships for Summer 2021!
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Button className="resume-btn" href="https://github.com/AVS1508" target="_blank" size="lg">
                <FontAwesomeIcon icon={faGithubSquare} /> GitHub
              </Button>
              <Button className="resume-btn" href="https://www.linkedin.com/in/avs1508" target="_blank" size="lg">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </Button>
              <Button className="resume-btn" href="/resume.pdf" target="_blank" size="lg">
                <FontAwesomeIcon icon={faFileAlt} /> Résumé
              </Button>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
