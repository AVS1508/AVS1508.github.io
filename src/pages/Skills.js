import React from "react";
import { Container, Row } from "react-bootstrap";

import TitleBar from "../components/TitleBar";
import SkillCard from "../components/SkillCard";

class Skills extends React.Component {
  render() {
    return (
      <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column" }}>
        <div className="center inner-structure" style={{ flexDirection: "column" }}>
          <TitleBar title="Skills" />
          <Container fluid style={{ maxWidth: "90vw", textAlign: "center" }}>
            <Row className="justify-content-center" style={{ alignItems: "center" }}>
              <SkillCard title="Python" logo="python" color="#3776AB" />
              <SkillCard title="JavaScript" logo="javascript" color="#F7DF1E" />
              <SkillCard title="Java" logo="java" color="#007396" />
              <SkillCard title="C" logo="c" color="#A8B9CC" />
              <SkillCard title="C++" logo="cplusplus" color="#00599C" />
              <SkillCard title="R" logo="r" color="#276DC3" />
              <SkillCard title="React" logo="react" color="#61DAFB" />
              <SkillCard title="Node.js" logo="node" color="#339933" />
              <SkillCard title="MongoDB" logo="mongodb" color="#47A248" />
              <SkillCard title="PostgreSQL" logo="postgresql" color="#4169E1" />
              <SkillCard title="Express" logo="express" color="#000000" />
              <SkillCard title="Django" logo="django" color="#092E20" />
              <SkillCard title="Flask" logo="flask" color="#000000" />
              <SkillCard title="Bootstrap" logo="bootstrap" color="#7952B3" />
              <SkillCard title="HTML" logo="html5" color="#E34F26" />
              <SkillCard title="CSS" logo="css3" color="#1572B6" />
              <SkillCard title="Git" logo="git" color="#F05032" />
              <SkillCard title="Postman" logo="postman" color="#FF6C37" />
              <SkillCard title="Markdown" logo="markdown" color="#000000" />
              <SkillCard title="Illustrator" logo="illustrator" color="#FF9A00" />
              <SkillCard title="Photoshop" logo="photoshop" color="#31A8FF" />
              <SkillCard title="Blender" logo="blender" color="#F5792A" />
            </Row>
          </Container>
          <TitleBar title="Certifications" />
          <Container fluid style={{ maxWidth: "90vw", textAlign: "center" }}>
            <Row className="justify-content-center" style={{ alignItems: "center" }}>
              <SkillCard
                title="Master the Mainframe 2020 - Level 2"
                logo="ibm"
                color="#054ADA"
                link="https://www.credly.com/badges/9b6b1f86-4922-4ebd-8317-def064c1c545?source=linked_in_profile"
              />
              <SkillCard
                title="Problem Solving (Basic)"
                logo="hackerrank"
                color="#2EC866"
                link="https://www.hackerrank.com/certificates/e8eb84528825"
              />
              <SkillCard
                title="Python (Basic)"
                logo="hackerrank"
                color="#2EC866"
                link="https://www.hackerrank.com/certificates/af328ac62ad0"
              />
              <SkillCard
                title="Python (Intermediate)"
                logo="hackerrank"
                color="#2EC866"
                link="https://www.hackerrank.com/certificates/ebf245c0eb27"
              />
              <SkillCard
                title="Java (Basic)"
                logo="hackerrank"
                color="#2EC866"
                link="https://www.hackerrank.com/certificates/6a630c2133d9"
              />
              <SkillCard
                title="Java (Intermediate)"
                logo="hackerrank"
                color="#2EC866"
                link="https://www.hackerrank.com/certificates/dfdcfe8f8ee4"
              />
              <SkillCard
                title="JavaScript (Basic)"
                logo="hackerrank"
                color="#2EC866"
                link="https://www.hackerrank.com/certificates/7af2e8e3f0e3"
              />
              <SkillCard
                title="C++ (Basic)"
                logo="hackerrank"
                color="#2EC866"
                link="https://www.hackerrank.com/certificates/d70364be6715"
              />
              <SkillCard
                title="Basic Sentiment Analysis with Tensorflow"
                logo="coursera"
                color="#0056D2"
                link="https://www.coursera.org/account/accomplishments/certificate/FW95PRL5XQMG"
              />
              <SkillCard
                title="Coding Yourself! An Introduction to Programming"
                logo="coursera"
                color="#0056D2"
                link="https://www.coursera.org/account/accomplishments/certificate/JLT5JKWWGYXD"
              />
              <SkillCard
                title="Data Science Math Skills"
                logo="coursera"
                color="#0056D2"
                link="https://www.coursera.org/account/accomplishments/certificate/XMUUAGNJYU3S"
              />
              <SkillCard
                title="Introduction to Programming in MATLAB"
                logo="coursera"
                color="#0056D2"
                link="https://www.coursera.org/account/accomplishments/certificate/N5LXRJWDUA2D"
              />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Skills;
