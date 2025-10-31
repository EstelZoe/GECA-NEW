import { useState, useRef, useEffect } from "react";
import { Users, Globe, Phone } from "lucide-react";

export default function TopNavbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="hidden md:flex fixed top-0 left-0 z-[1000] w-full h-12 bg-gray-100 shadow-sm items-center px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-end gap-6 py-2 px-4 w-full translate-x-[-30px]">

        {/* Find Member */}
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

        {/* GECA Regions Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 text-gray-700 hover:text-red-700"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-700 text-white">
              <Globe size={18} />
            </span>
            <span className="text-lg">GECA Regions</span>
          </button>

          {/* Scrollable Dropdown */}
          {open && (
            <div
              className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-52 
              z-[9999] max-h-60 overflow-y-auto border border-gray-200 
              translate-y-[10px]"
              style={{
                position: "absolute",
                top: "100%",
                zIndex: 9999,
              }}
            >
              <ul className="text-gray-700">
                {[
                  "Greater Accra", "Ashanti", "Central", "Eastern", "Western", "Volta",
                  "Northern", "Upper East", "Upper West", "Bono", "Bono East", "Ahafo",
                  "Oti", "Western North", "North East", "Savannah"
                ].map((region, i) => (
                  <li
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    {region}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Contact Us */}
        <a
          href="https://whatsapp.com/channel/0029VaJGD753WHTck5yPrT1K"
          target="_blank"
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
