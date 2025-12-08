import { useEffect, useState } from "react";
import party from "../assets/images/geca.jpeg";

export default function AnnouncementPopup() {
  const [showPopup, setShowPopup] = useState(true);

  // Correct event date: 09 dEC 2025, 1:10 PM
   const eventDate = new Date("2025-12-09T11:00:00Z");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!showPopup) return null;

  return (
  <div className="fixed inset-0 bg-black/70 flex items-center pl-10 md:justify-center z-50 md:p-4">
  <div className="bg-white rounded-2xl shadow-xl w-full max-w-[240px]  sm:max-w-md md:max-w-[270px] relative overflow-hidden">

    {/* Close Button */}
    <button
      onClick={() => setShowPopup(false)}
      className="absolute top-3 right-3 bg-black text-white rounded-full px-2 py-1 text-sm hover:bg-gray-800 z-10"
    >
      ✕
    </button>

    {/* Image */}
    <div className="w-full max-h-[50vh] sm:max-h-[45vh] md:max-h-[55vh] flex justify-center">
      <img
        src={party}
        alt="annual party"
        className="w-[780px] h-auto object-contain"
        loading="lazy"
      />
    </div>

    {/* Countdown + Register */}
    <div className="p-4 text-center bg-black text-white">
      <p className="text-lg font-semibold mb-2">Party starts in:</p>
      <div className="flex justify-center gap-2 sm:gap-4 text-xl font-bold mb-3 flex-wrap">
        <div>{timeLeft.days}d</div>
        <div>{timeLeft.hours}h</div>
        <div>{timeLeft.minutes}m</div>
        <div>{timeLeft.seconds}s</div>
      </div>

      <a
        href="https://forms.gle/HhJ7wtu79X9tF8W86"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-red-600 hover:bg-red-700 rounded-full font-semibold transition-colors mt-2"
      >
        Register Now
      </a>
    </div>
  </div>
</div>



  );
}
