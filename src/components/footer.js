import React from 'react';
import { Container, Row, Col, Image, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="footer text-white py-4 d-flex flex-column">
            <Container>
                <Row className="align-items-start justify-content-center">
                    <Col md={3} className="d-flex align-items-center justify-content-center">
                        <Image src="/logo_brown.png" alt="Vine & Barrel Logo" width="250" className="me-2" />
                    </Col>

                    <Col md={3} className="mt-3 mt-md-0">
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Link to="/" className="footer-link">Home</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/contact-us" className="footer-link">Contact Us</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/sign-out" className="footer-link">Sign Out</Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    <Col md={3} className="mt-3 mt-md-0">
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="https://twitter.com/vine&barrel" className="footer-link">
                                    <i className="fab fa-twitter"></i> vine&barrel
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://facebook.com/vine&barrel" className="footer-link">
                                    <i className="fab fa-facebook"></i> vine&barrel
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://instagram.com/vine&barrel" className="footer-link">
                                    <i className="fab fa-instagram"></i> vine&barrel
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center mt-4">
                        <small className="text-white-50">© {new Date().getFullYear()} Vine & Barrel. All Rights Reserved.</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
