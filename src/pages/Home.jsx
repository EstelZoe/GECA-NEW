import React, { useEffect, useRef, useState } from "react";
import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import hero1 from "../assets/images/h1.jpg";
import hero2 from "../assets/images/h2.jpg";
import hero3 from "../assets/images/h3.jpg";
import about from "../assets/images/about.jpg";
import icon1 from "../assets/images/icon 1.png";
import icon2 from "../assets/images/icon 2.png";
import icon3 from "../assets/images/icon 3.png";
import icon4 from "../assets/images/icon 4.png";
import svg from "../assets/worker-helmet-svgrepo-com.svg";
import svg2 from "../assets/settings-gear-svgrepo-com.svg";
import svg3 from "../assets/handshake-solid-svgrepo-com.svg";
import svg4 from "../assets/graduate-cap-svgrepo-com.svg";
import qr from "../assets/images/QR.PNG";
import bus from "../assets/images/copy2.png";
import power from "../assets/images/powersafe.jpg";
import about2 from "../assets/images/about2.jpg";
import presido from "../assets/images/pres.jpg";



const slides = [hero1, power, hero3];

export default function Home() {
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

    useEffect(() => () => clearInterval(intervalRef.current), []);

    return (
        <>
            <TopNavbar />
            <Navbar />

            <section
                className="relative w-full overflow-hidden pt-20 md:pt-28"
                role="region"
                aria-label="Hero"
            >
                {/* Mobile-first stacking: card then carousel */}
                <div className="flex flex-col lg:block h-auto lg:h-[73vh]">
                    {/* White info card */}
                    <div className="relative z-20 px-4 sm:px-6 lg:px-8 py-6 w-full lg:absolute lg:inset-0 lg:flex lg:items-center">

                        <div className="w-full lg:w-7/12 mx-auto lg:ml-24 lg:mt-26">
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 sm:p-8 md:p-10 max-w-2xl">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
                                    Ghana Electrical Contractors' Association
                                </h1>

                                <p className="mt-4 text-black">
                                    The Ghana Electrical Contractors' Association (GECA) is a
                                    member-based organization established in 1948 as the voice of
                                    Ghana's electrical industry.
                                </p>

                                <a
                                    href="#join"
                                    className="inline-block mt-6 bg-red-700 text-white px-14 py-4 rounded-full font-semibold hover:bg-red-600 transition"
                                >
                                    Join GECA
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Carousel (comes below card on mobile, background on desktop) */}
                    <div className="relative h-[50vh] lg:h-[86vh] w-full">
                        {slides.map((img, i) => (
                            <div
                                key={i}
                                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                    }`}
                                style={{ backgroundImage: `url(${img})` }}
                                aria-hidden={i !== index}
                            />
                        ))}

                        {/* overlay (desktop only for text contrast) */}
                        <div className="absolute inset-0 bg-black/25 pointer-events-none hidden lg:block" />

                        {/* indicators */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-2">
                            {slides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className={`w-3 h-3 rounded-full focus:outline-none ${index === i ? "bg-white" : "bg-white/60"
                                        }`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION*/}
            <section className="bg-red-700 text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Left Side - Text */}
                    <div className="text-center lg:text-left flex flex-col justify-center">
                        <button className="bg-white text-black font-semibold px-5 py-2 text-base lg:px-1 lg:py-2 lg:text-sm rounded mb-4 mt-4 mx-auto lg:mx-0">
                            About Us
                        </button>


                        <h2 className="text-3xl sm:text-4xl  mb-4 leading-tight">
                            Profile Of The Ghana Electrical Contractors' Association
                        </h2>

                        <p className="text-white/90 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                            The Ghana Electrical Contractors' Association (GECA) is a
                            member-based organization established in 1948 as the voice of
                            Ghana's electrical industry. With representation <br />in all 12 regions
                            of Ghana and headquartered in Accra, GECA has grown into a <br />prominent
                            nationwide body. The Association is headed by a National  Council <br />
                            which consists of two executives from each region and the National
                            Executives, <br />led by the President.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto lg:mx-0">
                            <div>
                                <h4 className="font-semibold text-lg mb-2">Experienced, Skilled Team</h4>
                                <p className="text-white/90">
                                    To provide a focal point for meeting all licensed electrical contractors and
                                    practitioners for the purpose of promoting safety and quality in the electrical
                                    construction industry.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">Support</h4>
                                <p className="text-white/90">
                                    To promote and maintain a high level of professional standards among members.
                                </p>
                            </div>
                        </div>

                        {/* Buttons */}
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

                    {/* Right Side - Image */}
                    <div className=" hidden sm:flex justify-center">
                        <img
                            src={about2}
                            alt="GECA Members"
                            className="rounded-lg shadow-lg w-3/4 sm:w-2/3 lg:w-[85%] object-cover mx-auto mt-4"
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white text-center mt-10">
                <div className="mb-10">
                    <h6 id="Membership" className="text-2xl sm:text-3xl font-medium text-black">
                        Electricity In Safe Hands Since 1948
                    </h6>
                    <h2 className="text-lg text-black mt-2">
                        Various membership and categories
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center px-6 lg:px-20">
                    <div className="flex flex-col items-center text-center">
                        <img src={svg} alt="Regular Member" className="w-28 h-28 mb-4 contrast-150 brightness-90 transition-transform duration-300 hover:scale-110" />
                        <h1 className="font-bold text-lg">Regular Member</h1>
                        <h4 className="text-sm text-black">
                            Licensed electrical contractor
                        </h4>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <img src={svg2} alt="Corporate Member" className="w-28 h-28 mb-4 contrast-150 brightness-90 transition-transform duration-300 hover:scale-110" />
                        <h1 className="font-bold text-lg">Corporate Member</h1>
                        <h4 className="text-sm text-black">
                            For duly registered electrical company
                        </h4>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <img src={svg3} alt="Associate Corporate Member" className="w-28 h-28 mb-4 contrast-150 brightness-90 transition-transform duration-300 hover:scale-110" />
                        <h1 className="font-bold text-lg">Associate Corporate Member</h1>
                        <h4 className="text-sm text-black">
                            Exclusive to manufacturers and dealers of electrical and related materials
                        </h4>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <img src={svg4} alt="Associate Member" className="w-28 h-28 mb-4 contrast-150 brightness-90 transition-transform duration-300 hover:scale-110" />
                        <h1 className="font-bold text-lg">Associate Member</h1>
                        <h4 className="text-sm text-black">
                            Open to university and TVET students or apprentices working under a licensed practitioner
                        </h4>
                    </div>
                </div>

                <div className="mt-12">
                    <a
                        href="./readMore.html"
                        className="inline-block bg-red-700 text-white px-14 py-5 rounded-full font-semibold hover:bg-red-600 transition"
                    >
                        Read More
                    </a>
                </div>
            </section>

            {/* BUSINESS DIRECTORY */}
            <section
                className="relative bg-cover bg-center text-white py-16 px-6 sm:px-10"
                style={{
                    backgroundImage: `url(${bus})`, 
                }}
            >
                {/* Overlay (optional if you want the text to stand out more) */}
                {/* <div className="absolute inset-0 bg-black/40"></div> */}

                <div className="relative z-10 max-w-4xl mx-auto lg:mx-0 lg:ml-28 text-center lg:text-left">
                    <h1
                        id="Directory"

                        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4"
                    >
                        Are you looking for a reliable <br className="hidden sm:block" />
                        Electrical service Provider?
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
                        Look no further. Download the Ghana Electrical <br className="hidden sm:block" />
                        Industry Business Directory for a trusted and <br className="hidden sm:block" />
                        reliable Electrical Contractors and Dealers of <br className="hidden sm:block" />
                        electrical materials.
                    </p>

                    {/* QR Code */}
                    <div className="flex justify-center lg:justify-start mb-6">
                        <img
                            src={qr}
                            alt="GECA QR Code"
                            className="w-28 sm:w-32 md:w-40"
                        />
                    </div>

                    {/* Button */}
                    <a
                        href="https://drive.google.com/file/d/1PyiHhHf1bc88cer9tEPR1eGE_s1iTajs/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white hover:bg-red-600 text-black hover:text-white font-semibold px-8 py-3 rounded-full transition"
                    >
                        Click Here
                    </a>
                </div>
            </section>





        </>
    );
}
