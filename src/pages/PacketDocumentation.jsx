import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import PacketDoc from "../components/port-pages/PacketDocumentation";

import React, { useEffect } from "react";

export default function PacketDocumentation(){

    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtm.js?id=G-2BXBXXM0H5`;
        document.head.appendChild(script);
    
        const noscript = document.createElement("noscript");
        noscript.innerHTML = `
          <iframe src="https://www.googletagmanager.com/ns.html?id=G-2BXBXXM0H5"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
        document.body.appendChild(noscript);
    
        return () => {
          document.head.removeChild(script);
          document.body.removeChild(noscript);
        };
      }, []);

    return (
        <div style={{backgroundColor:"#F8F9FA"}}>
            <ScrollTop />
            <PacketDoc />
            <Footer id={Footer} />
        </div>
    );
}