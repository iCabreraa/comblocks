"use client";

import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const blockRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (blockRef.current) observer.observe(blockRef.current);
    return () => {
      if (blockRef.current) observer.unobserve(blockRef.current);
    };
  }, []);

  return (
    <footer className="w-full bg-black text-white px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40 pt-32 pb-20 border-t border-white/10 text-sm">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col gap-20">
        {/* Bloque superior - Marca + frase inspiradora */}
        <div
          ref={blockRef}
          className={`text-center flex flex-col items-center gap-3 px-4 transition-all duration-[1500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-white text-xl sm:text-2xl font-semibold tracking-wide">
            Comblocks
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md">
            Structure what matters. Empower your information system.
          </p>

          {/* Línea animada con glow */}
          <div
            className={`h-[2px] mt-2 transition-all duration-[3000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] origin-left bg-white ${
              animate
                ? "w-3/4 sm:w-2/3 md:w-1/2 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                : "w-0"
            }`}
          />
        </div>

        {/* Grid de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left px-4">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="text-white font-semibold text-base">Netherlands</p>
            <p className="text-neutral-400">Scheveningen, The Hague</p>
            <p className="text-neutral-400">+31 6 1234 5678</p>
            <p className="text-neutral-400">hello@comblocks.io</p>
          </div>

          <div className="flex flex-col gap-2 items-center md:items-end">
            <p className="text-white font-semibold text-base">Spain</p>
            <p className="text-neutral-400">Madrid, España</p>
            <p className="text-neutral-400">+34 612 345 678</p>
            <p className="text-neutral-400">spain@comblocks.io</p>
          </div>
        </div>

        {/* Separador */}
        <div className="h-px w-full bg-white/10" />

        {/* Redes + política */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-white text-xl">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="transition-colors duration-300 hover:text-[#0077b5]"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="transition-colors duration-300 hover:text-[#e1306c]"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              className="transition-colors duration-300 hover:text-[#1877f2]"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              className="transition-colors duration-300 hover:text-[#ff0000]"
            >
              <FaYoutube />
            </Link>
          </div>

          <div className="flex gap-4 text-neutral-500 text-xs">
            {["privacy", "cookies", "terms"].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className="transition-colors duration-300 hover:text-white"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
        </div>

        {/* Derechos */}
        <div className="text-neutral-500 text-xs text-center pt-10">
          © {new Date().getFullYear()} Comblocks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
