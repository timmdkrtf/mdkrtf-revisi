import { useState, useEffect } from 'react'; 
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import logo from '../../assets/img/logo-utama.png';

import Wedding from "../../assets/icon-website-page/invitation2.png";
import LandingPage from "../../assets/icon-website-page/landing-page2.png";
import WebDesign from "../../assets/icon-website-page/web-design2.png";
import WebSystem from "../../assets/icon-website-page/website-system2.png";

import Cr1 from "../../assets/img/website-design2.png";
import Cr2 from "../../assets/img/website-landing-page2.png";
import Cr3 from "../../assets/img/website-system-db2.png";
import Cr4 from "../../assets/img/wedding2.png";

function PacketWebsite() {
    const [activePortfolio, setActivePortfolio] = useState(''); 

    const handleCardClick = (portfolioId) => {
        setActivePortfolio(portfolioId);
    };

    useEffect(() => {
        if (activePortfolio) {
            document.getElementById(`portfolio-${activePortfolio}`).scrollIntoView({ behavior: "smooth" });
        }
    }, [activePortfolio]);

    return (
        <div className="packet-website">
            <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary p-3">
                <Container>
                    <Navbar.Brand href="#"><img src={logo} alt="" style={{width:"90px"}} /></Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto gap-4">
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className='container-content'>
                <Breadcrumb
                    className="pt-3"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/">Website</Breadcrumb.Item>
                    <Breadcrumb.Item active>Packet</Breadcrumb.Item>
                </Breadcrumb>

                <div className='content'>
                    <div className='title'>
                        <h1>Apa yang kamu <span>Butuhkan?</span></h1>
                    </div>
                    <div className='card-content'>
                        <div className='card desain' onClick={() => handleCardClick('desain')}>
                            <img src={WebDesign} alt="" />
                            <h5>Desain Website</h5>
                            <p>Pembuatan Desain Website yang sesuai dengan permintaan klien</p>
                        </div>
                        <div className='card landing' onClick={() => handleCardClick('landing')}>
                            <img src={LandingPage} alt="" />
                            <h5>Website Landing Page</h5>
                            <p>Pembuatan website landing page sesuai permintaan dan kebutuhan</p>
                        </div>
                        <div className='card sistem' onClick={() => handleCardClick('web-system')}>
                            <img src={WebSystem} alt="" />
                            <h5>Website Sistem</h5>
                            <p>Pembuatan website seperti website LMS, Ecommerce, dan sejenisnya</p>
                        </div>
                        <div className='card undangan' onClick={() => handleCardClick('wedding')}>
                            <img src={Wedding} alt="" />
                            <h5>Website Undangan Digital</h5>
                            <p>Pembuatan website undangan digital cepat</p>
                        </div>
                    </div>
                </div>

                <div className='portfolio' id="portfolio">
                    <div className='portfolio-flex'>
                        <div className='content desain' id="portfolio-desain" style={{ display: activePortfolio === 'desain' ? 'flex' : 'none' }}>
                            <div className='text-left'>
                                <small>Desain Website</small>
                                <h1>Jadikan websitemu sesuai dengan keinginanmu</h1>
                                <p>Kamu dapat menyesuaikan desain yang kamu inginkan untuk ada di web kamu. Kamu akan mendapatkan desain yang menarik, responsive, dan sesuai</p>
                                <a href="https://api.whatsapp.com/send?phone=6281211118457&text=Halo%20Mdkrtf%2C%20saya%20tertarik%20dengan%20paket%20desain%20Website" target="_blank" style={{textDecoration: "none", color:"white"}}><button>Hubungi Sekarang!</button></a>
                            </div>
                            <div className='img-right'>
                                <img src={Cr1} alt="" />
                            </div>
                        </div>
                        <div className='content landing-page' id="portfolio-landing" style={{ display: activePortfolio === 'landing' ? 'flex' : 'none' }}>
                            <div className='text-left'>
                                <small>Website Landing Page</small>
                                <h1>Bangun website simple untuk kebutuhanmu</h1>
                                <p>Kamu akan mendapatkan website landing page yang akan menyesuaikan dengan kebutuhanmu. Landing page ini bisa untuk portfolio, bisnis kamu, company profile, dan masih banyak lagi</p>
                                <a href="https://api.whatsapp.com/send?phone=6281211118457&text=Halo%20Mdkrtf%2C%20saya%20tertarik%20dengan%20paket%20website%20landing%20Page" target="_blank" style={{textDecoration: "none", color:"white"}}><button>Hubungi Sekarang!</button></a>
                            </div>
                            <div className='img-right'>
                                <img src={Cr2} alt="" />
                            </div>
                        </div>
                        <div className='content web-system' id="portfolio-web-system" style={{ display: activePortfolio === 'web-system' ? 'flex' : 'none' }}>
                            <div className='text-left'>
                                <small>Website Sistem</small>
                                <h1>Buat bisnismu dapat diakses secara online melalui website</h1>
                                <p>Kamu akan mendapatkan website dengan fitur dan penggunaan yang sesuai dengan kebutuhanmu. Kami akan bersedia membantu dalam pengembangan, instruksi, serta pemeliharaan website.</p>
                                <a href="https://api.whatsapp.com/send?phone=6281211118457&text=Halo%20Mdkrtf%2C%20saya%20tertarik%20dengan%20paket%20website%20sistem" target="_blank" style={{textDecoration: "none", color:"white"}}><button>Hubungi Sekarang!</button></a>
                            </div>
                            <div className='img-right'>
                                <img src={Cr3} alt="" />
                            </div>
                        </div>
                        <div className='content pernikahan' id="portfolio-wedding" style={{ display: activePortfolio === 'wedding' ? 'flex' : 'none' }}>
                            <div className='text-left'>
                                <small>Website Undangan Digital</small>
                                <h1>Buat undangan pernikahanmu lebih fleksibel dengan website</h1>
                                <p>Pernikahan kamu akan lebih modern dan kekinian dengan website pernikahan. Hanya dalam waktu kurang dari 2 hari saja lohh.</p>
                                <a href="https://api.whatsapp.com/send?phone=6281211118457&text=Halo%20Mdkrtf%2C%20saya%20tertarik%20dengan%20paket%20website%20undangan%20pernikahan" target="_blank" style={{textDecoration: "none", color:"white"}}><button>Hubungi Sekarang!</button></a>
                            </div>
                            <div className='img-right'>
                                <img src={Cr4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default PacketWebsite;
