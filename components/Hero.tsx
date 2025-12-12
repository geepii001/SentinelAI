import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 md:py-20 px-4 md:px-10 lg:px-40 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-background-light/90 dark:bg-background-dark/90"></div>
      <div className="relative z-10 layout-content-container flex flex-col max-w-[1200px] w-full">
        <div className="@container">
          <div className="flex flex-col gap-8 px-4 py-6 md:py-10 lg:flex-row items-center">
            <div className="flex flex-col gap-6 lg:w-1/2 lg:pr-10 text-center lg:text-left">
              <div className="flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse"></span>
                  <span className="text-xs font-bold text-primary dark:text-primary tracking-wide uppercase">New: AI-Powered Remediation</span>
                </div>
                <h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl">
                  Enterprise-Level AI Code Security Audits.
                </h1>
                <h2 className="text-[#637588] dark:text-[#93a5c8] text-lg font-normal leading-normal max-w-[600px] mx-auto lg:mx-0">
                  Analyze full project folders and detect vulnerabilities before they reach production with our advanced neural engine.
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/25 transition-all transform hover:scale-105">
                  <span className="truncate">Start Free Scan</span>
                </button>
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white dark:bg-[#243047] border border-[#e5e7eb] dark:border-[#344465] hover:bg-[#f3f4f6] dark:hover:bg-[#344465]/80 text-[#111418] dark:text-white text-base font-bold leading-normal tracking-[0.015em] transition-all">
                  <span className="truncate">Request Enterprise Demo</span>
                </button>
              </div>
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-sm text-[#637588] dark:text-[#93a5c8]">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-accent-teal text-[18px]">check_circle</span>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-accent-teal text-[18px]">check_circle</span>
                  <span>SOC2 Compliant</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent-teal rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-full aspect-video bg-surface-dark rounded-xl shadow-2xl overflow-hidden border border-[#344465]" data-alt="Cybersecurity dashboard interface showing code analysis and vulnerability scanning results">
                <div className="flex h-full w-full flex-col">
                  <div className="flex items-center gap-2 border-b border-[#344465] px-4 py-3 bg-[#111722]">
                    <div className="h-3 w-3 rounded-full bg-[#ef4444]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#f59e0b]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#10b981]"></div>
                    <div className="ml-4 h-2 w-48 rounded-full bg-[#243047]"></div>
                  </div>
                  <div className="flex flex-1 p-6 gap-6">
                    <div className="w-1/3 flex flex-col gap-3">
                      <div className="h-24 rounded bg-[#243047]/50 animate-pulse"></div>
                      <div className="h-24 rounded bg-[#243047]/30"></div>
                      <div className="h-24 rounded bg-[#243047]/30"></div>
                    </div>
                    <div className="w-2/3 flex flex-col gap-4">
                      <div className="flex justify-between">
                        <div className="h-8 w-32 rounded bg-primary/20"></div>
                        <div className="h-8 w-24 rounded bg-accent-teal/20"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-full rounded bg-[#243047]"></div>
                        <div className="h-2 w-3/4 rounded bg-[#243047]"></div>
                        <div className="h-2 w-5/6 rounded bg-[#243047]"></div>
                      </div>
                      <div className="mt-4 p-4 rounded bg-[#111722] border border-[#ef4444]/30 border-l-4 border-l-[#ef4444]">
                        <div className="flex gap-3">
                          <span className="material-symbols-outlined text-[#ef4444]">warning</span>
                          <div className="flex flex-col gap-1 w-full">
                            <div className="h-3 w-40 rounded bg-[#ef4444]/20"></div>
                            <div className="h-2 w-full rounded bg-[#243047]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
