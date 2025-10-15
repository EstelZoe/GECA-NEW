import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/gecawhite.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-red-700 text-white fixed md:top-12 top-0 left-0 w-full z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo + Name */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center space-x-2">
                            <img src={logo} alt="GECA Logo" className="h-16 w-auto" />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#about" className="hover:text-gray-200 text-lg">
                            About
                        </a>
                        <a href="#membership" className="hover:text-gray-200 text-lg">
                            Membership
                        </a>
                        <a href="#directory" className="hover:text-gray-200 text-lg">
                            Business Directory
                        </a>
                        <a href="#foreword" className="hover:text-gray-200 text-lg">
                            Foreword
                        </a>
                        <a href="#events" className="hover:text-gray-200 text-lg">
                            Events
                        </a>
                        <a href="#contact" className="hover:text-gray-200 text-lg">
                            Contact Us
                        </a>
                        <a
                            href="#join"
                            className="bg-red-900 px-4 py-2 rounded-full font-semibold hover:bg-red-800 transition text-lg"
                        >
                            Join GECA
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown with Animation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden"
                        id="mobile-menu"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-red-700">
                            <a href="#about" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">About</a>
                            <a href="#membership" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">Membership</a>
                            <a href="#directory" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">Business Directory</a>
                            <a href="#foreword" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">Foreword</a>
                            <a href="#events" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">Events</a>
                            <a href="#contact" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-red-800">Contact Us</a>
                            <div className="pt-4 pb-2">
                                <a
                                    href="#join"
                                    onClick={handleLinkClick}
                                    className="block bg-red-900 px-6 py-3 rounded-full text-base font-semibold text-center hover:bg-red-800 transition"
                                >
                                    Join GECA
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
