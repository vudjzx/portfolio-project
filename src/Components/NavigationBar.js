import React, {useState} from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import '../App.css';
const NavigationBar = () => {
    const [position, setPosition] = useState(0);
    const logPosition = () =>{
        setPosition(window.pageYOffset);
      }
      window.addEventListener('scroll', logPosition);
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
                        <Nav.Link active={position>=816&&position<1437} href="#projects">Projects</Nav.Link>
                        <Nav.Link active={position>=1632&&position<2500} href="#about">About me</Nav.Link>
                        <Nav.Link active={position>=2700} href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar
