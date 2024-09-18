import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import PacketDocumentation from "../components/port-pages/PacketDocumentation";

export default function Landing(){
    return (
        <div style={{backgroundColor:"#F8F9FA"}}>
            <ScrollTop />
            <PacketDocumentation />
            <Footer id={Footer} />
        </div>
    );
}