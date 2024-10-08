import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import PacketDoc from "../components/port-pages/PacketDocumentation";

export default function PacketDocumentation(){
    return (
        <div style={{backgroundColor:"#F8F9FA"}}>
            <ScrollTop />
            <PacketDoc />
            <Footer id={Footer} />
        </div>
    );
}