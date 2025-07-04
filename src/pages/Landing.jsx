import Navbar from "../components/Navigation";
import Home from "../components/Home";
import Client from "../components/Client";
import Product from "../components/Product";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import SosmedPortfolio from "../components/SosmedPortfolio";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop"

export default function Landing(){
    return (
        <div style={{backgroundColor:"#F8F9FA"}}>
            <ScrollTop />
            <Navbar />
            <Home id={Home} />
            <Client />
            <Product id={Product} />
            <About id={About} />
            <Portfolio id={Portfolio} />
            <SosmedPortfolio />
            <Footer id={Footer} />
        </div>
    );
}