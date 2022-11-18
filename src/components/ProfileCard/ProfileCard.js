import React from "react";
import { Col } from "react-bootstrap";
import styles from "./ProfileCard.module.css";

const ProfileCard = (props) => {
  return (
    <Col lg={props.size} className={styles.container}>
      <img className={styles.image} src={props.logo} alt={props.logoAlt} />
      <span className={styles.text}>{props.children}</span>
    </Col>
  );
};

export default ProfileCard;
