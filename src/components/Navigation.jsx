import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";

export const Navigation = () => {
  return (
    <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">BestMusic</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#kpop">KPop</Nav.Link>
                    <Nav.Link href="#jpop">JPop</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navigation;