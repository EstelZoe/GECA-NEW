import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white pt-12 pb-6 relative transition-all duration-500 hover:bg-red-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* GECA Info */}
                    <div>
                        <h1 className="text-2xl font-bold mb-3">GECA</h1>
                        <div className="space-y-2 text-sm">
                            <p className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-1" />
                                3rd Floor Marble, South Industrial Area
                                <br />
                                (behind Toyota House), Greater Accra, Ghana
                            </p>
                            <p className="flex items-center gap-2">
                                <Mail className="w-4 h-4" /> ghanaeca@gmail.com
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone className="w-4 h-4" /> Mon - Fri: 8:30am - 4:30pm
                            </p>
                        </div>
                    </div>

                    {/* About Us */}
                    <div>
                        <h1 className="text-xl font-semibold mb-3">About Us</h1>
                        <ul className="space-y-2 text-sm">
                           <li> <a href="#membership" className="hover:text-gray-200">
                                Membership
                            </a></li>
                           <li> <a href="#directory" className="hover:text-gray-200">
                                Business Directory
                            </a></li>
                           <li> <a href="#foreword" className="hover:text-gray-200">
                                Foreword
                            </a></li>
                           <li> <a href="#events" className="hover:text-gray-200">
                                Events
                            </a></li>
                            <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
                        </ul>
                    </div>

                    {/* Category */}
                    <div>
                        <h1 className="text-xl font-semibold mb-3">Category</h1>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-gray-200">Regular Member</a></li>
                            <li><a href="#" className="hover:text-gray-200">Corporate Member</a></li>
                            <li><a href="#" className="hover:text-gray-200">Associate Corporate Member</a></li>
                            <li><a href="#" className="hover:text-gray-200">Associate Member</a></li>
                        </ul>
                    </div>

                    {/* Contact / Join */}
                    <div>
                        <h1 className="text-xl font-semibold mb-3">Call Us Now</h1>
                        <p className="text-sm mb-1">For enquiries and more information</p>
                        <p className="text-sm flex items-center gap-2">
                            <Mail className="w-4 h-4" /> ghanaeca@gmail.com
                        </p>
                        <p className="text-sm flex items-center gap-2 mb-4">
                            <Phone className="w-4 h-4" /> +233 (0) 598 551 301
                        </p>

                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfPsj0XLWj54JzoUOM1efHaXIjYEj1JzR5Tp2cqjT3YcLK1dQ/viewform?usp=sf_link"
                            className="inline-block bg-white text-gray-900 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition"
                        >
                            Join GECA
                        </a>

                        {/* Social icons */}
                        <div className="flex items-center gap-3 mt-5">
                            <a href="https://www.facebook.com/GECANATIONAL" className="hover:text-gray-300">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="https://x.com/GecaNational?s=09" className="hover:text-gray-300">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/ghanaelectrical_contass?igsh=MXdleTNweDhzMDM3OA==" className="hover:text-gray-300">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/ghana-electrical-contractors-association-geca-254644244" className="hover:text-gray-300">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://youtube.com/@gecanational?si=tLd6T7Yy1AKsjkIS" className="hover:text-gray-300">
                                <Youtube className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-6 border-gray-600" />

                {/* Copyright */}
                <p className="text-center text-sm">
                    Copyright © 2025 GECA: All rights reserved
                </p>
            </div>
        </footer>
    );
}
