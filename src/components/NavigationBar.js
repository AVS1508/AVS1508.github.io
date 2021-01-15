import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar
      style={{
        background: "linear-gradient(45deg, rgba(17, 35, 50, 1) 0%, rgba(7, 37, 62, 1) 100%)",
        position: "sticky",
        top: 0,
        zIndex: 2001,
      }}
      variant="dark"
      expand="lg"
    >
      <Navbar.Brand href="/">Aditya Vikram Singh</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-menu">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/experience">Experience</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/skills">Skills</NavLink>
          <NavLink href="/honors">Honors & Awards</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
