import React, { Component, Fragment } from "react";
import { Container, Row } from "react-bootstrap";

import ExperienceCard from "../components/ExperienceCard";
import TitleBar from "../components/TitleBar";

import UMassLogo from "../assets/umass-logo.jpg";
import DPSRKPLogo from "../assets/dpsrkp-logo.jpg";
import TEDxRKPLogo from "../assets/tedxyouth-logo.jpg";
import BUILDLogo from "../assets/build-logo.jpg";
import AerossLogo from "../assets/aeross-logo.jpg";
import VirtuBoxLogo from "../assets/virtubox-logo.jpg";

class Experience extends Component {
  render() {
    return (
      <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
        <TitleBar title="My Experiences" />
        <div className="inner-structure center">
          <Container fluid style={{ textAlign: "center" }}>
            <Row style={{ display: "inline-flex" }}>
              <ExperienceCard
                image={BUILDLogo}
                title="Software Developer"
                organization="BUILD UMass"
                address="Amherst, MA, USA"
                alternateTitle="Software Developer, BUILD UMass"
                duration="September 2020 - Present"
                details={
                  <>
                    • Developing a modern website for UMass Entrepreneurship Club
                    <br />
                    • Part of 4-member development team responsible for the same
                    <br />
                    • Engineering front-end with React, SCSS, and Bootstrap
                  </>
                }
              />
              <ExperienceCard
                image={VirtuBoxLogo}
                title="Business Development Associate"
                organization="VirtuBox Infotech Pvt. Ltd."
                address="Noida, India"
                alternateTitle="Business Development, VirtuBox Infotech"
                duration="July 2020 - August 2020"
                details={
                  <>
                    • Planned the transition from Vue.js to React framework for web CMS
                    <br />
                    • Worked on competitor analysis and app-store search optimization
                    <br />
                    • Produced 10+ video tutorials about the company’s CMS dashboard
                  </>
                }
              />
              <ExperienceCard
                image={UMassLogo}
                title="Computer Science Peer Tutor"
                organization="College of Information and Computer Science"
                address="Amherst, MA, USA"
                alternateTitle="CS Peer Tutor, UMass CICS"
                duration="January 2020 - May 2020"
                details={
                  <>
                    • Held one-on-one tutoring sessions for two introductory CS courses
                    <br />
                    • Conducted weekly meetings to discuss assignments and homework
                    <br />
                    • Explained various implementations of essential data structures
                  </>
                }
              />
              <ExperienceCard
                image={DPSRKPLogo}
                title="President"
                organization="Student Council, Delhi Public School"
                address="R. K. Puram, New Delhi, India"
                alternateTitle="President, Student Council"
                duration="April 2018 - April 2019"
                details={
                  <>
                    • Oversaw student discipline and adherence to code of conduct
                    <br />
                    • Represented the students’ interests in administrative meetings
                    <br />
                    • Liaised between students, faculty, and administration
                    <br />• Supervised the student-run events in lieu of school coordinator
                  </>
                }
              />
              <ExperienceCard
                image={TEDxRKPLogo}
                title="Lead Designer"
                organization="TEDxYouth@DPSRKPuram"
                address="R. K. Puram, New Delhi, India"
                alternateTitle="Lead Designer, TEDxYouth@DPSRKPuram"
                duration="November 2018 - April 2019"
                details={
                  <>
                    • Led the organization's design initiative for annual event
                    <br />
                    • Created posters, banners, & prospectus for November event
                    <br />
                    • Designed ID cards & certificates for speakers and volunteers
                    <br />
                    • Coordinated with other departments of the Organizing Committee
                  </>
                }
              />
              <ExperienceCard
                image={AerossLogo}
                title="Honorary Advisor"
                organization="Aerospace Society, Delhi Public School"
                address="R. K. Puram, New Delhi, India"
                alternateTitle="Honorary Advisor, Aerospace Society"
                duration="May 2018 - April 2019"
                details={
                  <>
                    • Mentored junior teams for aerospace competitions and summits
                    <br />
                    • Took part in promoting space exploration and colonization to peers
                    <br />
                    • Advised the executive team regarding new focuses for the club
                  </>
                }
              />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Experience;
