import { Search, Users, Globe, Phone } from "lucide-react";

export default function TopNavbar() {
  return (
    <div className="w-full bg-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-end gap-6 py-2 px-4">
        {/* Item */}
        <a href="#search" className="flex items-center gap-2 text-gray-700 hover:text-orange-500">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white">
            <Search size={16} />
          </span>
          <span className="text-sm">Search</span>
        </a>

        {/* Item */}
        <a href="#member" className="flex items-center gap-2 text-gray-700 hover:text-orange-500">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white">
            <Users size={16} />
          </span>
          <span className="text-sm">Find a Member</span>
        </a>

        {/* Item */}
        <a href="#regions" className="flex items-center gap-2 text-gray-700 hover:text-orange-500">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white">
            <Globe size={16} />
          </span>
          <span className="text-sm">GECA Regions</span>
        </a>

        {/* Item */}
        <a href="#contact" className="flex items-center gap-2 text-gray-700 hover:text-orange-500">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white">
            <Phone size={16} />
          </span>
          <span className="text-sm">Contact Us</span>
        </a>
      </div>
    </div>
  );
}
