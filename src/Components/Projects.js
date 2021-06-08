import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard';
import p1 from './images/movie-pro.jpg';
import p2 from './images/img-pro.jpg';
import p3 from './images/weather-pro.jpg';
import p4 from './images/sched-pro.jpg';
const Projects = () => {
    const projects = [
        {
            title:"React Movie App",
            tags: ["HTML","CSS","ReactJS", "Material UI","API"],
            img: p1,
            github: `https://github.com/vudjzx/react-movie-app`,
            liveSite: `https://pensive-wright-50ab95.netlify.app/`,
        },
        {
            title:"Image Finder",
            tags:["HTML","CSS","JavaScript","API"],
            img: p2,
            github: `https://github.com/vudjzx/image-finder`,
            liveSite: `https://boring-fermi-e4a4be.netlify.app/`,
        },
        {
            title: "React Weather App",
            tags:["HTML","Materialize CSS","ReactJS","API"],
            img: p3,
            github: `https://github.com/vudjzx/weather_app`,
            liveSite: `https://laughing-goodall-9c767e.netlify.app`,
        },
        {
            title: "React Scheduler",
            tags: ["HTML","CSS","ReactJS","Local storage"],
            img: p4,
            github: `https://github.com/vudjzx/scheduler`,
            liveSite: `https://epic-morse-e7404c.netlify.app`
        }
    ]
    return (
        <div id="projects" className="d-flex justify-content-center align-items-center">
            <Row xxl="4" xl="4" lg="2">
                {projects.map(project=>
                        <Col>
                            <ProjectCard
                            title={project.title}
                            tags={project.tags}
                            img={project.img}
                            github={project.github}
                            liveSite={project.liveSite}
                            />
                        </Col>
                    )}
            </Row>
        </div>


    )
}

export default Projects
