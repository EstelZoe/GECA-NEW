import React from "react";
import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Footer from "../components/Footer";
import { ChevronRight } from "lucide-react";
import looking from "../assets/images/lookinghappy.jpg";

const AboutPage = () => {
    return (
        <>
            <TopNavbar />
            <Navbar />

            {/* Push content below fixed navbars */}

            <div className="pt-[140px] w-full">
                {/* Breadcrumb Navigation */}
                <FadeInWhenVisible direction="up">
                    <div className="bg-gray-100 py-2 px-4 md:px-16">
                        <div className="flex items-center text-gray-600 text-sm md:text-base space-x-2">
                            <a href="/" className="hover:text-red-700 font-medium">
                                Home
                            </a>
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                            <span className="text-red-700 font-semibold">About</span>
                        </div>
                    </div>
                </FadeInWhenVisible>
                {/* Cover Image Section */}
                <div
                    className="h-[300px] sm:h-[350px] md:h-[300px] bg-cover bg-top"
                    style={{ backgroundImage: `url(${looking})` }}
                ></div>

                {/* About Section */}

                <section className="py-4 px-6 md:px-16 bg-red-700">
                    <FadeInWhenVisible direction="down">
                        <div className="max-w-[1100px] mx-auto">
                            <div className="text-center md:text-left mb-8">
                                <h4
                                    id="About"
                                    className="text-red-700 text-xl font-semibold mb-2 uppercase"
                                >
                                    About Us
                                </h4>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl  text-white mb-4">
                                    Profile Of The Ghana Electrical Contractors' Association
                                </h2>
                            </div>

                            <div className="text-white leading-relaxed space-y-4">
                                <p>
                                    The Ghana Electrical Contractors' Association (GECA) is a
                                    member-based organization established in 1948 as the voice of
                                    Ghana's electrical industry. With representation in all 12 regions
                                    of Ghana and headquartered in Accra, GECA has grown into a
                                    prominent nationwide body. The Association is headed by a National
                                    Council which consists of two executives from each region and the
                                    National Executives, led by the President.
                                </p>

                                <p>The objectives of the Association are as follows:</p>

                                <ul className="list-disc list-inside space-y-2 ml-2 md:ml-5">
                                    <li>
                                        To provide a focal point for meeting all licensed electrical
                                        contractors and practitioners for the purpose.
                                    </li>
                                    <li>
                                        To promote safety and quality in the electrical construction
                                        industry.
                                    </li>
                                    <li>
                                        To promote and maintain a high level of professional standards
                                        among members.
                                    </li>
                                    <li>
                                        To promote and maintain a healthy rapport between members and
                                        the public.
                                    </li>
                                    <li>
                                        To regulate the conduct of members of the Association generally.
                                    </li>
                                    <li>
                                        To sensitize the public on electrical safety and efficient use of
                                        electricity through publications and other media.
                                    </li>
                                    <li>
                                        To offer members a platform for continuous professional capacity
                                        building to meet industry trends.
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </FadeInWhenVisible>
                </section>

            </div>
            <Testimonials />
            <Footer />


        </>
    );
};

export default AboutPage;
