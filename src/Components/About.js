import React from 'react'
import perfil from './images/perfil.jpg';
const About = () => {
    return (
        <div id="about" className="d-flex justify-content-center align-items-center">
            <div className="about-me">
                <div className="pp-container d-flex justify-content-center">
                    <img src={perfil} alt=""/>
                </div>
                <h1 className="text-center">About me</h1>
                <p className="text-center">My name is Victor, I'm currently a college student undergoing software engineering at the Autonomous University of Yucatán.
I enjoy learning about web developement in my free time as I'm trying to become a fullstack developer.
I'm looking for an opportunity to grow both individually and professionally so feel free to reach out via any links down below.</p>
                <h1 className="text-center">Skills</h1>
                <div className="skills d-flex flex-row justify-content-center align-items-center text-center">
                    <span className="tag">HTML</span>
                    <span className="tag">CSS</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">React</span>
                    <span className="tag">Github</span>
                </div>
            </div>
        </div>

    )
}

export default About
