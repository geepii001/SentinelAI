import React from 'react';

const Trust = () => {
  return (
    <section className="py-10 border-y border-[#e5e7eb] dark:border-[#243047] bg-[#f9fafb] dark:bg-[#161e2c]">
      <div className="layout-content-container flex flex-col max-w-[960px] mx-auto px-4 md:px-10">
        <p className="text-center text-sm font-semibold text-[#637588] dark:text-[#93a5c8] uppercase tracking-wider mb-6">Trusted by security teams at</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 dark:opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
          <div className="flex items-center gap-2 text-xl font-bold text-[#111418] dark:text-white">
            <span className="material-symbols-outlined text-3xl">hexagon</span> HEXA CORP
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-[#111418] dark:text-white">
            <span className="material-symbols-outlined text-3xl">diamond</span> GEMSTONE
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-[#111418] dark:text-white">
            <span className="material-symbols-outlined text-3xl">change_history</span> DELTA SEC
          </div>
          <div className="flex items-center gap-2 text-xl font-bold text-[#111418] dark:text-white">
            <span className="material-symbols-outlined text-3xl">circles</span> ORBITAL
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
