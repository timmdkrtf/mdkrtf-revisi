import Breadcrumb from 'react-bootstrap/Breadcrumb';

function PacketDocumentation(){
    return(
        <>
            <div className="packet-documentation">
                <div className="container">
                    <div className='row py-5 mt-5'>
                    <Breadcrumb className='pt-3' style={{fontFamily: "'Open Sans', sans-serif"}}>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/documentation">Documentation</Breadcrumb.Item>
                        <Breadcrumb.Item active>Packet</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className='title mt-4'>
                        <h2 style={{fontFamily: "'League Spartan', sans-serif"}}>Choose your documentation packet</h2>
                    </div>
                    <div className='packet my-5'>
                        <div className='card'>
                            <h4>Foto</h4>
                            <div className='harga'>
                                <p>625 ribu</p>
                                <b>500 <span>Ribu/jam</span></b>
                            </div>
                            <ul>
                                <li>1 Fotografer</li>
                                <li>10 Edited Foto</li>
                                <li>All File</li>
                            </ul>
                            <a href="https://api.whatsapp.com/send?phone=6281211118457&text=Halo%20mdkrtf%2C%20saya%20tertarik%20dengan%20layanan%20dokumentasi%20paket%20Fotografi" target="_blank">
                                <button>Contact Now</button>
                            </a>
                        </div>
                        <div className='card'>
                            <h4>Video</h4>
                            <div className='harga'>
                                <p>1.725 juta</p>
                                <b>1.5 <span>Juta/sesi</span></b>
                            </div>
                            <ul>
                                <li>1 Videografer</li>
                                <li>90 Video Edited</li>
                                <li>All File</li>
                            </ul>
                            <a href="https://api.whatsapp.com/send?phone=6281211118457&text=Halo%20mdkrtf%2C%20saya%20tertarik%20dengan%20layanan%20dokumentasi%20paket%20Videografi" target="_blank">
                                <button>Contact Now</button>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PacketDocumentation;