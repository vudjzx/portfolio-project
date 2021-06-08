import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
const Home = () => {
    return (
        <div id="home" className="d-flex flex-column justify-content-center align-items-center">
        
                <Row>
                    <Col sm="auto" xs="auto" md="auto"><h1>Hi, I'm Víctor</h1></Col>
                </Row>
                <Row>
                    <Col sm="auto" xs="auto"><p>Web Developer</p></Col>
                </Row>
                <Row>
                    <Col sm="auto" xs="auto"><Button size="lg" href="#projects" variant="outline-dark">View work</Button></Col>
                    <Col sm="auto" xs="auto"><Button size="lg" href="#contact" variant="outline-dark">Contact me</Button></Col>
                    <Col sm="auto" xs="auto"><Button size="lg" href="#contact" variant="outline-dark">Resume</Button></Col>
                </Row>
                
            
        </div>

    )
}

export default Home
