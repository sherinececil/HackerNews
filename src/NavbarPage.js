import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function NavbarPage() {
  return (
    
      <Container className="navbar navbar-dark bg-dark">
        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#">Hacker news Clone</Navbar.Brand>
        </Navbar>
      </Container>
    
  );
}
