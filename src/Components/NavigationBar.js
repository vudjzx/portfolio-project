import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
const NavigationBar = () => {
    return (
        <div>
            <Navbar 
            bg="light"
            variant="light"
            sticky="top"
            expand="sm"
            className="justify-content-between"
            >
                <Navbar.Brand href="#home">Víctor Durán</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar
