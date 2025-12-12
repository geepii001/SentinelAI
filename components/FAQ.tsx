import React from 'react';

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#111722]">
      <div className="layout-content-container flex flex-col max-w-[800px] mx-auto px-4 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-[#111418] dark:text-white text-3xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="flex flex-col gap-4">
          <details className="group rounded-lg border border-[#e5e7eb] dark:border-[#344465] bg-[#f9fafb] dark:bg-[#1a2232] open:bg-white dark:open:bg-[#1a2232]">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-[#111418] dark:text-white list-none">
              <span>How does the Pay As You Go model work?</span>
              <span className="transition group-open:rotate-180">
                <span className="material-symbols-outlined">expand_more</span>
              </span>
            </summary>
            <div className="border-t border-[#e5e7eb] dark:border-[#344465] p-6 text-[#637588] dark:text-[#93a5c8] text-base leading-relaxed">
              Our Pay As You Go model is perfect for smaller teams or irregular usage. You purchase credits that are deducted per scan based on the size of the repository. Credits never expire.
            </div>
          </details>
          <details className="group rounded-lg border border-[#e5e7eb] dark:border-[#344465] bg-[#f9fafb] dark:bg-[#1a2232] open:bg-white dark:open:bg-[#1a2232]">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-[#111418] dark:text-white list-none">
              <span>Is SentinelAI safe for private repositories?</span>
              <span className="transition group-open:rotate-180">
                <span className="material-symbols-outlined">expand_more</span>
              </span>
            </summary>
            <div className="border-t border-[#e5e7eb] dark:border-[#344465] p-6 text-[#637588] dark:text-[#93a5c8] text-base leading-relaxed">
              Absolutely. SentinelAI is SOC2 Type II compliant and processes your code in ephemeral, isolated containers. Your code is never stored longer than the duration of the scan and is never used to train our public models without explicit enterprise consent.
            </div>
          </details>
          <details className="group rounded-lg border border-[#e5e7eb] dark:border-[#344465] bg-[#f9fafb] dark:bg-[#1a2232] open:bg-white dark:open:bg-[#1a2232]">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-[#111418] dark:text-white list-none">
              <span>Can I integrate this with Jenkins or GitLab?</span>
              <span className="transition group-open:rotate-180">
                <span className="material-symbols-outlined">expand_more</span>
              </span>
            </summary>
            <div className="border-t border-[#e5e7eb] dark:border-[#344465] p-6 text-[#637588] dark:text-[#93a5c8] text-base leading-relaxed">
              Yes, we offer native plugins for Jenkins, GitLab CI, GitHub Actions, CircleCI, and Azure DevOps. You can set up pipeline gates to block builds if critical vulnerabilities are detected.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
