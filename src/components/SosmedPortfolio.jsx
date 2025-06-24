import HalakahSosmed from '../assets/sosmed-portofolio/sosmed-halakah.png';
import ApostrofSosmed from '../assets/sosmed-portofolio/sosmed-apostrof.png';
import KronikaSosmed from '../assets/sosmed-portofolio/sosmed-kronika.png';
import NyamaninSosmed from '../assets/sosmed-portofolio/sosmed-nyamanin.png';
import RealtourSosmed from '../assets/sosmed-portofolio/sosmed-realtour.png';
import UstazukiSosmed from '../assets/sosmed-portofolio/sosmed-ustazuki.png';
import TmfSosmed from '../assets/sosmed-portofolio/sosmed-tmf.png';
import AypSosmed from '../assets/sosmed-portofolio/sosmed-aypfirm.png';
import HabatourSosmed from '../assets/sosmed-portofolio/sosmed-habatour.png';


export default function SosmedPortfolio() {
    return(
        <section className="sosmed-portfolio">
            <div className="container">
                <div className="row flex-column">
                    <div className="col">
                        <h2><span className='sc'>Social Media</span> <span className='port'>Portfolio</span></h2>
                    </div>
                    <div className="col content d-flex justify-content-center align-items-center flex-wrap">
                        <a className="content-image" href="https://www.instagram.com/halakah.co.id/" target="_blank">
                            <img src={HalakahSosmed} alt="Halakah" />
                            <p>Halakah</p>
                        </a>
                        <a className="content-image" href="https://www.instagram.com/apostrof.co.id/" target="_blank">
                            <img src={ApostrofSosmed} alt="Apostrof" />
                            <p>Apostrof</p>
                        </a>
                        <a className="content-image" href="https://www.instagram.com/kronika.co.id/" target="_blank">
                            <img src={KronikaSosmed} alt="Kronika" />
                            <p>Kronika</p>
                        </a>
                        <a className="content-image" href="https://www.instagram.com/nyamanin.co.id/" target="_blank">
                            <img src={NyamaninSosmed} alt="Nyamanin" />
                            <p>Nyamanin</p>
                        </a>
                        <a className="content-image" href="https://www.instagram.com/realtour.co.id/" target="_blank">
                            <img src={RealtourSosmed} alt="Realtour" />
                            <p>Realtour</p>
                        </a>
                        <a className="content-image" href="https://www.instagram.com/ustazuki.co.id/" target="_blank">
                            <img src={UstazukiSosmed} alt="Ustazuki" />
                            <p>Ustazuki</p>
                        </a>
                        <a className="content-image" href="https://www.instagram.com/tmfoundation.or.id/" target="_blank">
                            <img src={TmfSosmed} alt="Tmfoundation" />
                            <p>Tmfoundation</p>
                        </a>
                        <a className="content-image" href="https://www.instagram.com/habatour.co.id/" target="_blank">
                            <img src={HabatourSosmed} alt="Habatour" />
                            <p>Habatour</p>
                        </a>
                        <a className="content-image" href="https://www.instagram.com/aypfirm.id/" target="_blank">
                            <img src={AypSosmed} alt="Aypfirm" />
                            <p>Aypfirm</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}