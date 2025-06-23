import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import apostrof from "../assets/img/apostrof.png";
import bahama from "../assets/img/bahama.png";
import habatour from "../assets/img/habatour.png";
import halakah from "../assets/img/halakah.png";
import kronika from "../assets/img/kronika.png";
import nyamanin from "../assets/img/nyamanin.png";
import realtour from "../assets/img/realtour.png";
import AYP from "../assets/img/1. AYP Logo Primary (P).png";
import TMC from "../assets/img/1. TMC Logo Primary (P).png";
import TMF from "../assets/img/1. TMF Logo Primary (P).png";
import aka from "../assets/img/AKA.png";
import ask from "../assets/img/ASK.png";
import skina from "../assets/img/logo skina.png";
import cimandala from "../assets/img/Logo_SDN_Cimandala_03.png";
import kittun from "../assets/img/kittun.png";
import warungHagia from "../assets/img/warung-hagia.png";
import kopiJalpin from "../assets/img/kopi-jalpin.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import {useRef, useEffect} from 'react';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';

const Client = () => {
    SwiperCore.use([Autoplay, FreeMode, Navigation]);

    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;
        
        if (swiperInstance) {
            const nextButton = document.querySelector('.swiper-button-next');
            const prevButton = document.querySelector('.swiper-button-prev');

            const stopAutoplay = () => {
                swiperInstance.autoplay.stop();
                swiperInstance.autoplay.start(); // Mulai ulang autoplay setelah interaksi
            };

            nextButton.addEventListener('click', stopAutoplay);
            prevButton.addEventListener('click', stopAutoplay);

            // Cleanup
            return () => {
                nextButton.removeEventListener('click', stopAutoplay);
                prevButton.removeEventListener('click', stopAutoplay);
            };
        }
    }, []);
    return (
        <section className="partners max-w-2xl mx-auto py-5 my-5">
            <h1 className="text-3xl text-center font-bold" style={{fontFamily: "'League Spartan', sans-serif"}}>Our Clients</h1>
            <Swiper
                loop={true}
                freeMode={true}
                navigation={true}
                autoplay={{
                    delay: 800,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={1000}
                slidesPerView="3"
                spaceBetween={42}
                breakpoints={{
                    280: {
                        slidesPerView: 2,
                        centeredSlides: true,

                    },
                    380: {
                        slidesPerView: 2,
                        spaceBetween: 10, // Sesuaikan jarak antara slide jika diperlukan
                    },
                    576: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                  }}
                className='items-center justify-center'>
                <SwiperSlide className="apostrof"><img src={apostrof} alt="apostrof" /></SwiperSlide>
                <SwiperSlide className="apostrof"><img src={cimandala} alt="cimandala" /></SwiperSlide>
                <SwiperSlide className="bahana"><img src={bahama} alt="bahana" /></SwiperSlide>
                <SwiperSlide className="habatour"><img src={habatour} alt="habatour" /></SwiperSlide>
                <SwiperSlide className="habatour"><img src={skina} alt="skina" /></SwiperSlide>
                <SwiperSlide className="halakah"><img src={halakah} alt="halakah" /></SwiperSlide>
                <SwiperSlide className="kronika"><img src={kronika} alt="kronika" /></SwiperSlide>
                <SwiperSlide className="nyamanin"><img src={nyamanin} alt="nyamanin" /></SwiperSlide>
                <SwiperSlide className="realtour"><img src={realtour} alt="realtour" /></SwiperSlide>
                <SwiperSlide className="AYP"><img src={AYP} alt="AYP" /></SwiperSlide>
                <SwiperSlide className="apostrof"><img src={kopiJalpin} alt="kopi jalan pintas" /></SwiperSlide>
                <SwiperSlide className="ask"><img src={ask} alt="ask" /></SwiperSlide>
                <SwiperSlide className="habatour"><img src={kittun} alt="kittun" /></SwiperSlide>
                <SwiperSlide className="TMC"><img src={TMC} alt="TMC" /></SwiperSlide>
                <SwiperSlide className="aka"><img src={aka} alt="aka" /></SwiperSlide>
                <SwiperSlide className="apostrof"><img src={warungHagia} alt="warung hagia" /></SwiperSlide>
                <SwiperSlide className="TMF"><img src={TMF} alt="TMF" /></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Client;
