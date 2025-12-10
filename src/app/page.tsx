"use client";

import React from "react";
import { DM_Serif_Display, Inter } from "next/font/google";
import { motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

// --- Font Configuration ---
const serif = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

// --- Color Palette ---
const THEME = {
  bg: "#163C26",
  cream: "#F2E8CF",
  pillBg: "rgba(13, 38, 24, 0.4)",
  darkGreen: "#0D2618",
};

// --- Menu Items ---
const MENU_ITEMS = [
  {
    name: "Double Espresso",
    price: "$4.50",
    desc: "Rich, intense, and pure energy.",
  },
  {
    name: "Hazelnut Latte",
    price: "$5.50",
    desc: "Toasted hazelnut syrup with silk foam.",
  },
  {
    name: "Iced Americano",
    price: "$4.00",
    desc: "Double shot over artisan ice.",
  },
  {
    name: "Matcha Fusion",
    price: "$6.00",
    desc: "Ceremonial grade matcha with oat milk.",
  },
  {
    name: "Caramel Macchiato",
    price: "$5.80",
    desc: "Vanilla syrup, milk, espresso, caramel drizzle.",
  },
  {
    name: "Mocha Supreme",
    price: "$6.20",
    desc: "Dark chocolate ganache mixed with espresso.",
  },
];

export default function CafePage() {
  return (
    <div
      className={`min-h-screen flex flex-col relative ${sans.className}`}
      style={{ backgroundColor: THEME.bg, color: THEME.cream }}
    >
      {/* ===================== TOP NOTIFICATION BAR ===================== */}
      <div
        className="fixed top-0 w-full py-2 text-center text-xs font-medium tracking-wide flex items-center justify-center z-[60] border-b border-[#0D2618]/10"
        style={{ backgroundColor: THEME.cream, color: THEME.darkGreen }}
      >
        <span>Buy one coffee, get one free — this week only (April 14–20)</span>
        <button className="absolute right-4 hover:opacity-70">
          <X size={14} />
        </button>
      </div>

      {/* ===================== NAVIGATION ===================== */}
      <nav className="fixed top-12 left-0 w-full flex justify-center z-[60] pointer-events-none">
        <div
          className="flex items-center gap-8 px-8 py-3 rounded-full backdrop-blur-md border border-white/5 shadow-xl pointer-events-auto transition-transform hover:scale-105"
          style={{ backgroundColor: THEME.pillBg }}
        >
          {["Menu", "Locations"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}

          {/* ----- LOGO UPDATE HERE ----- */}
          <div
            className="w-10 h-10 rounded-full shadow-md overflow-hidden relative"
            style={{ backgroundColor: THEME.cream }}
          >
            <img
              src="/logo.jpg"
              alt="Cafe Logo"
              className="w-full h-full object-cover"
            />
          </div>
          {/* -------------------------- */}

          {["About Us", "News"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* ===================== HERO SECTION ===================== */}
      <section className="h-screen w-full relative flex flex-col items-center justify-start pt-36 overflow-hidden">
        {/* --- HERO TEXT & BUTTONS --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-50 space-y-6 px-4 relative"
        >
          <h1
            className={`${serif.className} text-6xl md:text-9xl leading-[0.9] tracking-tight`}
          >
            Life Begins <br /> After Coffee
          </h1>

          <p className="text-lg font-light opacity-80 tracking-wide max-w-lg mx-auto">
            Because great coffee is the start of something even greater.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <button className="px-8 py-3 rounded-full font-semibold bg-[#F2E8CF] text-[#0D2618] hover:scale-105 transition-transform shadow-lg cursor-pointer">
              Explore Menu
            </button>
            <button className="px-8 py-3 rounded-full font-semibold border border-[#F2E8CF] hover:bg-white/10 transition-colors cursor-pointer">
              Our Locations
            </button>
          </div>
        </motion.div>

        {/* ===================== CUPS (LAYERED BEHIND MENU) ===================== */}
        <div
          className="
          absolute 
          bottom-[-120px] 
          left-0 w-full 
          flex justify-center 
          items-end 
          z-10 
          pointer-events-none
        "
        >
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="/left.avif"
            className="w-[180px] md:w-[260px] object-contain -mr-10 grayscale-[0.2]"
          />

          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            src="/center.avif"
            className="w-[240px] md:w-[320px] object-contain drop-shadow-2xl"
          />

          <motion.img
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="/right.avif"
            className="w-[180px] md:w-[260px] object-contain -ml-10 grayscale-[0.2]"
          />
        </div>
      </section>

      {/* ===================== MENU SECTION (THE MASK) ===================== */}
      <section
        className="
          min-h-screen relative 
          z-20 
          pt-32 pb-24 
          rounded-t-[3rem] 
          shadow-[0_-30px_60px_rgba(0,0,0,0.4)]
        "
        style={{ backgroundColor: THEME.cream }}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2
              className={`${serif.className} text-5xl md:text-7xl text-[#0D2618] leading-tight`}
            >
              Find and Get <br /> What You Love
            </h2>
          </div>

          {/* Featured Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-32 text-center">
            <div className="flex flex-col items-center gap-6 group cursor-pointer">
              <div className="w-64 h-64 rounded-full bg-[#163C26] flex items-center justify-center overflow-hidden shadow-xl group-hover:scale-105 transition-transform">
                <img src="/left.avif" className="w-40 mt-10 object-contain" />
              </div>
              <h3 className={`${serif.className} text-3xl text-[#0D2618]`}>
                Coffee
              </h3>
            </div>

            <div className="flex flex-col items-center gap-6 group cursor-pointer">
              <div className="w-64 h-64 rounded-full bg-[#163C26] flex items-center justify-center overflow-hidden shadow-xl group-hover:scale-105 transition-transform">
                <img src="/center.avif" className="w-48 mt-10 object-contain" />
              </div>
              <h3 className={`${serif.className} text-3xl text-[#0D2618]`}>
                Cold Drinks
              </h3>
            </div>

            <div className="flex flex-col items-center gap-6 group cursor-pointer">
              <div className="w-64 h-64 rounded-full bg-[#163C26] flex items-center justify-center overflow-hidden shadow-xl group-hover:scale-105 transition-transform">
                <img src="/right.avif" className="w-40 mt-10 object-contain" />
              </div>
              <h3 className={`${serif.className} text-3xl text-[#0D2618]`}>
                Bakery
              </h3>
            </div>
          </div>

          {/* Full Menu List */}
          <div>
            <div className="text-center mb-12">
              <span className="text-[#0D2618] uppercase tracking-[0.3em] text-xs font-bold">
                Full Menu
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {MENU_ITEMS.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex justify-between items-end border-b border-[#0D2618]/10 pb-4 hover:border-[#0D2618] transition-colors cursor-pointer"
                >
                  <div>
                    <h4
                      className={`${serif.className} text-2xl text-[#163C26] mb-1 group-hover:text-[#D4AF37] transition-colors`}
                    >
                      {item.name}
                    </h4>
                    <p className="text-[#0D2618]/60 text-sm">{item.desc}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-[#0D2618] font-bold text-lg">
                      {item.price}
                    </span>
                    <ArrowRight
                      size={18}
                      className="text-[#0D2618] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        

        {/* ===================== TESTIMONIALS SECTION ===================== */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className={`${serif.className} text-5xl md:text-6xl text-[#163C26] mb-4`}>
            What People <br /> Love About Us
          </h2>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {/* Quote Card */}
            <div className="bg-[#E6D5B0]/40 p-8 rounded-3xl space-y-4">
              <span className="text-[#163C26] text-4xl font-serif">“</span>
              <p className="text-[#163C26] text-sm leading-relaxed font-medium">
                Brewhaus has spoiled other coffee shops for me — in the best way. Great espresso, fresh pastries, and a team that makes you feel like a regular from day one.
              </p>
              <p className="text-[#163C26]/60 text-xs font-bold uppercase tracking-wider mt-4">
                Patrick M. — Espresso lover
              </p>
            </div>
            {/* Image Card */}
            <div className="h-64 rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" 
                alt="Pouring Coffee" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
             {/* Image Card (Top for middle col) */}
             <div className="h-64 rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop" 
                alt="Iced Coffee" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Quote Card */}
            <div className="bg-[#E6D5B0]/40 p-8 rounded-3xl space-y-4">
              <span className="text-[#163C26] text-4xl font-serif">“</span>
              <p className="text-[#163C26] text-sm leading-relaxed font-medium">
                I stop by every morning before work, and it's the best part of my day. The iced latte is my go-to, but I've honestly never had a bad drink here. Everything tastes handcrafted and full of care.
              </p>
              <p className="text-[#163C26]/60 text-xs font-bold uppercase tracking-wider mt-4">
                Jordan T. — Iced latte addict
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {/* Quote Card */}
            <div className="bg-[#E6D5B0]/40 p-8 rounded-3xl space-y-4">
              <span className="text-[#163C26] text-4xl font-serif">“</span>
              <p className="text-[#163C26] text-sm leading-relaxed font-medium">
                Always a warm, welcoming vibe — perfect for a quick coffee or a quiet read. The banana bread? Totally addictive.
              </p>
              <p className="text-[#163C26]/60 text-xs font-bold uppercase tracking-wider mt-4">
                Sofia R. — Coffee fan
              </p>
            </div>
             {/* Image Card */}
             <div className="h-64 rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop" 
                alt="Latte Art" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>

        {/* Bottom Button */}
        <div className="mt-20 flex justify-center">
          <button className="px-10 py-4 bg-[#163C26] text-[#F2E8CF] rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#0D2618] transition-all shadow-lg hover:shadow-xl">
            Our Locations
          </button>
        </div>

      </section>

{/* ===================== LOCATION SECTION ===================== */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className={`${serif.className} text-5xl md:text-6xl text-[#F2E8CF] mb-4`}>
            Visit Us
          </h2>
          <p className="text-[#F2E8CF]/60 text-lg font-light tracking-wide">
            Stop by for your daily brew.
          </p>
        </div>

        {/* Location Content: Map + Big Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch h-auto lg:h-[500px]">
          
          {/* LEFT: Map (Styled to match theme) */}
          <div className="w-full h-[400px] lg:h-full rounded-[2rem] overflow-hidden border-4 border-[#F2E8CF]/10 shadow-2xl relative group">
             
             {/* Google Maps Embed Pinpointing "QQQ6+HQ San Diego" */}
             <iframe 
               width="100%" 
               height="100%" 
               style={{ 
                 border: 0, 
                 // Dark Coffee Theme Filters
                 filter: 'grayscale(100%) invert(92%) contrast(83%)' 
               }} 
               loading="lazy" 
               allowFullScreen 
               referrerPolicy="no-referrer-when-downgrade"
               // We use the 'q' parameter with the specific Plus Code to pinpoint the exact spot
               src="https://maps.google.com/maps?q=QQQ6%2BHQ%20San%20Diego%2C%20California%2C%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed"
             ></iframe>
             
             {/* Deep Green Tint Overlay */}
             <div className="absolute inset-0 bg-[#163C26] mix-blend-overlay opacity-60 pointer-events-none transition-opacity duration-500 group-hover:opacity-40"></div>
          </div>

          {/* RIGHT: Big Location Card */}
          <div className="w-full h-full bg-[#F2E8CF] rounded-[2rem] p-10 md:p-14 flex flex-col justify-center items-start gap-8 shadow-2xl">
            
            <div>
              <span className="text-[#163C26]/60 text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                San Diego
              </span>
              <h3 className={`${serif.className} text-4xl md:text-5xl text-[#163C26]`}>
                Cafe Matinal
              </h3>
            </div>

            <div className="space-y-2">
               <p className="text-[#163C26] text-xl font-medium leading-relaxed">
                 Sorrento Valley Blvd <br/> San Diego, CA 92121
               </p>
               <p className="text-[#163C26]/60 text-sm font-mono pt-2">
                 Plus Code: QQQ6+HQ
               </p>
            </div>

            <div className="space-y-1 w-full max-w-sm">
               <div className="flex justify-between text-[#163C26]/80 text-sm font-medium border-b border-[#163C26]/10 pb-2">
                 <span>Mon - Sat</span>
                 <span>7:00 AM — 5:00 PM</span>
               </div>
               <div className="flex justify-between text-[#163C26]/80 text-sm font-medium pt-2">
                 <span>Sunday</span>
                 <span>7:00 AM — 4:00 PM</span>
               </div>
            </div>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=QQQ6%2BHQ+San+Diego%2C+California%2C+USA" 
              target="_blank"
              className="mt-4 w-full md:w-auto px-10 py-4 bg-[#163C26] text-[#F2E8CF] rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#0D2618] transition-all hover:scale-105 text-center"
            >
               Get Directions
            </a>

          </div>

        </div>
      </section>

        {/* Footer */}
        <div className="mt-32 border-t border-[#0D2618]/10 pt-10 text-center text-[#0D2618]/40 text-xs uppercase tracking-widest pb-10">
          &copy; 2025 Cafe Matinal. All rights reserved.
        </div>
      </section>
    </div>
  );
}
