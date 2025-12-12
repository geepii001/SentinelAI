import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e5e7eb] dark:border-b-[#243047] bg-white dark:bg-[#111722]/90 backdrop-blur-md px-10 py-3">
      <div className="flex items-center gap-4 text-[#111418] dark:text-white">
        <div className="size-8 text-primary">
          <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">SentinelAI</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8 hidden md:flex">
        <div className="flex items-center gap-9">
          <a className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Solutions</a>
          <a className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Pricing</a>
          <a className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Documentation</a>
        </div>
        <div className="flex gap-2">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
            <span className="truncate">Start Free Scan</span>
          </button>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f3f4f6] dark:bg-[#243047] hover:bg-[#e5e7eb] dark:hover:bg-[#344465] text-[#111418] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors">
            <span className="truncate">Login</span>
          </button>
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <span className="material-symbols-outlined text-[#111418] dark:text-white cursor-pointer">menu</span>
      </div>
    </header>
  );
};

export default Navbar;
