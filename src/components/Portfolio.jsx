import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { CiGlobe } from "react-icons/ci";
import p1 from "../assets/img/p1.webp";
import p2 from "../assets/img/p2.webp";
import p3 from "../assets/img/p3.webp";
import p4 from "../assets/img/p4.webp";
import p5 from "../assets/img/p5.webp";
import p6 from "../assets/img/p6.webp";
import p7 from "../assets/img/p7.webp";
import p8 from "../assets/img/p8.webp";
import p9 from "../assets/img/p9.webp";
import p10 from "../assets/img/p10.webp";
import p11 from "../assets/img/p11.webp";
import p12 from "../assets/img/p12.webp";
import p13 from "../assets/img/p13.webp";
import p14 from "../assets/img/p14.webp";
import p15 from "../assets/img/p15.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio() {
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
          dots: false,
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
          <a href="https://api.whatsapp.com/send?phone=6281211118457" target="_blank"><button className="btn btn-dark" style={{padding:"12px 28px", borderRadius:"15px"}}>
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
              <h4 style={{margin:"-40px 0 0 0", fontFamily: "'League Spartan', sans-serif"}}>{slide.mainTitle}</h4>
              <div className="d-flex gap-4">
                <a href="https://api.whatsapp.com/send?phone=6281211118457" target="_blank" rel="noopener noreferrer">
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
            <img src={slide.img} alt="thumbnail" className="img-fluid rounded" />
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
}

export default Portfolio;
