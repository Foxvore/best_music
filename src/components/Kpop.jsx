import React from 'react';
import { Container, Row, Col, Card, Image } from "react-bootstrap";

export const Kpop = () => {
  return (
    <div>
        <Container>
            <h1 className="text-white text-center title">3 BEST KPOP SONG</h1>
            <br />
            <Row>
                <Col md={4}>
                    <Card className="card">
                        {/* <Image src={} alt="Hug" className="images" /> */}
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Seventeen - Hug</Card.Title>
                                <Card.Text className="text-left">
                                    Song Description Here
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Last update 3 mins ago.
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="card">
                        {/* <Image src={} alt="Sour Grapes" className="images" /> */}
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Le Sserafim - Sour Grapes</Card.Title>
                                <Card.Text className="text-left">
                                    Song Description Here
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Last update 3 mins ago.
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="card">
                        {/* <Image src={} alt="Talk That Talk" className="images" /> */}
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                                <Card.Title className="text-center">Twice - Talk That Talk</Card.Title>
                                <Card.Text className="text-left">
                                    Song Description Here
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Last update 3 mins ago.
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Kpop;