import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import stars from "../assets/images/Stars.png";
import FadeInWhenVisible from "../components/FadeInWhenVisible"; 

const testimonials = [
    {
        text: `“Your dedication to providing quality services to clients, upholding safety standards, and adhering to ethical business practices has made a significant impact on the industry.”`,
        name: "Emmanuel Cherry",
        position: "CEO, Ghana Chamber of Construction Industry.",
    },
    {
        text: `“The GSA is proud to be associated with GECA and urge the association and other relevant stakeholders and institutions to join forces to sanitise the industry and protect the safety of electrical cable users.”`,
        name: "Prof. Alex Dodoo",
        position: "Executive Director, Ghana Standards Authority.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 bg-white" id="testimonials">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                    <FadeInWhenVisible direction="up">
                        <h4 className="font-bold text-2xl text-gray-900">TESTIMONIALS</h4>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible direction="up" delay={0.2}>
                        <h5 className="text-xl mt-2 text-gray-700">
                            What Our Members/Stakeholders Say?
                        </h5>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible direction="up" delay={0.4}>
                        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                            Hear from our satisfied members and stakeholders who trust us for
                            our top-quality services in the electrical industry.
                        </p>
                    </FadeInWhenVisible>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    className="max-w-3xl mx-auto"
                >
                    {testimonials.map((item, i) => (
                        <SwiperSlide key={i}>
                            <FadeInWhenVisible direction="up">
                                <div className="text-center bg-gray-50 p-8 rounded-2xl shadow-lg">
                                    <p className="text-gray-700 leading-relaxed text-lg italic">
                                        {item.text}
                                    </p>

                                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-red-700 font-semibold">
                                                {item.name
                                                    .split(" ")
                                                    .slice(0, 2)
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </div>
                                        </div>

                                        <div className="text-center sm:text-left">
                                            <p className="font-semibold text-gray-900">{item.name}</p>
                                            <p className="text-sm text-gray-600">{item.position}</p>
                                        </div>

                                        <div className="mt-4 sm:mt-0 sm:ml-6 flex items-center justify-center gap-2">
                                            <img src={stars} alt="rating" className="w-24 h-auto" />
                                            <span className="text-sm text-gray-700">(5/5)</span>
                                        </div>
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
