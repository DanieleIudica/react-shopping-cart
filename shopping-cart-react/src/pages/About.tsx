import { Container } from "react-bootstrap";

export const About = () => {
  return (
    <Container className="py-3">
      <h1 className="mb-3">About</h1>
      <p>
        Hello, I made this ShoppingCart Project with{" "}
        <span className="fw-bold">React</span>.
      </p>
      <p>
        I used <span className="fw-bold">Jotai</span> as store manager to save
        theme preferences, items inside the cart and share data between
        components, <span className="fw-bold">React-Router-Dom</span> for the
        navigation and <span className="fw-bold">Bootstrap</span> for the style
      </p>
    </Container>
  );
};
