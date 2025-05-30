import Breadcrumb from "react-bootstrap/Breadcrumb";

import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { CiGlobe } from "react-icons/ci";
import p1 from "../../assets/img/p1.webp";
import p2 from "../../assets/img/p2.webp";
import p3 from "../../assets/img/p3.webp";
import p4 from "../../assets/img/p4.webp";
import p5 from "../../assets/img/p5.webp";
import p6 from "../../assets/img/p6.webp";
import p7 from "../../assets/img/p7.webp";
import p8 from "../../assets/img/p8.webp";
import p9 from "../../assets/img/p9.webp";
import p10 from "../../assets/img/p10.webp";
import p11 from "../../assets/img/p11.webp";
import p12 from "../../assets/img/p12.webp";
import p13 from "../../assets/img/p13.webp";
import p14 from "../../assets/img/p14.webp";
import p15 from "../../assets/img/p15.webp";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/img/logo-utama.png';

import CircleElemen from "../../assets/img/circle-elemen.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PacketDocumentation() {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(sliderForRef.current);
    setNav2(sliderNavRef.current);
  }, []);

  const slides = [
    {
      mainTitle: "Thamrin Meyer Foundation Berbagi",
      img: p12,
    },
    {
      mainTitle: "Thamrin Meyer Foundation Berbagi",
      img: p11,
    },
    {
      mainTitle: "Thamrin Meyer Foundation Berbagi",
      img: p1,
    },
    {
      mainTitle: "Trip Yogyakarta - Malang with Realtour",
      img: p7,
    },
    {
      mainTitle: "Trip Yogyakarta - Malang with Realtour",
      img: p3,
    },
    {
      mainTitle: "Jack n John Photo Cuts",
      img: p6,
    },
    {
      mainTitle: "Jack n John Photo Cuts",
      img: p5,
    },
    {
      mainTitle: "Capturing Year-End Memories",
      img: p4,
    },
    {
      mainTitle: "Nourishing Horizons: 9ood Science 9reat goals, Nutricell Event",
      img: p2,
    },
    {
      mainTitle: "Sports Photography",
      img: p9,
    },
    {
      mainTitle: "Sports Photography",
      img: p8,
    },
    {
      mainTitle: "Sports Photography",
      img: p10,
    },
    {
      mainTitle: "Tasteful Visual Delights",
      img: p13,
    },
    {
      mainTitle: "Tasteful Visual Delights",
      img: p14,
    },
    {
      mainTitle: "Tasteful Visual Delights",
      img: p15,
    },
  ];

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: true,
    asNavFor: nav2,
    ref: sliderForRef,
    responsive: [
      {
        breakpoint: 576, // Pada layar dengan lebar 768px atau kurang
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const settingsNav = {
    slidesToShow: 4.34,
    slidesToScroll: 1,
    asNavFor: nav1,
    centerMode: true,
    focusOnSelect: true,
    ref: sliderNavRef,
    responsive: [
      {
        breakpoint: 768, // Pada layar dengan lebar 768px atau kurang
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400, // Pada layar dengan lebar 768px atau kurang
        settings: {
          arrows: false,
          slidesToShow: 2.3,
        },
      },
    ],
  };

  return (
    <>
    <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary p-3">
      <Container>
        <Navbar.Brand href="#"><img src={logo} alt="" style={{width:"90px"}} /></Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-4">
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <div className="packet-documentation">
          <div className="circle-elemen">
            <img src={CircleElemen} alt="" />
          </div>
        <div className="container">
          <div className="row py-5 mt-5">
            <Breadcrumb
              className="pt-3"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/documentation">
                Documentation
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Packet</Breadcrumb.Item>
            </Breadcrumb>
            <div className="title mt-4">
              <h2 style={{ fontFamily: "'League Spartan', sans-serif" }}>
                Choose your documentation packet
              </h2>
            </div>
            <div className="packet my-3">
              <div className="card">
                <h4>Foto</h4>
                <div className="harga">
                  <p>625 ribu</p>
                  <b>
                    500 <span>Ribu/jam</span>
                  </b>
                </div>
                <ul>
                  <li>1 Fotografer</li>
                  <li>10 Edited Foto</li>
                  <li>All File</li>
                </ul>
                <a
                  href="https://api.whatsapp.com/send?phone=6281211118457&text=Halo%20mdkrtf%2C%20saya%20tertarik%20dengan%20layanan%20dokumentasi%20paket%20Fotografi"
                  target="_blank"
                >
                  <button>Contact Now</button>
                </a>
              </div>
              <div className="card">
                <h4>Video</h4>
                <div className="harga">
                  <p>1.725 juta</p>
                  <b>
                    1.5 <span>Juta/sesi</span>
                  </b>
                </div>
                <ul>
                  <li>1 Videografer</li>
                  <li>90 Video Edited</li>
                  <li>All File</li>
                </ul>
                <a
                  href="https://api.whatsapp.com/send?phone=6281211118457&text=Halo%20mdkrtf%2C%20saya%20tertarik%20dengan%20layanan%20dokumentasi%20paket%20Videografi"
                  target="_blank"
                >
                  <button>Contact Now</button>
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio">
            <div className="title">
                <h3>Our <span>Portfolio</span></h3>
            </div>
            <Slider {...settingsFor} className="slider-for">
                {slides.map((slide, index) => (
                <div key={index} className="image-wrapper position-relative">
                    <img
                    src={slide.img}
                    alt="slide"
                    className="img-fluid rounded w-100"
                    />
                    <CiGlobe
                    className="position-absolute top-0 start-0 m-4 bg-white p-2 rounded-circle"
                    size={48}
                    />
                    <div className="text-white position-absolute">
                    <h4 style={{ margin: "-40px 0 0 0" }}>{slide.mainTitle}</h4>
                    <div className="d-flex gap-4">
                        <a
                        href="https://api.whatsapp.com/send?phone=6281211118457"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <button className="btn btn-light fw-bold">
                            Contact Us
                        </button>
                        </a>
                        <a href="https://instagram.com/mdkrtf" target="_blank">
                          <button
                          className="fw-bold button-blur"
                          >
                          See More
                          </button>
                        </a>
                    </div>
                    </div>
                </div>
                ))}
            </Slider>

            <Slider {...settingsNav} className="slider-nav mt-4 pt-3">
                {slides.map((slide, index) => (
                <div key={index} className="px-2">
                    <img
                    src={slide.img}
                    alt="thumbnail"
                    className="img-fluid rounded"
                    />
                </div>
                ))}
            </Slider>
            </div>
        </div>
      </div>
    </>
  );
}

export default PacketDocumentation;
