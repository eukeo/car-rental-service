import "./NavBar.css";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container className="navbar">
        <Nav.Link href="#home" className="header">
          Carma
        </Nav.Link>
        <ul>
          <Nav className="me-auto">
            <Nav.Link href="#vehicles">Vehicles</Nav.Link>
            <Nav.Link href="#reviews">Reviews</Nav.Link>
            <Nav.Link href="#faqs">FAQs</Nav.Link>
          </Nav>
        </ul>
      </Container>
    </Navbar>
  );
};

export default Navigation;
