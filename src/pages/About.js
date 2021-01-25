import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";

import TitleBar from "../components/TitleBar";
import ProfessionalHeadshot from "../assets/webp/professional-me.webp";
import FallbackProfessionalHeadshot from "../assets/jpg/professional-me.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
        <TitleBar title="About Me" />
        <div className="inner-structure center" style={{ flexDirection: "column" }}>
          <Container fluid style={{ padding: "1.5em" }}>
            <Row className="justify-content-center" style={{ alignItems: "center" }}>
              <Col style={{ textAlign: "center" }}>
                <picture>
                  <source cclassName="header-img" type="image/webp" srcset={ProfessionalHeadshot} />
                  <img className="header-img" src={FallbackProfessionalHeadshot} alt="header" fluid />
                </picture>
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
              <Button className="resume-btn" href="/resume.pdf" target="_blank" size="lg">
                <FontAwesomeIcon icon={faFileAlt} /> Résumé
              </Button>
              <Button
                className="resume-btn"
                href="https://www.adityavsingh.com/old-personal-website"
                target="_blank"
                size="lg"
              >
                <FontAwesomeIcon icon={faGlobe} /> Old Website
              </Button>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
