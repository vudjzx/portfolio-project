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
            description: `
            This one is my favorite, I already had a clear idea on what I wanted to build and all the tools necessary to build it. The first thing was to find a movie information API and I used themoviedb.org to help me get all the information I wanted to display to the user. You can look at the trending movies and series, you can also browse thru movies/series and filter them based on genre so you get a more accurate recommendation, in addition, you can do a keyword search to find movies or series related to the search text.
            For this project I used the following technologies: HTML, CSS, JavaScript, React/React hooks and Material UI components.
            `
        },
        {
            title:"Image Finder",
            tags:["HTML","CSS","JavaScript","API"],
            img: p2,
            github: `https://github.com/vudjzx/image-finder`,
            liveSite: `https://boring-fermi-e4a4be.netlify.app/`,
            description:`I built this project before starting to learn react, I wanted to get a glimpse of how to build an API consuming app with vanilla JavaScript to improve my skills and map that knowledge to learning react.
            A simple image finder was the best I could come up with to practice API calls and JSON data management.
            `
        },
        {
            title: "React Weather App",
            tags:["HTML","Materialize CSS","ReactJS","API"],
            img: p3,
            github: `https://github.com/vudjzx/weather_app`,
            liveSite: `https://laughing-goodall-9c767e.netlify.app`,
            description:`The first react app I built that consumed an API and displayed data from it. It’s a very simple concept but turned out to be quite a challenge since I had no idea how to make calls to an API from a component, however, it clarified a lot of concepts in react that I had doubts about and led me to want to create a more complex API consuming app (the react movie app).`
        },
        {
            title: "React Scheduler",
            tags: ["HTML","CSS","ReactJS","Local storage"],
            img: p4,
            github: `https://github.com/vudjzx/scheduler`,
            liveSite: `https://epic-morse-e7404c.netlify.app`,
            description:`This is the first react project I made. It took me a couple of days and is a very simple one but it helped me understand how to create components, how data flows thru them and how to display that data in different ways. It was also a very good tool to learn the use of hooks (useEffect and useState), to get data from a form (from a component in general), validate data and manage the local storage.`
        }
    ]
    return (
        <div id="projects" className="d-flex flex-column justify-content-center align-items-center">
            <Row>
                <h1>Projects</h1>
            </Row>
            <Row xxl="4" xl="4" lg="2">
                {projects.map((project,index)=>
                        <Col key={index}>
                            <ProjectCard
                            key={index}
                            title={project.title}
                            tags={project.tags}
                            img={project.img}
                            github={project.github}
                            liveSite={project.liveSite}
                            description={project.description}
                            />
                        </Col>
                    )}
            </Row>
        </div>


    )
}

export default Projects
