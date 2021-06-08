import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ProjectModal from './ProjectModal';
const ProjectCard = ({title,tags,img,github,liveSite}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return (
      <>
        <Card
        className="text-center"
        style={{ width: '320px' }}
        onClick={handleShow}
        >
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title><h2>{title}</h2></Card.Title>
            <Card.Text>
                <div className="tags">
                    {tags.map(tag=><span className="tag">{tag}</span>)}
                </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <ProjectModal
        show={show}
        onHide={handleClose}
        title={title}
        github={github}
        liveSite={liveSite}
        />
      </>
    )
}

export default ProjectCard
