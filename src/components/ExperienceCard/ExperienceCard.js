import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { ImageHolder } from "..";
import * as Asset from "../../assets";
import { SiNestjs, SiMysql, SiFlutter, SiBootstrap, SiReact, SiHtml5, SiCss3, SiFirebase, SiFlask, SiNumpy, SiPython, SiPytorch, SiKotlin, SiJetpackcompose, SiTensorflow, SiDart, SiNodedotjs, SiExpress, SiMongodb, SiNginx, SiAmazonaws, SiAngular, SiIonic, SiGoogleplay, SiAppstore, SiJavascript, SiGit, SiRuby, SiRubyonrails, SiHeroku, SiD3Dotjs, SiDjango, SiTailwindcss, SiNetlify, SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop, SiBlender } from "react-icons/si";
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
  ICAD: (
    <ImageHolder
      primarySource={Asset.ICADLogo}
      secondarySource={Asset.FallbackICADLogo}
      alt="Innovative Contractors for Advanced Dimensions"
      className={`card-img ${styles.image}`}
    />
  ),
  Altius: (
    <ImageHolder
      primarySource={Asset.AltiusLogo}
      secondarySource={Asset.FallbackAltiusLogo}
      alt="Altius Strategic Consulting"
      className={`card-img ${styles.image}`}
    />
  ),
  MoSPI: (
    <ImageHolder
      primarySource={Asset.MoSPILogo}
      secondarySource={Asset.FallbackMoSPILogo}
      alt="Ministry of Statistics and Programme Implementation, Government of India"
      className={`card-img ${styles.image}`}
    />
  ),
};

const icons = {
  AdobeIllustrator: <SiAdobeillustrator className={styles.icon} style={{ color: "#FF9A00" }} />,
  AdobeIndesign: <SiAdobeindesign className={styles.icon} style={{ color: "#FF3366" }} />,
  AdobePhotoshop: <SiAdobephotoshop className={styles.icon} style={{ color: "#31A8FF" }} />,
  AppleAppStore: <SiAppstore className={styles.icon} style={{ color: "#0D96F6" }} />,
  Angular: <SiAngular className={styles.icon} style={{ color: "#0F0F11" }} />,
  AWS: <SiAmazonaws className={styles.icon} style={{ color: "#232F3E" }} />,
  Blender: <SiBlender className={styles.icon} style={{ color: "#F5792A" }} />,
  Bootstrap: (
    <SiBootstrap className={styles.icon} style={{ color: "#7952B3" }} />
  ),
  CSS: <SiCss3 className={styles.icon} style={{ color: "#1572B6" }} />,
  D3dotjs: <SiD3Dotjs className={styles.icon} style={{ color: "#F9A03C" }} />,
  Dart: <SiDart className={styles.icon} style={{ color: "#0175C2" }} />,
  Django: <SiDjango className={styles.icon} style={{ color: "#092E20" }} />,
  Express: <SiExpress className={styles.icon} style={{ color: "#000000" }} />,
  Firebase: (
    <SiFirebase className={styles.icon} style={{ color: "#FFCA28" }} />
  ),
  Flask: (
    <SiFlask className={styles.icon} style={{ color: "#000000" }} />
  ),
  Flutter: (
    <SiFlutter className={styles.icon} style={{ color: "#02569B" }} />
  ),
  Git: <SiGit className={styles.icon} style={{ color: "#F05032" }} />,
  GooglePlay: <SiGoogleplay className={styles.icon} style={{ color: "#414141" }} />,
  Heroku: <SiHeroku className={styles.icon} style={{ color: "#430098" }} />,
  HTML: <SiHtml5 className={styles.icon} style={{ color: "#E34F26" }} />,
  Ionic: <SiIonic className={styles.icon} style={{ color: "#3880FF" }} />,
  JavaScript: <SiJavascript className={styles.icon} style={{ color: "#F7DF1E" }} />,
  JetpackCompose: <SiJetpackcompose className={styles.icon} style={{ color: "#4285F4" }} />,
  Kotlin: <SiKotlin className={styles.icon} style={{ color: "#7F52FF" }} />,
  Tensorflow: <SiTensorflow className={styles.icon} style={{ color: "#FF6F00" }} />,
  MongoDB: <SiMongodb className={styles.icon} style={{ color: "#47A248" }} />,
  MySQL: <SiMysql className={styles.icon} style={{ color: "#4479A1" }} />,
  NestJS: <SiNestjs className={styles.icon} style={{ color: "#E0234E" }} />,
  Netlify: <SiNetlify className={styles.icon} style={{ color: "#00C7B7" }} />,
  Nginx: <SiNginx className={styles.icon} style={{ color: "#009639" }} />,
  Nodedotjs: <SiNodedotjs className={styles.icon} style={{ color: "#339933" }} />,
  NumPy: <SiNumpy className={styles.icon} style={{ color: "#013243" }} />,
  Python: <SiPython className={styles.icon} style={{ color: "#3776AB" }} />,
  PyTorch: <SiPytorch className={styles.icon} style={{ color: "#EE4C2C" }} />,
  React: <SiReact className={styles.icon} style={{ color: "#61DAFB" }} />,
  Ruby: <SiRuby className={styles.icon} style={{ color: "#CC342D" }} />,
  RubyOnRails: <SiRubyonrails className={styles.icon} style={{ color: "#D30001" }} />,
  TailwindCSS: <SiTailwindcss className={styles.icon} style={{ color: "#38B2AC" }} />,
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
        <Card.Text>
          {props.techStack?.map((tech, index) => icons[tech])}
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
                <div style={{ textAlign: "center", padding: "1em" }}>
                  {props.techStack?.map((tech, index) => icons[tech])}
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
