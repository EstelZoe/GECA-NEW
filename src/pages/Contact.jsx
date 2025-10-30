import React from "react";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
  <>
<TopNavbar/>
  <Navbar/>
   <main className="w-full pt-[120px] sm:pt-[120px] md:pt-[140px] -mt-[12px]">
      {/* Google Map Section */}
      <section className="w-full">
        <div className="w-full">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0515363707186!2d-0.22227909999999998!3d5.5593802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf915d2a4b4bd1%3A0x84bab4c170ea4c6c!2sGhana%20Electrical%20Contractors%20Association%20(GECA)!5e0!3m2!1sen!2sgh!4v1748997170651!5m2!1sen!2sgh"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full border-0 rounded-md shadow-md"
              title="GECA Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="Contact" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-start md:gap-10 bg-white shadow-md rounded-lg p-6 md:p-10">
            {/* Contact Text */}
            <div className="md:w-5/12 w-full mb-10 md:mb-0 text-center md:text-left">
              <h1 className="text-3xl font-bold text-black mb-2">
                CONTACT US
              </h1>
              <h4 className="text-lg font-semibold text-red-700 mb-4">
                Get In Touch With Us
              </h4>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Reach out today for expert guidance, service inquiries, or
                personalized solutions. We're here to support your project every
                step of the way!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 justify-center md:justify-start">
                  <img
                    src="./images/ilocation (1).png"
                    alt=""
                    className="w-8 h-8"
                  />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    3rd Floor Marble, South Industrial Area (behind Toyota
                    House),
                    <br />
                    Greater Accra, Ghana
                  </p>
                </div>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <img
                    src="./images/ilocation (2).png"
                    alt=""
                    className="w-6 h-6"
                  />
                  <p className="text-gray-700 text-sm">ghanaeca@gmail.com</p>
                </div>
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <img
                    src="./images/ilocation (3).png"
                    alt=""
                    className="w-6 h-6"
                  />
                  <p className="text-gray-700 text-sm">+233 (0)598 551 301</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-7/12 w-full bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact us
              </h3>
              <form className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:outline-none"
                />
                <textarea
                  name="comment"
                  rows="5"
                  placeholder="Write your comment here"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-700 focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-red-700 text-white py-3 rounded-md font-semibold hover:bg-red-500 transition"
                >
                  Send Mail
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
};

export default ContactPage;
