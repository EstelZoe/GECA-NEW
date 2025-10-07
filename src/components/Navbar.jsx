import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/gecawhite.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-red-700 text-white fixed md:top-12 top-0 left-0 w-full z-50 h-20 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-full">
                    {/* Logo + Name */}
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="GECA Logo" className="h-20 w-auto" />

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
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-red-700 text-white px-4 py-3 space-y-3">
                    <a href="#about" className="block hover:text-gray-200">
                        About
                    </a>
                    <a href="#membership" className="block hover:text-gray-200">
                        Membership
                    </a>
                    <a href="#directory" className="block hover:text-gray-200">
                        Business Directory
                    </a>
                    <a href="#foreword" className="block hover:text-gray-200">
                        Foreword
                    </a>
                    <a href="#events" className="block hover:text-gray-200">
                        Events
                    </a>
                    <a href="#contact" className="block hover:text-gray-200">
                        Contact Us
                    </a>
                    <a
                        href="#join"
                        className="block bg-red-900 px-6 py-4 rounded-full text-2xl text-center hover:bg-red-800 transition"
                    >
                        Join GECA
                    </a>
                </div>
            )}
        </nav>
    );
}
