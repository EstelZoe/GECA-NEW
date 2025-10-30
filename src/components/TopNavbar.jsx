import { Search, Users, Globe, Phone } from "lucide-react";

export default function TopNavbar() {
    return (
        <div className="hidden md:flex fixed top-0 left-0 z-50 w-full h-12 bg-gray-100 shadow-sm items-center px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-end gap-6 py-2 px-4 w-full translate-x-[-30px]">
                {/* Item */}
                {/* <a
                    href="#search"
                    className="flex items-center gap-2 text-gray-700 hover:text-orange-500"
                >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white">
                        <Search size={18} />
                    </span>
                    <span className="text-lg">Search</span>
                </a> */}

                {/* Item */}
                <a
                    href="https://drive.google.com/file/d/1PyiHhHf1bc88cer9tEPR1eGE_s1iTajs/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-red-700"
                >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white">
                        <Users size={18} />
                    </span>
                    <span className="text-lg">Find a Member</span>
                </a>

                {/* Item */}
                <a
                    href="#regions"
                    className="flex items-center gap-2 text-gray-700 hover:text-red-700"
                >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white">
                        <Globe size={18} />
                    </span>
                    <span className="text-lg">GECA Regions</span>
                </a>

                {/* Item */}
                <a
                    href="#contact"
                    className="flex items-center gap-2 text-gray-700 hover:text-red-700"
                >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white">
                        <Phone size={18} />
                    </span>
                    <span className="text-lg">Contact Us</span>
                </a>
            </div>
        </div>

    );
}
