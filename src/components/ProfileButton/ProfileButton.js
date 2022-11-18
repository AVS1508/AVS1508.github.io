import React from "react";
import { Button } from "react-bootstrap";
import styles from "./ProfileButton.module.css";

const ProfileButton = (props) => {
  return (
    <Button className={styles.button} variant="outline-light" href={props.href}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.25em",
        }}
      >
        {props.logo}
      </div>
      <span className={styles.span}>{props.children}</span>
    </Button>
  );
};

export default ProfileButton;
