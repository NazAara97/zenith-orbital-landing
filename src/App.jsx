

import React, { useEffect } from "react";

// Import images from src/assets
import heroImg from "./assets/hero.jpg";
import aboutImg from "./assets/about.jpg";
import conciergeImg from "./assets/concierge.jpg";

// Replace the placeholder strings below with your AI-generated copy/images.
const HERO_TAGLINE = "Experience Orbit, Embrace Infinity";
const HERO_SUB = "Where every orbit feels like a first-class adventure.";
const ABOUT_TEXT = `Step aboard Zenith Orbital Resorts and leave the ordinary behind. Drift above Earth, where cities sparkle like constellations and oceans stretch into infinity. Each stay blends unrivaled comfort with moments of wonder. Dine under stars that feel within reach, float effortlessly in zero gravity, or simply watch the sunrise ripple across continents. Every detail is curated so you can play, explore, and relax without a care. Exclusive, yet inviting. Luxurious, yet playful. In 2030, space isn’t just a destination—it’s a playground, a sanctuary, and a spectacle. At Zenith, the universe feels close, personal, and unforgettable.`;
const CONCIERGE_TEXT = `Always present, never intrusive. Your AI concierge anticipates your desires, orchestrates experiences, and keeps every orbit elegant, playful, and perfectly tailored to you.`;
const INVESTOR_PITCH = `The space-tourism market is poised for exponential growth, with affluent travelers seeking experiences beyond Earth. Zenith Orbital Resorts offers a differentiated approach: ultra-luxury orbital stays paired with a proprietary AI concierge, delivering curated, effortless, and unforgettable journeys. Unlike traditional operators, we combine exclusivity with intelligent personalization, creating a premium, repeatable experience. Our modular orbital resorts are designed for scalability, enabling rapid expansion to multiple orbits and destinations. Advances in reusable launch vehicles, AI, and hospitality technology make 2030 the perfect moment to lead this emerging market. Zenith isn’t just offering trips to space—it’s defining a new standard of luxury exploration, capturing high-margin customers and establishing a brand synonymous with cosmic adventure.`;
const CTA_OPTIONS = ["Reserve Your Orbit", "Claim Your Seat", "Book the Stars"];
const CTA_TEXT = CTA_OPTIONS[0]; // Pick the first one, or swap dynamically later

export default function App() {
  useEffect(() => {
    // Set SEO title
    document.title = "Zenith Orbital Resorts – Play Among the Stars";

    // Set meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Float above Earth in luxury, dine under stars, and explore orbit with your personal AI concierge. Your 2030 cosmic getaway awaits."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Float above Earth in luxury, dine under stars, and explore orbit with your personal AI concierge. Your 2030 cosmic getaway awaits.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="antialiased text-slate-900 bg-white min-h-screen">
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* Top navigation */}
      <header className="fixed w-full bg-transparent z-30">
        <nav className="max-w-7xl mx-auto p-6 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-wide">Zenith Orbital Resorts</div>
          <div className="space-x-6 hidden md:flex">
            <a href="#about" className="hover:underline">About</a>
            <a href="#concierge" className="hover:underline">AI Concierge</a>
            <a href="#investors" className="hover:underline">Investors</a>
            <a href="#booking" className="px-4 py-2 border rounded-md">Book</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="relative pt-24 pb-20 min-h-[56vh] flex items-center"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{HERO_TAGLINE}</h1>
            <p className="mt-4 text-lg md:text-xl opacity-90">{HERO_SUB}</p>
            <div className="mt-8 flex gap-4">
              <a
                href="#booking"
                className="inline-block bg-white text-slate-900 px-6 py-3 rounded-full font-semibold shadow-lg"
              >
                {CTA_TEXT}
              </a>
              <a
                href="#about"
                className="inline-block border border-white/40 px-5 py-3 rounded-full text-white"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About the Experience</h2>
            <p className="text-lg leading-relaxed">{ABOUT_TEXT}</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={aboutImg}
              alt="Interior of Zenith Orbital Resort"
              className="w-full h-64 object-cover md:h-full"
            />
          </div>
        </div>
      </section>


       {/* AI Concierge */}
      <section id="concierge" className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold">AI Concierge</h3>
            <p className="mt-2 text-slate-600">
              A playful, premium assistant for every part of your journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={conciergeImg}
                alt="AI Concierge Illustration"
                className="w-full h-64 object-cover md:h-full"
              />
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-white rounded-2xl shadow">
                <h4 className="font-semibold mb-2">Personalized Itineraries</h4>
                <p className="text-sm text-slate-600">{CONCIERGE_TEXT}</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow">
                <h4 className="font-semibold mb-2">Onboard Comfort</h4>
                <p className="text-sm text-slate-600">
                  From dining suggestions to gravity-safe sleep cycles, tailored for you.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow">
                <h4 className="font-semibold mb-2">Seamless Booking</h4>
                <p className="text-sm text-slate-600">
                  Secure reservations, pre-flight health briefings, and itinerary updates in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Reserve Your Orbit</h3>
        <p className="text-slate-600 mb-6">Limited launches. Curated guest lists. Exceptional experiences.</p>
        <a
          className="inline-block bg-slate-900 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
          href="#"
        >
          Start your reservation
        </a>
      </section>

      {/* Investor Pitch */}
       <section
        id="investors"
        className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Investor Pitch</h3>
            <p className="max-w-3xl text-lg opacity-90">{INVESTOR_PITCH}</p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={aboutImg}
              alt="Investor Presentation"
              className="w-full h-64 object-cover md:h-full"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="text-sm">© {new Date().getFullYear()} Zenith Orbital Resorts</div>
          <div className="text-sm space-x-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
