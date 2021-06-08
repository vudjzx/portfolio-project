import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
const About = () => {
    return (
        <div id="about" className="d-flex justify-content-around align-items-center">
            <div className="about-me">
                <h1>A little about me...</h1>
                <p>about my ass</p>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">ReactJs</span>
                <span className="tag">ReactNative</span>
            </div>
        </div>

    )
}

export default About
