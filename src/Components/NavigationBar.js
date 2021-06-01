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
                <Navbar.Brand href="#home" className="name-logo" >Víctor Durán</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar
