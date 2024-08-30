import { FaCamera } from "react-icons/fa";
import { TbBrandCake } from "react-icons/tb";
import {useState, useEffect, useCallback} from "react";

function ReadMore({text}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxLength, setMaxLength] = useState(220);

  const updateMaxLength = useCallback(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 576) {
      setMaxLength(60);
    } else if (screenWidth < 768) {
      setMaxLength(170);
    } else if (screenWidth < 976) {
      setMaxLength(130);
    } else if (screenWidth < 1200) {
      setMaxLength(150);
    } else {
      setMaxLength(220);
    }
  }, []);

  useEffect(() => {
    updateMaxLength(); // Set initial maxLength
    window.addEventListener('resize', updateMaxLength); // Update on resize
    return () => window.removeEventListener('resize', updateMaxLength); // Cleanup
  }, [updateMaxLength]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const showText = isExpanded ? text : text.substring(0, maxLength) + "...";

  return (
    <div>
      <p className="mb-0">
        {showText}
        <button onClick={toggleReadMore} className="btn-link">
          {isExpanded ? "Tampilkan Lebih Sedikit" : "Baca Selengkapnya"}
        </button>
      </p>
    </div>
  );
}

function Product() {

    const styles = {
        card: {
          transition: "transform 0.3s ease-in-out",
          cursor: "pointer",
        },
        icon: {
          width: "220px",
          height: "220px",
        },
      };
      
      // CSS for hover scale effect
      const hoverScaleStyle = `
        .hover-scale:hover {
          transform: scale(1.05);
          background-color: #5E17EB;
          color: #ffffff !important;
        }
        .hover-scale:hover .btn-link {
          color: #ffffff; /* warna tombol saat card di-hover */
        } 

        .hover-scale:hover .small-text-center{
          color: #FFFFFF;
        }

        .hover-scale:hover .card-body.p-4 a {
          color: white !important;
        }

        .btn-link{
          cursor: pointer;
          border: none;
          color: blue;
          background-color: transparent;
          transition: 0.5s;
          padding: 0 !important;
        }

        .btn-link:hover{
         padding-left: 20px;
        }

        .small-text-center{
          color: black;
        }

        `;

      if (typeof document !== 'undefined') {
        const styleElement = document.createElement("style");
        styleElement.innerHTML = hoverScaleStyle;
        document.head.appendChild(styleElement);
      }
  return (
    <section id="product" className="bg-light min-vh-100">
      <div className="container py-5">
        <div className="text-left mb-5">
          <h4 className="fw-bold text-dark">Elevate Your Brand Image</h4>
          <p className="text-secondary fs-5">Our top products</p>
        </div>

        <div className="row justify-content-center">
          <div className="card-bet mb-4">
            <div className="card shadow-sm border-0 hover-scale" style={styles.card}>
              <div className="card-body p-4">
                <div className="d-flex justify-content-center mb-5 flex-wrap">
                  <div className="flex-shrink-0 mb-3">
                    <TbBrandCake className="img-icon" />
                  </div>
                  <div className="d-flex">
                  <h1 className=" hover:text-custom-white fs-3 pe-3 font-bold font-Leaguespartan ">
                    01
                  </h1>
                  <div className="ml-3">
                    <h5 className="card-title">Brand Identity</h5>
                      <ReadMore
                        text={`Perjalanan menuju kesuksesan brand dimulai dengan fondasi yang kuat. mdkrtf akan menjadi partner Anda dalam membangun identitas merek yang kokoh. Mulai dari riset mendalam terhadap target audiens, pengembangan konsep yang relevan, hingga visualisasi yang memukau, kami akan memastikan brand Anda memiliki jiwa dan karakter yang khas.`}
                      />
                  </div>
                  </div>
                </div>
                <div className="position-absolute w-100" style={{margin: "0 0 0 -20px", padding:"0 20px 0 20px", bottom:"15px"}}>
                  <a href="#" style={{color:"black", textDecoration:"none"}}>
                      <div className="bottom d-flex justify-content-between align-items-center">
                        <p className="mb-0 font-weight-bold">100%</p>
                        <a href="#" className="text-decoration-none small-text-center px-auto">Find Out More</a>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          style={{width:"30px"}}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card-bet mb-4">
            <div className="card shadow-sm border-0 hover-scale" style={styles.card}>
              <div className="card-body p-4">
                <div className="d-flex justify-content-center mb-5 flex-wrap">
                  <div className="flex-shrink-0 mb-3">
                    <FaCamera className="img-icon" />
                  </div>
                  <div className="d-flex">
                  <h1 className=" hover:text-custom-white fs-3 pe-3 font-bold font-Leaguespartan ">
                    02
                  </h1>
                  <div className="ml-3">
                    <h5 className="card-title">Documentation</h5>
                    <ReadMore
                        text={`Dengan lensa yang tajam, kami menangkap setiap detail penting, emosi, dan atmosfer dalam setiap moment. Hasilnya adalah dokumentasi berkualitas tinggi yang tidak hanya indah secara visual, tetapi juga memiliki nilai historis dan emosional yang abadi.`}
                    />
                  </div>
                  </div>
                </div>
                <div className="position-absolute w-100" style={{margin: "0 0 0 -20px", padding:"0 20px", bottom:"15px"}}>
                  <a href="/documentation" style={{color:"black", textDecoration:"none"}}>
                    <div className="bottom d-flex justify-content-between align-items-center">
                      <p className="mb-0 font-weight-bold">100%</p>
                      <a href="/documentation" className="text-decoration-none small-text-center px-auto">Find Out More</a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{width:"30px"}}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Product;
