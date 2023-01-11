import React from "react";
import Link from "next/link";
import {
  Badge,
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Stack,
} from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Container className="d-block">
          <Row className="align-items-center">
            <Col xs={{ span: 4, order: 1 }} className="d-lg-none">
              <Navbar.Toggle aria-controls="main-nav" />
            </Col>

            <Col
              xs={{ span: 4, order: 2 }}
              lg={{ span: 3, order: 1 }}
              className="text-center text-lg-start"
            >
              <Navbar.Brand>Logo</Navbar.Brand>
            </Col>

            <Col lg={{ span: 6, order: 2 }} className="d-flex justify-between">
              <Link href="/">Home</Link>
              <Link href="/games">Games</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/use">User</Link>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
