import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div
      className={styles.container}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Spinner className={styles.spinner} animation="border" variant="dark" />
    </div>
  );
};

export default Loader;
