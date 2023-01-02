import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { ImageHolder } from "..";
import * as Asset from "../../assets";
import styles from "./ExperienceCard.module.css";

const assets = {
  CICS: (
    <ImageHolder
      primarySource={Asset.CICSLogo}
      secondarySource={Asset.FallbackCICSLogo}
      alt="Manning CICS"
      className={`card-img ${styles.image}`}
    />
  ),
  CICSoft: (
    <ImageHolder
      primarySource={Asset.CICSoftLogo}
      secondarySource={Asset.FallbackCICSoftLogo}
      alt="CICSoft"
      className={`card-img ${styles.image}`}
    />
  ),
  BUILD: (
    <ImageHolder
      primarySource={Asset.BUILDUMassLogo}
      secondarySource={Asset.FallbackBUILDUMassLogo}
      alt="BUILD UMass"
      className={`card-img ${styles.image}`}
    />
  ),
  HackUMass: (
    <ImageHolder
      primarySource={Asset.HackUMassLogo}
      secondarySource={Asset.FallbackHackUMassLogo}
      alt="HackUMass"
      className={`card-img ${styles.image}`}
    />
  ),
  ILinkDigital: (
    <ImageHolder
      primarySource={Asset.ILinkDigitalLogo}
      secondarySource={Asset.FallbackILinkDigitalLogo}
      alt="iLink Digital Inc."
      className={`card-img ${styles.image}`}
    />
  ),
  InnovationM: (
    <ImageHolder
      primarySource={Asset.InnovationMLogo}
      secondarySource={Asset.FallbackInnovationMLogo}
      alt="InnovationM Mobile & Web Technologies"
      className={`card-img ${styles.image}`}
    />
  ),
  VirtuBox: (
    <ImageHolder
      primarySource={Asset.VirtuBoxLogo}
      secondarySource={Asset.FallbackVirtuBoxLogo}
      alt="VirtuBox Infotech"
      className={`card-img ${styles.image}`}
    />
  ),
  UMass: (
    <ImageHolder
      primarySource={Asset.UMassLogo}
      secondarySource={Asset.FallbackUMassLogo}
      alt="University of Massachusetts Amherst"
      className={`card-img ${styles.image}`}
    />
  ),
  DPSRKP: (
    <ImageHolder
      primarySource={Asset.DPSRKPLogo}
      secondarySource={Asset.FallbackDPSRKPLogo}
      alt="Delhi Public School, R. K. Puram"
      className={`card-img ${styles.image}`}
    />
  ),
  "TEDx@DPSRKP": (
    <ImageHolder
      primarySource={Asset.TEDxLogo}
      secondarySource={Asset.FallbackTEDxLogo}
      alt="TEDxYouth@DPSRKPuram"
      className={`card-img ${styles.image}`}
    />
  ),
  Aeross: (
    <ImageHolder
      primarySource={Asset.AerossLogo}
      secondarySource={Asset.FallbackAerossLogo}
      alt="Aerospace Society, D.P.S. R. K. Puram"
      className={`card-img ${styles.image}`}
    />
  ),
};

const ExperienceCard = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleModalOpen = () => setModalDisplay(true);
  const handleModalClose = () => setModalDisplay(false);

  return (
    <Card className={styles.container}>
      {assets[props.logo]}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.organization}
          <br />
          <span style={{ fontWeight: "500" }}>{props.duration}</span>
        </Card.Text>
        {props.liveUrl ? (
          <Button
            className={styles.button}
            variant={props.variant}
            href={props.liveUrl}
            target="_blank"
          >
            Visit Website
          </Button>
        ) : null}
        {props.description ? (
          <React.Fragment>
            <Button
              className={styles.button}
              variant="secondary"
              onClick={handleModalOpen}
            >
              View Description
            </Button>
            <Modal
              centered
              size="lg"
              show={modalDisplay}
              onHide={handleModalClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>{props.organization}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div style={{ textAlign: "center" }}>
                  <h4>{props.title}</h4>
                </div>
                <div style={{ textAlign: "center" }}>
                  <h5>{props.duration}</h5>
                </div>
                <ul>
                  {props.description.map((elem) => (
                    <li>{elem}</li>
                  ))}
                </ul>
              </Modal.Body>
            </Modal>
          </React.Fragment>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default ExperienceCard;
