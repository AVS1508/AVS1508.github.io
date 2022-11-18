import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "./NavigationBar.module.css";

const NavigationBar = (props) => {
  return (
    <Navbar
      sticky="top"
      variant="dark"
      expand="lg"
      style={{
        padding: "0.5em",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.5)",
        background: "rgba(36,36,36,1)",
      }}
    >
      <Container fluid>
        <Navbar.Brand style={{ color: "white", fontWeight: "500" }}>
          Aditya Vikram Singh
        </Navbar.Brand>
        <Navbar.Toggle
          className="ms-auto"
          aria-controls="basic-navbar-nav"
          style={{ color: "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto"
            activeKey={props.currentTab}
            onSelect={(key) => props.setCurrentTab(key)}
          >
            <Nav.Link
              eventKey="home"
              className={
                props.currentTab === "home"
                  ? styles.activeLink
                  : styles.inactiveLink
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              eventKey="projects"
              className={
                props.currentTab === "projects"
                  ? styles.activeLink
                  : styles.inactiveLink
              }
            >
              Projects
            </Nav.Link>
            <Nav.Link
              eventKey="experience"
              className={
                props.currentTab === "experience"
                  ? styles.activeLink
                  : styles.inactiveLink
              }
            >
              Experience
            </Nav.Link>
            <Nav.Link
              eventKey="involvements"
              className={
                props.currentTab === "involvements"
                  ? styles.activeLink
                  : styles.inactiveLink
              }
            >
              Involvements
            </Nav.Link>
            <Nav.Link
              eventKey="achievements"
              className={
                props.currentTab === "achievements"
                  ? styles.activeLink
                  : styles.inactiveLink
              }
            >
              Achievements
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
