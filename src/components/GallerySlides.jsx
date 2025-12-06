import { useEffect, useState } from "react";
import img1 from "../assets/images/metg1.jpeg";
import img2 from "../assets/images/megt3.jpeg";
import img3 from "../assets/images/megt2.jpeg";
import t1 from "../assets/images/tt1.jpeg";
import t2 from "../assets/images/tt2.jpeg";
import t3 from "../assets/images/tt3.jpeg";

export default function GallerySlides() {
  const images = [img1, img2, img3, t1, t2, t3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gray-100 py-16 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* TEXT SIDE */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
          <p className="text-gray-700 mb-4">
            The Ghana Electrical Contractors’ Association (GECA) unites licensed electrical contractors and practitioners across all regions of Ghana, providing a central platform to promote safety, quality, and professional excellence in the electrical construction industry. As the leading national body, GECA strives to drive high standards, foster innovation, and support sustainable growth in Ghana’s electrical sector, ensuring its members are equipped to meet both local and global industry expectations.
          </p>
          <p className="text-gray-700">
            GECA unites electrical contractors across Ghana to promote safety, quality, and professionalism, while driving innovation and high standards in the industry.
          </p>
        </div>

        {/* IMAGE SIDE */}
        <div className="md:w-1/2 relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
                ${index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
