import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";

export const Home = () => {
  return (
    <div className="intro">
        <Container className="text-white text-center d-flex justify-content-center align-item-center">
            <Row>
                <Col>
                    <div className="title">BEST SONG</div>
                    <div className="title">ON 2022</div>
                    <div className="homeButton mt-4 text-center">
                        <Button variant="light">See All List</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home;