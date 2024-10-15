import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#locations">Locations</Nav.Link>
          <Nav.Link href="#vehicles">Vehicles</Nav.Link>
          <NavDropdown title="More">
            <NavDropdown.Item>About Us</NavDropdown.Item>
            <NavDropdown.Item>Reviews</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>FAQs</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
