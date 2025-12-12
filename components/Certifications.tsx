import React from 'react';

const Certifications = () => {
  return (
    <section className="py-12 bg-white dark:bg-[#111722] border-t border-[#e5e7eb] dark:border-[#243047]">
      <div className="layout-content-container flex flex-col items-center max-w-[960px] mx-auto px-4 md:px-10">
        <h3 className="text-[#111418] dark:text-white text-lg font-bold mb-8">Security First Architecture</h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center gap-2 group">
            <div className="h-20 w-20 rounded-full bg-[#f3f4f6] dark:bg-[#1a2232] flex items-center justify-center border border-[#e5e7eb] dark:border-[#344465] group-hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-4xl text-[#637588] dark:text-[#93a5c8] group-hover:text-primary">verified_user</span>
            </div>
            <span className="text-sm font-semibold text-[#637588] dark:text-[#93a5c8]">SOC 2 Type II</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <div className="h-20 w-20 rounded-full bg-[#f3f4f6] dark:bg-[#1a2232] flex items-center justify-center border border-[#e5e7eb] dark:border-[#344465] group-hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-4xl text-[#637588] dark:text-[#93a5c8] group-hover:text-primary">lock</span>
            </div>
            <span className="text-sm font-semibold text-[#637588] dark:text-[#93a5c8]">ISO 27001</span>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <div className="h-20 w-20 rounded-full bg-[#f3f4f6] dark:bg-[#1a2232] flex items-center justify-center border border-[#e5e7eb] dark:border-[#344465] group-hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-4xl text-[#637588] dark:text-[#93a5c8] group-hover:text-primary">gpp_good</span>
            </div>
            <span className="text-sm font-semibold text-[#637588] dark:text-[#93a5c8]">GDPR Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
