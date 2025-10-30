import React from "react";
import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import { ChevronRight } from "lucide-react";
import looking from "../assets/images/lookinghappy.jpg";
import Footer from "../components/Footer";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

const MembershipPage = () => {
  return (
    <>
      <TopNavbar />
      <Navbar />

      <div className="pt-[100px] sm:pt-[120px] md:pt-[140px] w-full">
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-100 py-2 px-3 sm:px-4 md:px-12">
          <div className="flex flex-wrap items-center text-gray-600 text-xs sm:text-sm md:text-base space-x-1 sm:space-x-2">
            <a href="/" className="hover:text-red-700 font-medium">
              Home
            </a>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-400" />
            <span className="text-red-700 font-semibold">Read More</span>
          </div>
        </div>

        {/* Cover Image */}
        <FadeInWhenVisible direction="up">
          <div
            className="h-[180px] sm:h-[280px] md:h-[350px] bg-cover bg-center"
            style={{ backgroundImage: `url(${looking})` }}
          ></div>
        </FadeInWhenVisible>

        {/* Membership Section */}
        <section className="py-6 sm:py-10 md:py-10 px-3 sm:px-4 md:px-12 bg-white">
          <div className="max-w-[1000px] mx-auto space-y-8 sm:space-y-10 md:space-y-12">
            {/* Regular Member */}
            <FadeInWhenVisible direction="right">
              <div className="text-black text-center px-1 sm:px-0">
                <h1 className="text-lg sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                  Regular Member
                </h1>
                <p className="text-gray-800 text-xs sm:text-sm md:text-center leading-relaxed">
                  Persons for admission as members in this category should be licensed
                  by the Electricity Company of Ghana, Energy <br></br>Commission or any other
                  body recognized by the Government to practice in the electrical
                  industry.
                </p>
              </div>
            </FadeInWhenVisible>

            {/* Corporate Member */}
            <FadeInWhenVisible direction="left">
              <div className="text-black text-center px-1 sm:px-0">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
                  Corporate Member
                </h1>
                <p className="text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed">
                  A duly registered electrical company with the Registrar General’s
                  Department of Ghana with a verifiable record of<br></br> incorporation. The
                  company must have at least one of its front-line technical staff
                  having requisite licenses from the  <br></br>Energy Commission or the Electricity
                  Company of Ghana.
                </p>
              </div>
            </FadeInWhenVisible>

            {/* Associate Corporate Member */}
            <FadeInWhenVisible direction="right">
              <div className="text-black text-center px-1 sm:px-0">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
                  Associate Corporate Member
                </h1>
                <p className="text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed">
                  This membership is exclusive to manufacturers and dealers of
                  electrical and related materials duly registered by the<br></br> Registrar
                  General's Department and approved by the <br></br>Ghana Standards Authority,
                  seeking to further their interest in the industry.
                </p>
              </div>
            </FadeInWhenVisible>

            {/* Associate Member */}
            <FadeInWhenVisible direction="right">
              <div className="text-black text-center px-1 sm:px-0">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">
                  Associate Member
                </h1>
                <p className="text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed">
                  Membership is open to university students, TVET students or
                  apprentices working under a licensed practitioner.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default MembershipPage;
