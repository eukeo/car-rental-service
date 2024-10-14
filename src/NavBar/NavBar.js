import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#vehicles">Vehicles</Nav.Link>
          <Nav.Link href="#information">Information</Nav.Link>
          <NavDropdown title="More">
            <NavDropdown.Item>About Us</NavDropdown.Item>
            <NavDropdown.Item>Reviews</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Terms of Service</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
