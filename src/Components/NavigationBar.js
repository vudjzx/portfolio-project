import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import '../App.css';
const NavigationBar = () => {

    return (
        <div>
            <Navbar 
            bg="dark"
            variant="dark"
            fixed="top"
            expand="sm"
            className="navigation"
            >
                <Navbar.Brand href="#home" className="name-logo" >Victor Duran</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto">
                        <Nav.Link active={true} href="#projects">Projects</Nav.Link>
                        <Nav.Link active={true} href="#about">About me</Nav.Link>
                        <Nav.Link active={true} href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar
