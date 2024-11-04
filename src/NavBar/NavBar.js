import "./NavBar.css";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <h1 className="header">Carma</h1>
      <h5 className="quote">Good Rides, Good Carma.</h5>
      <Container className="navbar">
        <ul>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#locations">Locations</Nav.Link>
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
