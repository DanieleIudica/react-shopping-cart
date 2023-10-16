import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CartFill, MoonFill, SunFill } from "react-bootstrap-icons";
import { useAtom } from "jotai";
import { darkModeAtom } from "../atom/atom";

export const MyNavbar = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary shadow-sm "
      sticky="top"
      data-bs-theme={darkMode ? "dark" : "light "}
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
        <div className="d-flex">
          <Button variant="outline-primary" className="rounded-circle cart-btn">
            <CartFill />
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center cart-btn-badge">
              3
            </div>
          </Button>
          <Button
            type="button"
            variant={darkMode ? "outline-light" : "dark"}
            className="d-flex align-items-center ms-4 rounded-circle "
            onClick={handleDarkMode}
          >
            {darkMode ? <SunFill /> : <MoonFill />}
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};
