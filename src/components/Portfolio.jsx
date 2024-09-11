import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { Modal, Button } from "react-bootstrap";
import { CiGlobe } from "react-icons/ci";
import p1 from "../assets/img/p1.jpg";
import p2 from "../assets/img/p2.jpg";
import p3 from "../assets/img/p3.jpg";
import p4 from "../assets/img/p4.jpg";
import p5 from "../assets/img/p5.jpg";
import p6 from "../assets/img/p6.jpg";
import p7 from "../assets/img/p7.jpg";
import p8 from "../assets/img/p8.jpg";
import p9 from "../assets/img/p9.jpg";
import p10 from "../assets/img/p10.jpg";
import p11 from "../assets/img/p11.jpg";
import p12 from "../assets/img/p12.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio() {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({ title: "", description: "" });
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
      childrenImg: [
        p7, p7, p7, p7
      ],
      title: "01 | Thamrin Meyer Foundation Berbagi",
      description: "Jejak kebaikan Thamrin Meyer Foundation dalam lensa mdkrtf.",
    },
    {
      mainTitle: "Thamrin Meyer Foundation Berbagi",
      img: p11,
      childrenImg: [
        p7, p7, p7, p7
      ],
      title: "01 | Thamrin Meyer Foundation Berbagi",
      description: "Jejak kebaikan Thamrin Meyer Foundation dalam lensa mdkrtf.",
    },
    {
      mainTitle: "Thamrin Meyer Foundation Berbagi",
      img: p1,
      childrenImg: [
        p7, p7, p7, p7
      ],
      title: "01 | Thamrin Meyer Foundation Berbagi",
      description: "Jejak kebaikan Thamrin Meyer Foundation dalam lensa mdkrtf.",
    },
    {
      mainTitle: "Trip Yogyakarta - Malang with Realtour",
      img: p7,
      childrenImg: [
        p7, p7, p7, p7
      ],
      title: "02 | Trip Yogyakarta - Malang with Realtour",
      description: "Lensa mdkrtf untuk trip Yogyakarta-Malang Bersama Realtour.  ",
    },
    {
      mainTitle: "Trip Yogyakarta - Malang with Realtour",
      img: p3,
      childrenImg: [
        p7, p7, p7, p7
      ],
      title: "02 | Trip Yogyakarta - Malang with Realtour",
      description: "Lensa mdkrtf untuk trip Yogyakarta-Malang Bersama Realtour.  ",
    },
    {
      mainTitle: "Jack n John Photo Cuts",
      img: p6,
      childrenImg: [
        p7, p7, p7, p7
      ],
      title: "03 | Jack n John Photo Cuts",
      description: "mdkrtf tidak hanya mengambil gambar, tetapi juga menangkap esensi dari sebuah ruang. ",
    },
    {
      mainTitle: "Jack n John Photo Cuts",
      img: p5,
      childrenImg: [
        p7, p7, p7, p7
      ],
      title: "03 | Jack n John Photo Cuts",
      description: "mdkrtf tidak hanya mengambil gambar, tetapi juga menangkap esensi dari sebuah ruang. ",
    },
    {
      mainTitle: "Capturing Year-End Memories",
      img: p4,
      childrenImg: [
        p7, p7, p7, p7
      ],
      title: "04 | Capturing Year-End Memories",
      description: " Kenangan Bersama Sahabat dalam Lensa mdkrtf. ",
    },
    {
      mainTitle: "Nourishing Horizons: 9ood Science 9reat goals, Nutricell Event",
      img: p2,
      childrenImg: [
        p7, p7, p7, p7
      ],
      title: "05 | Nourishing Horizons: 9ood Science 9reat goals, Nutricell Event",
      description: "Event Photo Coverage for Nutricell Event. ",
    },
    {
      mainTitle: "Sports Photography",
      img: p9,
      childrenImg: [
        p7, p7, p7, p7
      ],
      title: "06 | Sports Photography",
      description: "mdkrtf mengabadikan momen terbaik dalam sport event taekwondo dengan hasil yang berkualitas tinggi.",
    },
    {
      mainTitle: "Sports Photography",
      img: p8,
      childrenImg: [
        p7, p7, p7, p7
      ],
      title: "06 | Sports Photography",
      description: "mdkrtf mengabadikan momen terbaik dalam sport event taekwondo dengan hasil yang berkualitas tinggi.",
    },
    {
      mainTitle: "Sports Photography",
      img: p10,
      childrenImg: [
        p7, p7, p7, p7
      ],
      title: "06 | Sports Photography",
      description: "mdkrtf mengabadikan momen terbaik dalam sport event taekwondo dengan hasil yang berkualitas tinggi.",
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
      }
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
      }
    ],
  };

  const handleOpenModal = (slide) => {
    setModalData(slide);
    setOpenModal(true);
  };

  return (
    <section
      id="portfolio"
      className="bg-light text-dark min-vh-100 d-flex flex-column align-items-center justify-content-center p-3"
    >
      <div className="container">
      <div className="row w-100 py-5">
        <div className="col-12 col-md-4 col-sm-12">
          <h2 className="fw-bold" style={{fontFamily: "'League Spartan', sans-serif"}}>A Strong Brand Start Here</h2>
        </div>
        <div className="col-12 col-md-4 col-sm-12" style={{fontFamily: "'Open Sans', sans-serif"}}>
          <p>
            Achieve clear insights into your design
            investments—streamline your workflow effortlessly
          </p>
        </div>
        <div className="col-12 col-md-4 col-sm-12" style={{margin:"0 0 0 auto", textAlign:"end", alignSelf:"center", fontFamily: "'League Spartan', sans-serif"}}>
          <a href="https://instagram.com/mdkrtf" target="_blank"><button className="btn btn-dark" style={{padding:"12px 28px", borderRadius:"15px"}}>
            Booking Now
          </button></a>
        </div>
      
      </div>

      <Slider {...settingsFor} className="slider-for">
        {slides.map((slide, index) => (
          <div key={index} className="image-wrapper position-relative">
            <img src={slide.img} alt="slide" className="img-fluid rounded w-100" />
            <CiGlobe className="position-absolute top-0 start-0 m-4 bg-white p-2 rounded-circle" size={48} />
            <div className="text-white position-absolute">
              <h4 style={{margin:"-40px 0 0 0"}}>{slide.mainTitle}</h4>
              <div className="d-flex gap-4">
                <a href="https://instagram.com/mdkrtf" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-light fw-bold">
                    Contact Us
                  </button>
                </a>
                <button
                  onClick={() => handleOpenModal(slide)}
                  className="fw-bold button-blur"
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <Slider {...settingsNav} className="slider-nav mt-4 pt-3">
        {slides.map((slide, index) => (
          <div key={index} className="px-2">
            <img src={slide.img} alt="thumbnail" className="img-fluid rounded" />
          </div>
        ))}
      </Slider>

      {/* Modal Bootstrap */}
      <Modal show={openModal} onHide={() => setOpenModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalData.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </section>
  );
}

export default Portfolio;
