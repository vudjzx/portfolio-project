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
                <a target="blank" href="https://pensive-wright-50ab95.netlify.app">
                    <img src={p1} alt="" />
                </a>
                <div className="project-description">
                    <h3>React movie app</h3>
                    <p>I love movies, but I often struggle with picking one. I built a friendly interface to view movies and series overview and information, using themoviedb.org API and material ui components.</p>
                </div>

                <a target="blank" href="https://boring-fermi-e4a4be.netlify.app">
                    <img src={p2} alt="" />
                </a>
                <div className="project-description">
                    <h3>Image finder</h3>
                    <p>This was the first project I actually practiced interacting with APIs. It's a simple image finder using the pixabay API. Made it only with HTML, CSS and Javascript</p>
                </div>

                <a target="blank" href="https://laughing-goodall-9c767e.netlify.app">
                    <img src={p3} alt="" />
                </a>
                <div className="project-description">
                    <h3>Weather app</h3>
                    <p>I wanted to get more into getting information from APIs and so I built a simple weather app with react, using materialize CSS.</p>
                </div>

                <a target="blank" href="https://epic-morse-e7404c.netlify.app">
                    <img src={p4} alt="" />
                </a>
                <div className="project-description">
                    <h3>Scheduler</h3>
                    <p>The first project I made entirely with React, HTML and CSS, to get a gasp of how to create components, how data flows thru them and the use of hooks.</p>
                </div>
            </div>
        </Container>

    )
}

export default Projects
