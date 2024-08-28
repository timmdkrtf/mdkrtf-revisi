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

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';

const Client = () => {
    SwiperCore.use([Autoplay, FreeMode, Navigation]);
    return (
        <section className="partners max-w-2xl mx-auto py-5 my-5">
            <h1 className="font-Leaguespartan text-3xl text-center font-bold">Our Clients</h1>
            <Swiper
                loop={true}
                freeMode={true}
                navigation={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={2000}
                slidesPerView="3"
                spaceBetween={42}
                breakpoints={{
                    280: {
                        slidesPerView: 2.1,
                        spaceBetween: 0,
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
                <SwiperSlide className="bahana"><img src={bahama} alt="bahana" /></SwiperSlide>
                <SwiperSlide className="habatour"><img src={habatour} alt="habatour" /></SwiperSlide>
                <SwiperSlide className="halakah"><img src={halakah} alt="halakah" /></SwiperSlide>
                <SwiperSlide className="kronika"><img src={kronika} alt="kronika" /></SwiperSlide>
                <SwiperSlide className="nyamanin"><img src={nyamanin} alt="nyamanin" /></SwiperSlide>
                <SwiperSlide className="realtour"><img src={realtour} alt="realtour" /></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Client;
