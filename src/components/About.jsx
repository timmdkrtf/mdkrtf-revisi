import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const About = () => {
  const [counterState, setCounterState] = useState(false);

  return (
    <section id="about" className="bg-black text-white py-4 px-5" style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}> 
    <div className="container">
      <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
        <div className="w-100 pt-3 d-flex align-items-center justify-content-between">
          <div className="py-3"> 
            <h1 className="display-5 fw-normal mb-2"><span style={{color:"#5E17EB", fontFamily: "'League Spartan', sans-serif"}}>Creative</span> Powerhouse</h1>
            <h1 className="display-5 fw-normal mb-2" style={{fontFamily: "'League Spartan', sans-serif"}}>Where imagination meets innovation.</h1>
            <div className="fw-light py-4" style={{fontFamily: "'Open Sans', sans-serif"}}>
              Percayakan kebutuhan brand identity dan dokumentasi anda kepada
              kami <br />
              dan lihat bagaimana kami dapat membantu mengubah impian anda
              menjadi kenyataan.
            </div>
          </div>
        </div>
        <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
          <div className="d-flex justify-content-between align-items-center gap-5 text-center">
            <div>
              <h2 className="display-3 fw-bold" style={{color:"#5E17EB", fontFamily: "'League Spartan', sans-serif"}}>
                {counterState && <CountUp start={0} end={13} duration={2.75} />}+
              </h2>
              <p className="text-secondary" style={{fontFamily: "'Open Sans', sans-serif"}}>Projects</p>
            </div>
            <div>
              <h2 className="display-3 fw-bold" style={{color:"#5E17EB", fontFamily: "'League Spartan', sans-serif"}}>
                {counterState && <CountUp start={0} end={20} duration={2.75} />}+
              </h2>
              <p className="text-secondary" style={{fontFamily: "'Open Sans', sans-serif"}}>Clients</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
      </div>
    </section>
  );
};

export default About;
