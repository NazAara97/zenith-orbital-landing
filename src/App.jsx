import React, { useEffect } from "react";

// Import images from src/assets
import heroImg from "./assets/hero.png";
import aboutImg from "./assets/about.png";
import conciergeImg from "./assets/concierge.png";
import investImg from "./assets/invest.png";







// Copy text
const HERO_TAGLINE = "Experience Orbit, Embrace Infinity";
const HERO_SUB = "Where every orbit feels like a first-class adventure.";
const ABOUT_TEXT = `Step aboard Zenith Orbital Resorts and leave the ordinary behind. Drift above Earth, where cities sparkle like constellations and oceans stretch into infinity. Each stay blends unrivaled comfort with moments of wonder. Dine under stars that feel within reach, float effortlessly in zero gravity, or simply watch the sunrise ripple across continents. Every detail is curated so you can play, explore, and relax without a care. Exclusive, yet inviting. Luxurious, yet playful. In 2030, space isn’t just a destination—it’s a playground, a sanctuary, and a spectacle. At Zenith, the universe feels close, personal, and unforgettable.`;
const CONCIERGE_TEXT = `Always present, never intrusive. Your AI concierge anticipates your desires, orchestrates experiences, and keeps every orbit elegant, playful, and perfectly tailored to you.`;
const INVESTOR_PITCH = `The space-tourism market is poised for exponential growth, with affluent travelers seeking experiences beyond Earth. Zenith Orbital Resorts offers a differentiated approach: ultra-luxury orbital stays paired with a proprietary AI concierge, delivering curated, effortless, and unforgettable journeys. Unlike traditional operators, we combine exclusivity with intelligent personalization, creating a premium, repeatable experience. Our modular orbital resorts are designed for scalability, enabling rapid expansion to multiple orbits and destinations. Advances in reusable launch vehicles, AI, and hospitality technology make 2030 the perfect moment to lead this emerging market. Zenith isn’t just offering trips to space—it’s defining a new standard of luxury exploration, capturing high-margin customers and establishing a brand synonymous with cosmic adventure.`;
const CTA_OPTIONS = ["Reserve Your Orbit", "Claim Your Seat", "Book the Stars"];
const CTA_TEXT = CTA_OPTIONS[0];
export default function App() {
  useEffect(() => {
    document.title = "Zenith Orbital Resorts – Play Among the Stars";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", "Float above Earth in luxury, dine under stars, and explore orbit with your personal AI concierge. Your 2030 cosmic getaway awaits.");
    } else {
      const metaTag = document.createElement("meta");
      metaTag.name = "description";
      metaTag.content = "Float above Earth in luxury, dine under stars, and explore orbit with your personal AI concierge. Your 2030 cosmic getaway awaits.";
      document.head.appendChild(metaTag);
    }
  }, []);

  return (
    <div className="antialiased text-gray-100 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 font-sans">
      <style>{`
        html { scroll-behavior: smooth; }
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;900&family=Roboto:wght@400;500;700&display=swap');
        .font-heading { font-family: 'Raleway', sans-serif; }
        .accent { color: #FFD700; }
        .bg-accent { background: linear-gradient(to right, #FFD700, #FFA500); }
      `}</style>

  {/* Navigation */}    
<header className="fixed w-full z-30">
  <nav className="max-w-7xl mx-auto p-6 flex justify-between items-center">
    {/* Site Title */}
    <div className="text-10xl md:text-10xl font-heading font-bold" style={{ color: "#B8860B", fontSize: "6rem" }}>
      Zenith Orbital Resorts
    </div>

    {/* Navigation links aligned to the right */}
    <div className="hidden md:flex items-center ml-auto">
      <div className="flex items-center space-x-6">
        <a href="#about" className="hover:accent transition">About</a>
        <div className="border-l border-gray-500 h-6"></div>

        <a href="#concierge" className="hover:accent transition">AI Concierge</a>
        <div className="border-l border-gray-500 h-6"></div>

        <a href="#investors" className="hover:accent transition">Investors</a>
        <div className="border-l border-gray-500 h-6"></div>

        <a href="#booking" className="px-4 py-2 border border-yellow-400 rounded-md hover:bg-accent hover:text-gray-900 transition">Book</a>
      </div>
    </div>
  </nav>
</header>




      {/* Hero */}
      <section
        id="hero"
        className="relative pt-28 pb-24 min-h-[75vh] flex items-center"
        style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-heading font-extrabold leading-tight" style={{ color: " darkred", fontWeight: 600 }}>
  {HERO_TAGLINE}
</h1>
          <p
  className="mt-4 text-xl md:text-2xl tracking-wide font-extrabold"
  style={{ color: "black", fontWeight: 600, opacity: 1 }}
>
  {HERO_SUB}
</p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a href="#booking" className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform"style={{ color: " darkred",fontWeight: 600 }}>
              {CTA_OPTIONS[0]}
            </a>
            </div>
             {/* Separate Learn More button */}
    <div className="mt-4 flex justify-center md:justify-start">
      <a href="#about" className="inline-block border border-white/40 px-6 py-3 rounded-full text-white hover:bg-white hover:text-gray-900 transition" style={{ color: "darkblue",fontWeight: 600 }}>
        Learn More
      </a>
    </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold accent mb-6 relative before:absolute before:left-0 before:bottom-0 before:w-24 before:h-1 before:bg-yellow-400">
              About the Experience
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">{ABOUT_TEXT}</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img src={aboutImg} alt="About Zenith Resort" className="w-full h-64 md:h-full object-cover" style={{ width: "1550px", height: "1080px" }}/>
          </div>
        </div>
      </section>

      {/* AI Concierge */}
      <section id="concierge" className="bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold accent">AI Concierge</h3>
            <p className="mt-4 text-gray-300 text-lg">A playful, premium assistant for every part of your journey.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img src={conciergeImg} alt="AI Concierge Illustration" className="w-full h-64 md:h-full object-cover"style={{ width: "1500px", height: "1080px" }}/>
            </div>
            <div className="space-y-6">
              {["Personalized Itineraries","Onboard Comfort","Seamless Booking"].map((title,i)=>(
                <div key={i} className="p-6 bg-gray-700 rounded-2xl shadow-lg">
                  <h4 className="font-heading font-semibold text-xl mb-2 accent">{title}</h4>
                  <p className="text-gray-300">
                    {i===0 ? CONCIERGE_TEXT : i===1 ? "From dining suggestions to gravity-safe sleep cycles, tailored for you." : "Secure reservations, pre-flight health briefings, and itinerary updates in one place."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 accent">Reserve Your Orbit</h3>
        <p className="text-gray-300 mb-8">Limited launches. Curated guest lists. Exceptional experiences.</p>
        <a href="#" className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
          Start your reservation
        </a>
      </section>

      {/* Investor Pitch */}
      <section id="investors" className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 accent">Investor Pitch</h3>
            <p className="text-gray-300 text-lg opacity-90">{INVESTOR_PITCH}</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img src={investImg} alt="Investor Presentation" className="w-full h-64 md:h-full object-cover"style={{ width: "1550px", height: "1080px" }}/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm space-y-4 md:space-y-0">
          <div>© {new Date().getFullYear()} Zenith Orbital Resorts</div>
          <div className="space-x-4">
            <a href="#" className="hover:accent transition">Privacy</a>
            <a href="#" className="hover:accent transition">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
