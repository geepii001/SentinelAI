import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#111722] border-t border-[#e5e7eb] dark:border-[#243047] py-12 px-10">
      <div className="layout-content-container max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center gap-2 text-[#111418] dark:text-white">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-tight">SentinelAI</h2>
          </div>
          <p className="text-sm text-[#637588] dark:text-[#93a5c8]">
            Next-gen code security for the modern enterprise. Detect, analyze, and remediate vulnerabilities at the speed of AI.
          </p>
          <div className="flex gap-4 mt-2">
            <a className="text-[#637588] dark:text-[#93a5c8] hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
            <a className="text-[#637588] dark:text-[#93a5c8] hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">language</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
          <div className="flex flex-col gap-4">
            <h4 className="text-[#111418] dark:text-white font-bold text-sm uppercase tracking-wide">Product</h4>
            <a className="text-sm text-[#637588] dark:text-[#93a5c8] hover:text-primary transition-colors" href="#">Features</a>
            <a className="text-sm text-[#637588] dark:text-[#93a5c8] hover:text-primary transition-colors" href="#">Integrations</a>
            <a className="text-sm text-[#637588] dark:text-[#93a5c8] hover:text-primary transition-colors" href="#">Pricing</a>
            <a className="text-sm text-[#637588] dark:text-[#93a5c8] hover:text-primary transition-colors" href="#">Changelog</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[#111418] dark:text-white font-bold text-sm uppercase tracking-wide">Resources</h4>
            <a className="text-sm text-[#637588] dark:text-[#93a5c8] hover:text-primary transition-colors" href="#">Documentation</a>
            <a className="text-sm text-[#637588] dark:text-[#93a5c8] hover:text-primary transition-colors" href="#">API Reference</a>
            <a className="text-sm text-[#637588] dark:text-[#93a5c8] hover:text-primary transition-colors" href="#">Blog</a>
            <a className="text-sm text-[#637588] dark:text-[#93a5c8] hover:text-primary transition-colors" href="#">Community</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[#111418] dark:text-white font-bold text-sm uppercase tracking-wide">Company</h4>
            <a className="text-sm text-[#637588] dark:text-[#93a5c8] hover:text-primary transition-colors" href="#">About</a>
            <a className="text-sm text-[#637588] dark:text-[#93a5c8] hover:text-primary transition-colors" href="#">Careers</a>
            <a className="text-sm text-[#637588] dark:text-[#93a5c8] hover:text-primary transition-colors" href="#">Legal</a>
            <a className="text-sm text-[#637588] dark:text-[#93a5c8] hover:text-primary transition-colors" href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className="layout-content-container max-w-[1200px] mx-auto mt-12 pt-8 border-t border-[#e5e7eb] dark:border-[#243047] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#637588] dark:text-[#93a5c8]">© 2023 SentinelAI Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="text-xs text-[#637588] dark:text-[#93a5c8] hover:text-[#111418] dark:hover:text-white" href="#">Privacy Policy</a>
          <a className="text-xs text-[#637588] dark:text-[#93a5c8] hover:text-[#111418] dark:hover:text-white" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
