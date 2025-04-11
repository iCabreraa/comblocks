"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={clsx(
        "fixed top-6 left-1/2 z-50 w-[calc(100%-48px)] max-w-screen-xl -translate-x-1/2 transition-all duration-300 px-6 py-3",
        isScrolled && isVisible
          ? "bg-white text-black rounded-full shadow-md backdrop-blur-md"
          : isScrolled && !isVisible
          ? "-translate-y-28"
          : "bg-transparent text-white"
      )}
    >
      <div className="flex items-center justify-between text-sm font-medium text-black dark:text-white">
        {/* Logo + Marca */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={isScrolled && isVisible ? "/logo-dark.png" : "/logo-light.png"}
            alt="Comblocks Logo"
            width={65}
            height={65}
            className="transition-all"
          />

          <span
            className={clsx(
              "text-lg font-semibold tracking-wide transition-colors duration-300",
              isScrolled ? "text-black" : "text-white"
            )}
          >
            Comblocks
          </span>
        </Link>

        {/* Botón hamburguesa solo visible en mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 focus:outline-none  cursor-pointer"
        >
          <Menu
            className={clsx(
              "w-6 h-6 transition-colors duration-300",
              isScrolled && isVisible ? "text-black" : "text-white"
            )}
          />
        </button>

        {/* Menú desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Services", "App"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={clsx(
                "relative text-sm transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full",
                isScrolled && isVisible
                  ? "text-black hover:text-neutral-700"
                  : "text-white hover:text-neutral-200"
              )}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <Link
          href="#about"
          className={clsx(
            "hidden md:inline-block rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300",
            isScrolled
              ? "bg-black text-white border-black hover:bg-white hover:text-black"
              : "bg-white text-black border-black hover:bg-black hover:text-white"
          )}
        >
          About us
        </Link>
      </div>

      {/* Menú desplegable mobile */}
      {isOpen && (
        <div
          className={clsx(
            "md:hidden absolute top-full mt-4 left-0 w-full bg-white rounded-lg shadow-lg z-40 flex flex-col items-center px-6 py-6 text-black",
            "animate-fade-in-slide",
            isScrolled ? "border border-black/10" : ""
          )}
        >
          {["Home", "Services", "App"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={clsx(
                "relative w-full text-center py-4 text-base transition duration-300 border-b border-gray-200",
                "after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%] after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-1/2"
              )}
            >
              {item}
            </Link>
          ))}

          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="mt-6 w-full text-center rounded-full border border-black bg-white px-6 py-3 text-sm font-semibold hover:bg-black hover:text-white transition"
          >
            About us
          </Link>
        </div>
      )}
    </header>
  );
}
