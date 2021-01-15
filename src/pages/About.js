import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import EducationCard from "../components/EducationCard";
import TitleBar from "../components/TitleBar";

import ProfessionalHeadshot from "../assets/professional-me.jpg";
import UMassLogo from "../assets/umass-logo.jpg";
import DPSRKPLogo from "../assets/dpsrkp-logo.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="primary center-structure" style={{ display: "flex", flexDirection: "column" }}>
        <TitleBar title="About Me" />
        <Container fluid style={{ padding: "1em" }}>
          <Row className="justify-content-center" style={{ alignItems: "center" }}>
            <Col lg="4" style={{ textAlign: "center" }}>
              <img className="header-img" src={ProfessionalHeadshot} alt="header" fluid />
            </Col>
          </Row>
          <Row className="justify-content-center" style={{ alignItems: "center" }}>
            <Col lg="8">
              <p
                id="about"
                style={{
                  fontFamily: "Nunito Sans",
                  padding: "25px 10px",
                  textAlign: "justify",
                  color: "#111111",
                  margin: "0w",
                }}
              >
                I am a rising junior at the University of Massachusetts Amherst, double majoring in Computer Science and
                Mathematics with a concentration in Statistics and Data Science. Currently, I'm involved as a Software
                Developer for BUILD UMass, where I use my software engineering skills for pro-bono app/web development
                and tech consulting for the Amherst community. I also serve as a Designer for the HackUMass Organizing
                Team, responsible for graphics design and production for the annual hackathon. I'm actively searching
                for Software Engineering and/or Web Development internships for Summer 2021!
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <EducationCard
              image={UMassLogo}
              title="University of Massachusetts"
              address="Amherst, MA, USA"
              degree="Bachelor in Science (Honors)"
              major="Computer Science and Mathematics"
              class="Class of 2023"
              duration="August 2019 - May 2023"
              grade="4.00 GPA"
              details={
                <>
                  • Major: Computer Science & Mathematics (Statistics & Data Science)
                  <br />
                  • Dean's List (all semesters)
                  <br />
                  • Member, Commonwealth Honors College (Jun 2020 - Present)
                  <br />
                  • Software Developer, BUILD UMass (Sep 2020 - Present)
                  <br />
                  • Member, UMass ACM (Sep 2019 - Present) <br />
                  • Designer, HackUMass Organizing Team (Mar 2020 - Present)
                </>
              }
            />
            <EducationCard
              image={DPSRKPLogo}
              title="Delhi Public School"
              address="R. K. Puram, New Delhi, India"
              degree="High School Diploma"
              major="Science with Computer Science"
              class="Class of 2019"
              duration="July 2012 - May 2019"
              grade={
                <>
                  96.0% (Grade 12) <br /> 10.0 CGPA (Grade 10)
                </>
              }
              details={
                <>
                  • President, Student Council (Apr 2018 - Apr 2019)
                  <br />
                  • Lead Designer, TEDxYouth@DPSRKPuram (Nov 2018 - Apr 2019)
                  <br />
                  • Designer, TEDxYouth@DPSRKPuram (May 2018 - Nov 2018)
                  <br />
                  • Honorary Advisor, Aerospace Society (May 2018 - Apr 2019)
                  <br />• Structural Engineer, Aerospace Society (May 2016 - Apr 2018)
                </>
              }
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
