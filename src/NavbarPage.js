import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function NavbarPage() {
  return (
    <>
      <Container className="nav-container">
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">Hacker news Clone</Navbar.Brand>
        </Navbar>
      </Container>
    </>
  );
}
