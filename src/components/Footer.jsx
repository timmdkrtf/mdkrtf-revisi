import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import logo1 from "../assets/img/mdkrtf-putih.png";
import { Container, Row, Col, Nav } from "react-bootstrap";

import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white py-4">
      <Container>
        <Row className="justify-content-between align-items-center" style={{fontFamily: "'League Spartan', sans-serif"}}>
          <Col md={6} className="py-4">
            <img src={logo1} className="w-25" style={{margin: "0 0 2px 0"}} alt="MDKRTF Logo" /><br/>
            <small>by Abdi Media Kreatif</small>
            <div className="mt-3">
              <div style={{padding: "5px 0", margin: "0 0 -2px 0"}}>
                <a href="https://maps.app.goo.gl/J3i1sZqJiwDY7s9v9" target="_blank" className="text-white text-decoration-none">Jl. Aria Surialaga No. 83, Kota Bogor 16119</a>
              </div>
              <div className="d-flex align-items-center" style={{padding: "5px 0"}}>
                <a href="tel:+622518632170" className="text-white text-decoration-none">
                  <BsFillTelephoneFill className="fs-5" style={{ margin:"-2px 15px 0 0" }} />
                  +62 251 8632 170
                </a>
              </div>
              <div className="d-flex align-items-center" style={{padding: "5px 0"}}>
                <a href="https://api.whatsapp.com/send?phone=6281211118457" className="text-white text-decoration-none">
                  <BsWhatsapp className="fs-5" style={{ margin:"-2px 15px 0 0" }} />
                  +62 812 1111 8457
                </a>
              </div>
              <div className="d-flex align-items-center" style={{padding: "5px 0"}}>
                <a href="mailto:contact@mdkrtf.co.id" className="text-white text-decoration-none">
                  <BsFillEnvelopeFill className="fs-5" style={{ margin:"-2px 15px 0 0" }} />
                  contact@mdkrtf.co.id
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Nav className="justify-content-center justify-content-md-end mb-3" style={{margin: "10px 0 0 0"}}>
              <Nav.Link href="https://www.facebook.com/profile.php?id=61560241922493&mibextid=LQQJ4d" className="text-white fs-3 me-1">
                <FaFacebook />
              </Nav.Link>
              <Nav.Link href="https://www.tiktok.com/@mdkrtf?_t=8oRlNGM2nNY&_r=1" className="text-white fs-3 me-1">
                <FaTiktok />
              </Nav.Link>
              <Nav.Link href="https://instagram.com/mdkrtf" className="text-white fs-3 me-1">
                <BsInstagram />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
          <hr />
            <p className="text-end">© 2025 PT Abdi Media Kreatif &middot; All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
