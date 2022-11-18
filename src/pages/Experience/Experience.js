import React from "react";
import { Container, Row } from "react-bootstrap";
import { Header, ExperienceCard } from "../../components";
import experienceData from "../../data/Experience.json";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <React.Fragment>
      <Header title="Experience" />
      <Container fluid className={styles.container}>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {experienceData.map((obj, index) => (
            <ExperienceCard
              key={index}
              title={obj.title}
              organization={obj.organization}
              liveUrl={obj.liveUrl}
              duration={obj.duration}
              description={obj.description}
              logo={obj.logo}
              variant="danger"
            />
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Experience;
