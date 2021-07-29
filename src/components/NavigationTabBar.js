import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";

const NavigationTabBar = (props) => {
    return (
        <Navbar
            className="dark-bar"
            style={{
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
                    {props.tabs.map((tab) => (
                        <NavLink onClick={() => props.setTab(tab)}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</NavLink>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationTabBar;
