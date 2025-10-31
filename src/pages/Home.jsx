import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonials";
import Footer from "../components/Footer";
import hero1 from "../assets/images/h1.jpg";
import hero2 from "../assets/images/powersafe.jpg";
import hero3 from "../assets/images/h3.jpg";
import svg from "../assets/worker-helmet-svgrepo-com.svg";
import svg2 from "../assets/settings-gear-svgrepo-com.svg";
import svg3 from "../assets/handshake-solid-svgrepo-com.svg";
import svg4 from "../assets/graduate-cap-svgrepo-com.svg";
import about2 from "../assets/images/about3.jpg";
import presido from "../assets/images/pres.jpg";
import solar from "../assets/images/Solar.jpg";
import conference from "../assets/images/conference.jpg";
import eg from "../assets/images/MWECG.jpg";
import VariouSwiper from "../components/VariouSwiper";
import qr from "../assets/images/QR.PNG";
import bg from "../assets/images/copy2.png";


const slides = [hero1, hero2, hero3];

const eventSlides = [
    {
        img: eg,
        title: "Meeting with ECG",
        desc: "The executives of the Ghana Electrical Contractors Association met with the Deputy MD of the ECG in charge of Engineering and Operations, Ing. Kojo Obeng and his team of engineers to discuss pertinentissues of mutual concerns. The parties reached consensus on key concerns and underscored the need to improve upon their relationship.",
        link: "#",
    },
    {
        img: solar,
        title: " Training In Solar PV Installation And Maintenance",
        desc: " Members of the Ghana Electrical Contractors Association undergoing practical training in Solar PV installation and maintenance. This program is funded by the Ghana Skills Development Fund under the     CTVET. At GECA, capacity building is our utmost priority.",
        link: "#",
    },
    {
        img: conference,
        title: "Lighting and Smart Home Conference and Exhibition 2024",
        desc: " The Power Energy Ghana Expo 2024 and the Lighting & Smart Home  Conference were a great success, thanks to our stakeholders and exhibitors. Special thanks to Ms. Wilhelmina Asamoah, Ms. Harriet Thompson, Mr. Manish Gupta, and Ing. Anthony Bleboo for their  valued support.",
        link: "#",
    },
];





