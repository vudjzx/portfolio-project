import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ProjectModal = ({show, onHide,title,github,liveSite}) => {
    return (
        <>  
            <Modal
            show={show}
            onHide={onHide}
            size="lg"
            >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button
                size="lg"
                variant="outline-dark"
                onClick={()=> window.open(github, "_blank")}
                >View code</Button>
                <Button
                size="lg"
                variant="outline-dark"
                onClick={()=> window.open(liveSite, "_blank")}
                >View live</Button>
            </Modal.Footer>
            </Modal>
        </>        
    )
}

export default ProjectModal
