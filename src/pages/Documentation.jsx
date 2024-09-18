import PagesDocumentation from "../components/port-pages/Documentation";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop"

export default function Landing(){
    return (
        <div style={{backgroundColor:"#F8F9FA"}}>
            <ScrollTop />
            <PagesDocumentation />
            <Footer id={Footer} />
        </div>
    );
}