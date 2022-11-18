import React from "react";
import { Container, Row } from "react-bootstrap";
import { Header, AchievementCard } from "../../components";
import achievementsData from "../../data/Achievements.json";
import styles from "./Achievements.module.css";

const Achievements = () => {
  return (
    <React.Fragment>
      <Header title="Achievements" />
      <Container fluid className={styles.container}>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {achievementsData.map((obj, index) => (
            <AchievementCard
              key={index}
              title={obj.title}
              organization={obj.organization}
              description={obj.description}
            />
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Achievements;
