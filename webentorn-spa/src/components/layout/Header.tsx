import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" fixed="top" className="web-navbar">
      <Container>
        <Navbar.Brand href="#hero">Webentorn</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#services">Servicios</Nav.Link>
            <Nav.Link href="#process">Proceso</Nav.Link>
            <Nav.Link href="#use-cases">Casos de uso</Nav.Link>
            <Nav.Link href="#tech">Tecnologías</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
