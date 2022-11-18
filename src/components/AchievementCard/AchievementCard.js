import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import styles from "./AchievementCard.module.css";

const AchievementCard = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleModalOpen = () => setModalDisplay(true);
  const handleModalClose = () => setModalDisplay(false);

  return (
    <Card className={styles.container}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.organization}</Card.Text>
        {props.description ? (
          <React.Fragment>
            <Button
              className={styles.button}
              variant="secondary"
              onClick={handleModalOpen}
            >
              View Description
            </Button>
            <Modal centered show={modalDisplay} onHide={handleModalClose}>
              <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{props.description}</Modal.Body>
              <Modal.Footer style={{ justifyContent: "center" }}>
                <h5>{props.organization}</h5>
              </Modal.Footer>
            </Modal>
          </React.Fragment>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default AchievementCard;
