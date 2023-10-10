import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CartFill } from "react-bootstrap-icons";

export const MyNavbar = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary shadow-sm mb-3"
      sticky="top"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="underline">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
              Store
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-primary" className="rounded-circle cart-btn">
          <CartFill />
          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center cart-btn-badge">
            3
          </div>
        </Button>
      </Container>
    </Navbar>
  );
};
