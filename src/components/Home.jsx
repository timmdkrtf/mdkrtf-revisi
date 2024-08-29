import gsap from "gsap";
import { useEffect } from "react";
// import logo from "../assets/img/logo-utama.png";

export default function Home() {
  const aboutText1 =
    "Di dunia bisnis yang dinamis, mdkrtf mengedepankan kreativitas untuk mengangkat brand ke tingkat yang lebih tinggi.";

//   const aboutText2 =
//     "mdkrtf adalah tim kreatif yang penuh semangat, didorong oleh visi bersama untuk menciptakan identitas merek yang menarik.";
  const sideText =
    "CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING CREATIVE DESIGN CONCEPT CREATIVE DESIGN CREATIVE VISUAL IDENTITY CREATIVE BRANDING DESIGN INTERACTIVE CREATIVE CREATIVE DESIGN INNOVATION CREATIVE IDENTITY VISUAL BRANDING INTERACTIVE CREATIVE CONCEPT CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING DESI INTERACTIVE DESIGN CONCEPT CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING INTERACTIVE DESIGN CONCEPT CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING INTERACTIVE DESIGN CONCEPT CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING CREATIVE DESIGN CONCEPT CREATIVE DESIGN CREATIVE VISUAL IDENTITY CREATIVE BRANDING DESIGN INTERACTIVE CREATIVE CREATIVE DESIGN INNOVATION CREATIVE IDENTITY VISUAL BRANDING INTERACTIVE CREATIVE CONCEPT CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING DESI INTERACTIVE DESIGN CONCEPT CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING INTERACTIVE DESIGN CONCEPT CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING INTERACTIVE DESIGN CONCEPT CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING CREATIVE DESIGN CONCEPT CREATIVE DESIGN CREATIVE VISUAL IDENTITY CREATIVE BRANDING DESIGN INTERACTIVE CREATIVE CREATIVE DESIGN INNOVATION CREATIVE IDENTITY VISUAL BRANDING INTERACTIVE CREATIVE CONCEPT CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING DESI INTERACTIVE DESIGN CONCEPT CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING INTERACTIVE DESIGN CONCEPT CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING INTERACTIVE DESIGN CONCEPT CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING INTERACTIVE DESIGN CONCEPT CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING INTERACTIVE DESIGN CONCEPT CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING INTERACTIVE DESIGN CONCEPT CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING INTERACTIVE DESIGN CONCEPT CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING INTERACTIVE DESIGN CONCEPT CREATIVE DESIGN INNOVATION VISUAL IDENTITY BRANDING INTERACTIVE DESIGN CONCEPT";

  const wordMarker = ["mdkrtf", "kreativitas", "brand", "CREATIVE"];

  const splitWordsWithSpace = (text) => {
    return text.split(" ").map((word, index) => {
      if (wordMarker.includes(word)) {
        return (
          <div key={index} className="overflow-hidden">
            <div className="splitWord fw-semibold fs-1 bg-light" style={color.textPurple}>
              {word}
            </div>
          </div>
        );
      }

      return (
        <div key={index} className="overflow-hidden">
          <div className="splitWord fw-semibold fs-1">{word}</div>
        </div>
      );
    });
  };

  const color = {
   textPurple: {
      color: '#5E17EB',
    },
    textWhite:{
        color: "#FFFFFF"
    },
    bgHighlight:{
        backgroundColor: "#000000"
    }
  };

  const splitSide = (text) => {
    return text.split(" ").map((word, index) => {
      const isHighlighted = wordMarker.includes(word);

      return (
        <div
          key={index}
          className={`m-1 px-1 fw-bold`}
          style={isHighlighted ? {...color.textPurple, ...color.bgHighlight} : {...color.textWhite, ...color.bgHighlight}}
        >
          {word}
        </div>
      );
    });
  };

  useEffect(() => {
    let tl = gsap.timeline();

    tl.fromTo(
      ".fill",
      {
        translateY: 20,
      },
      {
        translateY: 0,
        delay: 0.2,
        duration: 2,
        height: 0,
        ease: "none",
        xPercent: -50,
      }
    );

    gsap.fromTo(".splitWord", {
      y: 100,
    },
    {
      duration: 2,
      y: 0,
      yoyo: true,
      stagger: 0.1,
      ease: "none",
    });

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.to(".sideWrap", {
        duration: 25, // Memperpanjang durasi untuk animasi yang lebih lambat
        y: -1000,    // Mengatur pergerakan di sumbu Y lebih jauh
        x: 1000,    // Mengatur pergerakan di sumbu X lebih jauh
        repeat: -1,
        ease: "none",
      });
    });

    mm.add("(max-width: 1024px)", () => {
      gsap.to(".sideWrap", {
        duration: 25, // Sama seperti di atas, tapi bisa disesuaikan
        y: -1000,    // Sesuaikan jarak pada perangkat mobile
        x: 1000,    // Sesuaikan jarak pada perangkat mobile
        repeat: -1,
        ease: "none",
      });
    });
  }, []);

  return (
    <section id="hero" className="position-relative overflow-hidden" style={{ height: "630px" }}>
      <div className="sideWrap position-absolute text-dark font-weight-bold d-flex flex-wrap">
        {splitSide(sideText)}
      </div>
      <div className=" mt-5">
        <div className="wrapper overflow-hidden position-relative">
          {/* <img src={logo} className="position-relative h-10 w-100" alt="" /> */}
          <div className="fill bg-dark position-absolute" style={{ top: 0, bottom: 0, left: 0, right: 0 }}></div>
        </div>
        <div className="container">
        <div className="wrapper font-weight-medium display-4">
          <div className="d-flex gap-1 flex-wrap">
            {splitWordsWithSpace(aboutText1)}
          </div>
          <br />
        </div>
        </div>
      </div>
    </section>
  );
}
