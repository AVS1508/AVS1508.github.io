import React from "react";
import { Card, Button } from "react-bootstrap";
import { ImageHolder } from "..";
import * as Asset from "../../assets";
import { SiNestjs, SiMysql, SiFlutter, SiBootstrap, SiReact, SiHtml5, SiCss3, SiFirebase, SiFlask, SiNumpy, SiPython, SiPytorch } from "react-icons/si";
import styles from "./ProjectCard.module.css";

const assets = {
  "Perpetual Crusades": (
    <ImageHolder
      primarySource={Asset.PerpetualCrusades}
      secondarySource={Asset.FallbackPerpetualCrusades}
      alt="Perpetual Crusades"
      className="card-img"
    />
  ),
  "Project URefer": (
    <ImageHolder
      primarySource={Asset.ProjectURefer}
      secondarySource={Asset.FallbackProjectURefer}
      alt="Project URefer"
      className="card-img"
    />
  ),
  "HackUMass Website": (
    <ImageHolder
      primarySource={Asset.HackUMassWebsite}
      secondarySource={Asset.FallbackHackUMassWebsite}
      alt="HackUMass Website"
      className="card-img"
    />
  ),
  "Foliage": (
    <ImageHolder
      primarySource={Asset.Foliage}
      secondarySource={Asset.FallbackFoliage}
      alt="Foliage"
      className="card-img"
    />
  ),
  "Cough Detector": (
    <ImageHolder
      primarySource={Asset.CoughDetector}
      secondarySource={Asset.FallbackCoughDetector}
      alt="Cough Detector"
      className="card-img"
    />
  ),
  "SpectralCNN": (
    <ImageHolder
      primarySource={Asset.SpectralCNN}
      secondarySource={Asset.FallbackSpectralCNN}
      alt="SpectralCNN"
      className="card-img"
    />
  ),
};

const icons = {
  Bootstrap: (
    <SiBootstrap className={styles.icon} style={{ color: "#7952B3" }} />
  ),
  CSS: <SiCss3 className={styles.icon} style={{ color: "#1572B6" }} />,
  Firebase: (
    <SiFirebase className={styles.icon} style={{ color: "#FFCA28" }} />
  ),
  Flask: (
    <SiFlask className={styles.icon} style={{ color: "#000000" }} />
  ),
  Flutter: (
    <SiFlutter className={styles.icon} style={{ color: "#02569B" }} />
  ),
  HTML: <SiHtml5 className={styles.icon} style={{ color: "#E34F26" }} />,
  MySQL: <SiMysql className={styles.icon} style={{ color: "#4479A1" }} />,
  NestJS: <SiNestjs className={styles.icon} style={{ color: "#E0234E" }} />,
  NumPy: <SiNumpy className={styles.icon} style={{ color: "#013243" }} />,
  Python: <SiPython className={styles.icon} style={{ color: "#3776AB" }} />,
  PyTorch: <SiPytorch className={styles.icon} style={{ color: "#EE4C2C" }} />,
  React: <SiReact className={styles.icon} style={{ color: "#61DAFB" }} />,
};

const ProjectCard = (props) => {
  return (
    <Card className={styles.container}>
      {assets[props.title]}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.techStack.map((tech, index) => icons[tech])}
        </Card.Text>
        <Card.Text>{props.content}</Card.Text>
        {props.liveUrl ? (
          <Button
            className={styles.button}
            variant="primary"
            href={props.liveUrl}
            target="_blank"
          >
            View Live
          </Button>
        ) : null}
        {props.gitHubUrl ? (
          <Button
            className={styles.button}
            variant="dark"
            href={props.gitHubUrl}
            target="_blank"
          >
            View on GitHub
          </Button>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
