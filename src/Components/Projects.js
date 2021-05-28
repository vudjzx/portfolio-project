import React from 'react'
import { Container } from 'react-bootstrap'
import p1 from './images/movie-pro.jpg';
import p2 from './images/img-pro.jpg';
import p3 from './images/weather-pro.jpg';
import p4 from './images/sched-pro.jpg';
const Projects = () => {
    return (
        <Container>
            <div id="projects">
                <h1 id="project-section-title">Projects</h1>
                
                <img src={p1} alt="" />
                <div className="project-description">
                    <h3>React movie app</h3>
                    <p>Movie information app developed using themoviedb.org API, shows information such as movie poster, description, release date. Sectioned by movies and series.
                    </p>
                    <ul className="technologies">
                        <li>HTML, CSS, Javascript</li>
                        <li>React native</li>
                        <li>Material ui components</li>
                    </ul>
                </div>

                <img src={p2} alt="" />
                <div className="project-description">
                    <h3>Image finder</h3>
                    <p>Project info here</p>
                </div>

                <img src={p3} alt="" />
                <div className="project-description">
                    <h3>Weather app</h3>
                    <p>Project info here</p>
                </div>

                <img src={p4} alt="" />
                <div className="project-description">
                    <h3>Scheduler</h3>
                    <p>Project info here</p>
                </div>
            </div>
        </Container>

    )
}

export default Projects
