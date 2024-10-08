import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import PacketDocumentation from "../components/port-pages/PacketDocumentation";
import { Helmet } from "react-helmet";

export default function Landing(){
    return (
        <div style={{backgroundColor:"#F8F9FA"}}>
            <Helmet>
                <script>
                {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','G-2BXBXXM0H5');
                `}
                </script>
            </Helmet>
            <ScrollTop />
            <PacketDocumentation />
            <Footer id={Footer} />
        </div>
    );
}