export default function Home() {
    // HERO SLIDES
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (paused) return;
        intervalRef.current = setInterval(() => {
            setIndex((p) => (p + 1) % slides.length);
        }, 5000);
        return () => clearInterval(intervalRef.current);
    }, [paused]);

    // EVENT SLIDES
    const [eventIndex, setEventIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setEventIndex((prev) => (prev + 1) % eventSlides.length);
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <TopNavbar />
            <Navbar />

            {/* HERO SECTION */}
            <section
                className="relative w-full overflow-hidden pt-20 md:pt-28"
                role="region"
                aria-label="Hero"
            >
                <div className="flex flex-col lg:block h-auto lg:h-[73vh]">
                    {/* White info card */}
                    <FadeInWhenVisible direction="left">
                        <div className="relative z-20 px-4 sm:px-6 lg:px-8 py-6 w-full lg:absolute lg:inset-0 lg:flex lg:items-center">
                            <div className="w-full lg:w-7/12 mx-auto lg:ml-24 lg:mt-26">
                                <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 sm:p-8 md:p-10 max-w-2xl">
                                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-black leading-tight">
                                        Ghana Electrical Contractors' Association
                                    </h1>

                                    <p className="mt-3 text-sm sm:text-base md:text-lg text-black">
                                        The Ghana Electrical Contractors' Association (GECA) is a
                                        member-based organization established in 1948 as the voice
                                        of Ghana's electrical industry.
                                    </p>

                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfPsj0XLWj54JzoUOM1efHaXIjYEj1JzR5Tp2cqjT3YcLK1dQ/viewform?usp=sf_link"
                                        target="_blank" rel="noopener noreferrer"
                                        className="inline-block mt-5 bg-red-700 text-white px-10 sm:px-14 py-3 sm:py-4 rounded-full font-semibold hover:bg-red-600 transition text-sm sm:text-base"
                                    >
                                        Join GECA
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FadeInWhenVisible>

                    {/* Carousel */}
                    <FadeInWhenVisible direction="up">
                        <div className="relative h-[35vh] sm:h-[45vh] md:h-[60vh] lg:h-[86vh] w-full">
                            {slides.map((img, i) => (
                                <div
                                    key={i}
                                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                        }`}
                                    style={{
                                        backgroundImage: `url(${img})`,
                                        backgroundSize: "cover",
                                    }}
                                    aria-hidden={i !== index}
                                />
                            ))}

                            {/* overlay */}
                            <div className="absolute inset-0 bg-black/25 pointer-events-none hidden lg:block" />

                            {/* indicators */}
                            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-2">
                                {slides.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setIndex(i)}
                                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full focus:outline-none ${index === i ? "bg-white" : "bg-white/60"
                                            }`}
                                        aria-label={`Go to slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>


            {/* ABOUT SECTION */}

            <section id="about" className="bg-red-700 text-white py-16 px-6 md:px-14">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <FadeInWhenVisible direction="left">
                        <div className="text-center lg:text-left flex flex-col justify-center">
                            <button className="bg-white text-black font-semibold px-5 py-2 text-base lg:px-1 lg:py-2 lg:text-sm rounded mb-4 mt-4 mx-auto lg:mx-0">
                                About Us
                            </button>

                            <h2 className="text-3xl sm:text-4xl mb-4 leading-tight">
                                Profile Of The Ghana Electrical Contractors' Association
                            </h2>

                            <p className="text-white/90 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                                The Ghana Electrical Contractors' Association (GECA) is a
                                member-based organization established in 1948 as the voice of
                                Ghana's electrical industry. With representation in all 12
                                regions of Ghana and headquartered in Accra, GECA has grown into
                                a prominent nationwide body. The Association is headed by a
                                National Council which consists of two executives from each
                                region and the National Executives, led by the President.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto lg:mx-0">
                                <div>
                                    <h4 className="font-semibold text-lg mb-2">Experienced, Skilled Team</h4>
                                    <p className="text-white/90">
                                        To provide a focal point for meeting all licensed electrical
                                        contractors and practitioners for the purpose of promoting
                                        safety and quality in the electrical construction industry.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-lg mb-2">Support</h4>
                                    <p className="text-white/90">
                                        To promote and maintain a high level of professional
                                        standards among members.
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-center lg:justify-start gap-4 mt-10 flex-col sm:flex-row">
                                <a
                                    href="/about"
                                    className="bg-red-900 text-white px-4 py-3 rounded-md font-semibold text-center hover:bg-white hover:text-black transition"
                                >
                                    Read More
                                </a>

                                <button
                                    onClick={() => (window.location.href = 'tel:233598551301')}
                                    className="bg-white text-black px-4 py-3 rounded-md font-semibold hover:bg-red-600 hover:text-white transition"
                                >
                                    Call Us Now: <span className="font-bold">233(0)598 551 301</span>
                                </button>
                            </div>
                        </div>
                    </FadeInWhenVisible>

                    <FadeInWhenVisible direction="right">
                        <div className="hidden sm:flex justify-center">
                            <img
                                src={about2}
                                alt="GECA Members"
                                className="rounded-lg shadow-lg w-3/4 sm:w-2/3 lg:w-[85%] object-cover mx-auto mt-4"
                            />
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>

            {/* MEMBERSHIP SECTION */}
            <FadeInWhenVisible direction="down">
                <section id="membership" className="py-16 bg-white text-center mt-10 px-6 md:px-14">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="mb-10">
                            <h6 id="Membership" className="text-2xl sm:text-3xl font-medium text-black">
                                Electricity In Safe Hands Since 1948
                            </h6>
                            <h2 className="text-lg text-black mt-2">
                                Various membership and categories
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
                            {/* Membership Cards */}
                            {[svg, svg2, svg3, svg4].map((icon, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <img
                                        src={icon}
                                        alt="Membership"
                                        className="w-28 h-28 mb-4 contrast-150 brightness-90 transition-transform duration-300 hover:scale-110"
                                    />
                                    <h1 className="font-bold text-lg">
                                        {['Regular Member', 'Corporate Member', 'Associate Corporate Member', 'Associate Member'][i]}
                                    </h1>
                                    <h4 className="text-sm text-black">
                                        {[
                                            'Licensed electrical contractor',
                                            'For duly registered electrical company',
                                            'Exclusive to manufacturers and dealers of electrical and related materials',
                                            'Open to university and TVET students or apprentices working under a licensed practitioner'
                                        ][i]}
                                    </h4>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <a
                                href="./membership"
                                className="inline-block bg-red-700 text-white px-14 py-5 rounded-full font-semibold hover:bg-red-600 transition"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </section>
            </FadeInWhenVisible>


            {/* BUSINESS DIRECTORY */}
            <section id="directory" className="mt-4 py-12 px-6 md:px-16 bg-cover bg-center bg-no-repeat text-white"
                style={{ backgroundImage: `url(${bg})` }}  >

                <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Text Section */}
                    <FadeInWhenVisible direction="left">
                        <div className="text-white text-center lg:text-left flex flex-col items-center lg:items-start lg:ml-24">
                            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                                Are you looking for a reliable <br /> Electrical Service Provider?
                            </h1>

                            <p className="text-lg text-white mb-6 leading-relaxed">
                                Look no further. Download the Ghana Electrical <br />
                                Industry Business Directory for a trusted and <br />
                                reliable Electrical Contractors and Dealers of <br />
                                electrical materials.
                            </p>

                            {/* QR Code */}
                            <div className="flex justify-start mb-4">
                                <img
                                    src={qr}
                                    alt="GECA QR Code"
                                    className="w-32 h-32 object-contain"
                                />
                            </div>

                            {/* Button Link */}
                            <a
                                href="https://drive.google.com/file/d/1PyiHhHf1bc88cer9tEPR1eGE_s1iTajs/view?usp=drivesdk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-red-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-800 transition"
                            >
                                Click here
                            </a>
                        </div>
                    </FadeInWhenVisible>

                    {/* Right Side Image Placeholder (optional for later) */}
                    <div className="hidden lg:block"></div>
                </div>
            </section>


            {/* PRESIDENT FOREWORD*/}
            <section id="foreword" className="bg-white py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-14">
                <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
                    {/* Image Side */}
                    <FadeInWhenVisible direction="left">
                        <div className="relative group flex justify-center md:justify-start">
                            <div className="relative w-[85%] sm:w-[80%] md:w-auto rounded-3xl overflow-hidden shadow-2xl border-[3px] sm:border-[4px] border-white bg-white transition-all duration-500 group-hover:shadow-[0_0_45px_8px_rgba(220,38,38,0.7)]">
                                <img
                                    src={presido}
                                    alt="President of GECA"
                                    className="w-full h-[280px] sm:h-[380px] md:h-[520px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </FadeInWhenVisible>

                    {/* Text Side */}
                    <FadeInWhenVisible direction="up" delay={0.2}>
                        <div className="text-gray-800 leading-relaxed space-y-3 sm:space-y-5 md:space-y-6 px-3 sm:px-0 max-w-[95%] mx-auto text-center md:text-left">
                            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 leading-snug md:leading-tight">
                                Foreword from the President of the Ghana Electrical Contractors' Association (GECA)
                            </h2>
                            <p className="text-[13px] sm:text-[15px] md:text-[18px] text-gray-700 leading-relaxed sm:leading-loose">
                                It is a privilege to share this message on behalf of the Ghana Electrical Contractors' Association (GECA). As an organization rooted in excellence, GECA continues to champion the values of professionalism, safety, integrity, and national service. Our members are the backbone of Ghana's electrical infrastructure, and through their dedication, we are advancing industry standards and supporting the country's development goals. This foreword stands as a reaffirmation of our collective mission: to foster collaboration, promote capacity building, and ensure that every project we touch reflects the highest standards of our profession. In unity, we find strength; in service, we find purpose. Together, we are building a more resilient, skilled, and empowered electrical industry—one that powers Ghana's future.
                            </p>
                            <p className="font-semibold text-base sm:text-lg pt-2 text-gray-900">– President, GECA</p>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>


            {/* LATEST EVENTS */}
            <section id="events" className="bg-gray-200 py-10 sm:py-14 md:py-20 px-3 sm:px-6 md:px-14">
                <div className="max-w-[950px] mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            Latest Events
                        </h2>
                        <p className="max-w-[650px] mx-auto text-sm sm:text-base md:text-lg text-black mt-3 leading-relaxed">
                            Stay updated with expert insights in electrical contracting, solar energy, and home security.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
                        <FadeInWhenVisible direction="up" delay={0.2}>
                            <div
                                key={eventSlides[index].title}
                                className="text-gray-800 leading-relaxed space-y-3 sm:space-y-5 text-center md:text-left opacity-0 animate-fadeIn transition-opacity duration-1000 px-3 sm:px-0"
                            >
                                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900">
                                    {eventSlides[index].title}
                                </h2>
                                <p className="text-[14px] sm:text-[16px] md:text-[18px] text-black">
                                    {eventSlides[index].desc}
                                </p>
                            </div>
                        </FadeInWhenVisible>

                        {/* IMAGE SIDE */}

                        <FadeInWhenVisible direction="right">
                            <div
                                className="hidden md:block relative group 
      w-[85%] sm:w-[80%] md:w-full 
      h-auto sm:h-[300px] md:h-[380px] 
      mx-auto rounded-3xl overflow-hidden 
      shadow-2xl border-[4px] border-white bg-white 
      transition-all duration-500 
      group-hover:shadow-[0_0_45px_8px_rgba(220,38,38,0.7)]"
                            >
                                <img
                                    key={eventSlides[index].img}
                                    src={eventSlides[index].img}
                                    alt="Event"
                                    className="w-full h-auto sm:h-[300px] md:h-[520px] object-cover opacity-0 animate-fadeIn transition-opacity duration-1000"
                                />
                            </div>
                        </FadeInWhenVisible>


                    </div>
                </div>
            </section>

            <VariouSwiper />
            {/* TESTIMONIALS */}
            <Testimonial />
            <Footer />


        </>
    );
}
