import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import PacketDoc from "../components/port-pages/PacketDocumentation";

import React, { useEffect } from "react";

export default function PacketDocumentation(){

    useEffect(() => {
        // Buat elemen script untuk memasukkan Google Tag Manager
        const script = document.createElement("script");
        script.innerHTML = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=G-2BXBXXM0H5';f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','G-2BXBXXM0H5');
        `;
        document.head.appendChild(script);
    
        // Membersihkan script ketika komponen dilepas (unmount)
        return () => {
          document.head.removeChild(script);
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