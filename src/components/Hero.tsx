"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40">
      {/* Gradiente más grande y claro desde esquina superior derecha */}
      <div className="absolute top-[-30%] right-[-30%] w-[160vw] h-[160vw] bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent_70%)] pointer-events-none z-0" />

      {/* Contenedor principal: izquierda arriba, derecha más abajo */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-6xl items-start justify-center gap-16 lg:gap-12 pt-40 pb-40">
        {/* IZQUIERDA - SLOGAN */}
        <div className="w-full lg:w-[60%] flex flex-col gap-24 justify-start">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7rem] font-light leading-[1.1] tracking-tight font-[var(--font-geist-sans)] gap-16 sm:gap-24">
            Activate your
            <br />
            <span className="font-semibold text-white">ISMS </span>potential
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 max-w-[18rem] sm:max-w-[20rem] leading-relaxed gap-16 sm:gap-24">
            Organize risks, projects and resources — all in one.
          </p>
        </div>

        {/* DERECHA - CTA MÁS ABAJO */}
        <div className="w-full lg:w-[40%] flex flex-col gap-6 items-start mt-20 lg:mt-85 max-w-md">
          <p className="text-lg sm:text-2xl text-neutral-200 max-w-md xl:max-w-lg leading-[1.75]">
            Explore the Comblocks App and streamline how your team manages
            compliance, governance and growth — from risk and project management
            to documentation and strategic roadmaps.
          </p>

          <Link
            href="#app"
            className="rounded-full border border-white text-white px-6 py-3 text-sm sm:text-base font-semibold transition duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:bg-white hover:text-black"
          >
            Explore App
          </Link>
        </div>
      </div>
    </section>
  );
}
