import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1a from "../assets/images/metg1.jpeg";
import img1b from "../assets/images/megt3.jpeg";
import img1c from "../assets/images/megt2.jpeg";
import power1 from "../assets/images/powersafe1.jpeg";
import power2 from "../assets/images/powersafe2.jpeg";
import power3 from "../assets/images/powersafe3.jpeg";
import p1 from "../assets/images/psl1.jpeg";
import p2 from "../assets/images/psl2.jpeg";
import p3 from "../assets/images/psl3.jpeg";
import el1 from "../assets/images/ele1.jpeg";
import el2 from "../assets/images/ele2.jpeg";
import el3 from "../assets/images/ele3.jpeg";
import nx1 from "../assets/images/FCM125.jpeg";
import nx2 from "../assets/images/FCM225.jpeg";
import nx3 from "../assets/images/FCM25.jpeg";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
import GallerySlides from "../components/GallerySlides";
import Footer from "../components/Footer";

// Repeat imports for all 8 cards
// For demo, I'm reusing the same images
const galleryData = [
  {
    id: 1,
    images: [power1, power2, power3],
    title: "PowerSafe Ghana 2025",
    description: "PowerSafe Ghana 2025 has officially launched to drive safety, innovation, and collaboration in Ghana’s power sector, with its main event on September 23, 2025, bringing together industry experts to address challenges and showcase advanced technologies.",
  },

  {
    id: 2,
    images: [p1, p2, p3],
    title: "PowerSafe Launch 2025",
    description: "The maiden PowerSafe Ghana conference brought together key industry stakeholders under the theme “Electrical Safety, A Shared Responsibility,” highlighting safety, innovation, collaboration, and GECA’s appreciation to all contributors.",
  },
  {
    id: 3,
    images: [el1, el2, el3],
   title: "GECA Elections 2025",
    description: "GECA 2025 National Delegates Conference & Elections are underway, uniting members nationwide to strengthen leadership, promote safety, and advance Ghana’s electrical contracting industry.",
  },
  {
    id: 4,
    images: [nx1, nx2, nx3],
     title: "Final Council Meeting 2025", 
    description: "The GECA 2025 Final Council Meeting marked the culmination of a year of dedicated service, thoughtful decision-making, and significant milestones, celebrating growth, teamwork, and the lasting impact of our collective efforts.",
  },
  // {
  //   id: 5,
  //   images: [power1, power2, power3],
  //   description: "Protects food supply systems – prevents hacking of farms, factories, and distribution networks.secures data-driven agriculture – shields sensors,",
  // },
  // {
  //   id: 6,
  //   images: [power1, power2, power3],
  //   description: "Protects food supply systems – prevents hacking of farms, factories, and distribution networks.secures data-driven agriculture – shields sensors,",
  // },
  // {
  //   id: 7,
  //   images: [power1, power2, power3],
  //   description: "Protects food supply systems – prevents hacking of farms, factories, and distribution networks.secures data-driven agriculture – shields sensors, ",
  // },
  // {
  //   id: 8,
  //   images: [power1, power2, power3],
  //   description: "Protects food supply systems – prevents hacking of farms, factories, and distribution networks.secures data-driven agriculture – shields sensors,",
  // },
];

export default function GalleryPage() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 4;

  // AUTO SLIDE (EVERY 5 SECONDS)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  });

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + cardsPerPage >= galleryData.length ? 0 : prev + cardsPerPage
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - cardsPerPage < 0 ? galleryData.length - cardsPerPage : prev - cardsPerPage
    );
  };

  const visibleCards = galleryData.slice(startIndex, startIndex + cardsPerPage);


  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className=" bg-gray-100 p-6 pt-40">
        <h1 className="text-5xl font-bold text-center mb-10 text-red-500">Our Gallery</h1>

        {/* Arrows */}
        <div className="flex justify-between items-center mb-6 px-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white shadow hover:bg-gray-200 transition"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white shadow hover:bg-gray-200 transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCards.map((card) => (
            <ImageCard key={card.id} item={card} />
          ))}
        </div>
      </div>
      <div>
        <GallerySlides />
      </div>
      <Footer />

    </>

  );
}


// CARD COMPONENT WITH FADE ANIMATION

function ImageCard({ item }) {
  const [index, setIndex] = useState(0);

  // Cycle images inside each card
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((i) => (i + 1) % item.images.length);
    }, 3000); // FADE EVERY 3 seconds
    return () => clearTimeout(timeout);
  }, [index, item.images.length]);

  return (
       <>
      <div className="bg-gray-100 rounded-xl shadow-lg p-3 relative overflow-hidden hover:shadow-red-400 transition-all">

        {/* FADE IMAGES */}
        <div className="w-full h-48 relative rounded-lg overflow-hidden">
          {item.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 
                ${i === index ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>

        {/* TITLE */}
        <h2 className="mt-3 text-lg font-bold text-gray-900 text-center">
          {item.title}
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-1 text-center text-gray-700 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </>





  );
}
