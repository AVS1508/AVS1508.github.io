import React from "react";
import MyResume from "../assets/my-resume.pdf";

const Resume = () => {
  return (
    <iframe
      title="My Résumé"
      src={MyResume}
      style={{
        position: "fixed",
        top: "0",
        bottom: "0",
        right: "0",
        width: "100%",
        border: "none",
        margin: "0",
        padding: "0",
        overflow: "hidden",
        zIndex: "999999",
        height: "100%",
      }}
    ></iframe>
  );
};

export default Resume;
