import React from 'react'
import { Container } from 'react-bootstrap'
import pp from './images/perfil.jpg'
const Home = () => {
    return (
        <Container>
            <div id="home">
                <div className="imgBx">
                    <img src={pp} alt="" />
                </div>
                <div className="content">
                    <h1>Hi, my name is Víctor.</h1>
                    <p>I'm 21 years old, currently undergoing software engineering at the Universad Autónoma de Yucatán.
                        <br />
                        I love everything related to web development specially the <b>backend</b> part of it.
                        <br />
                        My goal is to continue learning and become a fullstack developer.
                    </p>
                </div>
            </div>
        </Container>

    )
}

export default Home
