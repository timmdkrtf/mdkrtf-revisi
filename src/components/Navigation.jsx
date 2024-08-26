import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo-utama.png';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary p-3">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" style={{width:"90px"}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Nav.Link className="fs-5 fw-normal" href="#home">Home</Nav.Link>
            <Nav.Link className="fs-5 fw-normal" href="#product">Product</Nav.Link>
            <Nav.Link className="fs-5 fw-normal" href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className="fs-5 fw-normal" href="#about">About</Nav.Link>
            <Nav.Link className="fs-5 fw-normal" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;