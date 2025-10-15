import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import min from "../assets/images/efenergy.JPG";
import ener from "../assets/images/EnergyCom.jpg";
import ghc from "../assets/images/GhanaChamber.jpg";
import gsa from "../assets/images/GSA.jpg";
// import men from "../assets/images/menergy.jpeg";
import ned from "../assets/images/NEDCO.jpg";
import wnh from "../assets/images/WorksnHousing.png";
import wusc from "../assets/images/WUSC.jpg";
import ctvet from "../assets/images/CTVET.jpg";

export default function VariouSwiper() {
    const stakeholders = [
        { src: wusc, alt: "WUSC" },
        { src: wnh, alt: "Works and Housing" },
        { src: ener, alt: "Energy Commission" },
        { src: min, alt: "Efenergy" },
        { src: ctvet, alt: "CTVET" },
        // { src: men, alt: "Ministry of Energy" },
        { src: ned, alt: "NEDCO" },
        { src: ghc, alt: "Ghana Chamber" },
        { src: gsa, alt: "GSA" },
    ];

    return (
        <section className="stakeholders-container bg-gray-200 py-16">
            <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our Various Stakeholders
            </h1>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 4 },
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 6 },
                }}
                modules={[Autoplay]}
                className="max-w-6xl mx-auto"
            >
                {stakeholders.map((item, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="w-20 md:w-24 grayscale hover:grayscale-0 transition-all duration-500 rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
