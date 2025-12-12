import React from 'react';

const ComparisonTable = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f3f4f6] dark:bg-[#161e2c]">
      <div className="layout-content-container flex flex-col max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="flex flex-col gap-4 text-center mb-12">
          <h2 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-bold leading-tight">Choose Your Security Tier</h2>
          <p className="text-[#637588] dark:text-[#93a5c8] text-lg">Scalable security for teams of all sizes.</p>
        </div>
        <div className="overflow-x-auto rounded-xl border border-[#e5e7eb] dark:border-[#344465] bg-white dark:bg-surface-dark shadow-xl">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr className="bg-white dark:bg-[#1f293a] border-b border-[#e5e7eb] dark:border-[#344465]">
                <th className="p-6 w-1/4">
                  <span className="text-sm font-semibold text-[#637588] dark:text-[#93a5c8] uppercase">Features</span>
                </th>
                <th className="p-6 w-1/5">
                  <div className="flex flex-col gap-1">
                    <span className="text-xl font-bold text-[#111418] dark:text-white">Basic</span>
                    <span className="text-sm text-[#637588] dark:text-[#93a5c8]">Free Forever</span>
                  </div>
                </th>
                <th className="p-6 w-1/5 bg-primary/5 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl font-bold text-primary">Pro</span>
                    <span className="text-sm text-[#637588] dark:text-[#93a5c8]">$49/user/mo</span>
                  </div>
                </th>
                <th className="p-6 w-1/5">
                  <div className="flex flex-col gap-1">
                    <span className="text-xl font-bold text-[#111418] dark:text-white">Pay As You Go</span>
                    <span className="text-sm text-[#637588] dark:text-[#93a5c8]">$0.05/scan</span>
                  </div>
                </th>
                <th className="p-6 w-1/5">
                  <div className="flex flex-col gap-1">
                    <span className="text-xl font-bold text-[#111418] dark:text-white">Enterprise</span>
                    <span className="text-sm text-[#637588] dark:text-[#93a5c8]">Custom</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5e7eb] dark:divide-[#344465]">
              <tr className="hover:bg-[#f9fafb] dark:hover:bg-[#243047]/50 transition-colors">
                <td className="p-6 font-medium text-[#111418] dark:text-white">Lines of Code / Month</td>
                <td className="p-6 text-[#637588] dark:text-[#93a5c8]">Up to 10k</td>
                <td className="p-6 font-bold text-[#111418] dark:text-white bg-primary/5">Unlimited</td>
                <td className="p-6 text-[#637588] dark:text-[#93a5c8]">Per Usage</td>
                <td className="p-6 font-bold text-[#111418] dark:text-white">Unlimited</td>
              </tr>
              <tr className="hover:bg-[#f9fafb] dark:hover:bg-[#243047]/50 transition-colors">
                <td className="p-6 font-medium text-[#111418] dark:text-white">AI Model Version</td>
                <td className="p-6 text-[#637588] dark:text-[#93a5c8]">Standard</td>
                <td className="p-6 font-bold text-[#111418] dark:text-white bg-primary/5">Advanced (GPT-4o)</td>
                <td className="p-6 text-[#637588] dark:text-[#93a5c8]">Advanced</td>
                <td className="p-6 font-bold text-[#111418] dark:text-white">Fine-tuned Custom</td>
              </tr>
              <tr className="hover:bg-[#f9fafb] dark:hover:bg-[#243047]/50 transition-colors">
                <td className="p-6 font-medium text-[#111418] dark:text-white">API Access</td>
                <td className="p-6 text-[#637588] dark:text-[#93a5c8]"><span className="material-symbols-outlined text-[#ef4444]">close</span></td>
                <td className="p-6 font-bold text-accent-teal bg-primary/5"><span className="material-symbols-outlined">check</span></td>
                <td className="p-6 text-accent-teal"><span className="material-symbols-outlined">check</span></td>
                <td className="p-6 font-bold text-accent-teal"><span className="material-symbols-outlined">check</span></td>
              </tr>
              <tr className="hover:bg-[#f9fafb] dark:hover:bg-[#243047]/50 transition-colors">
                <td className="p-6 font-medium text-[#111418] dark:text-white">SSO / SAML</td>
                <td className="p-6 text-[#637588] dark:text-[#93a5c8]"><span className="material-symbols-outlined text-[#ef4444]">close</span></td>
                <td className="p-6 text-[#637588] dark:text-[#93a5c8] bg-primary/5"><span className="material-symbols-outlined text-[#ef4444]">close</span></td>
                <td className="p-6 text-[#637588] dark:text-[#93a5c8]"><span className="material-symbols-outlined text-[#ef4444]">close</span></td>
                <td className="p-6 font-bold text-accent-teal"><span className="material-symbols-outlined">check</span></td>
              </tr>
              <tr className="hover:bg-[#f9fafb] dark:hover:bg-[#243047]/50 transition-colors">
                <td className="p-6 font-medium text-[#111418] dark:text-white">Audit Logs</td>
                <td className="p-6 text-[#637588] dark:text-[#93a5c8]">7 Days</td>
                <td className="p-6 font-bold text-[#111418] dark:text-white bg-primary/5">1 Year</td>
                <td className="p-6 text-[#637588] dark:text-[#93a5c8]">90 Days</td>
                <td className="p-6 font-bold text-[#111418] dark:text-white">10 Years</td>
              </tr>
              <tr className="bg-white dark:bg-[#1f293a]">
                <td className="p-6 border-none"></td>
                <td className="p-6 border-none">
                  <button className="w-full py-2 px-4 rounded-lg border border-[#e5e7eb] dark:border-[#344465] hover:bg-[#f3f4f6] dark:hover:bg-[#344465] text-sm font-bold text-[#111418] dark:text-white transition-colors">Start Free</button>
                </td>
                <td className="p-6 border-none bg-primary/5">
                  <button className="w-full py-2 px-4 rounded-lg bg-primary hover:bg-primary/90 text-sm font-bold text-white transition-colors">Get Pro</button>
                </td>
                <td className="p-6 border-none">
                  <button className="w-full py-2 px-4 rounded-lg border border-[#e5e7eb] dark:border-[#344465] hover:bg-[#f3f4f6] dark:hover:bg-[#344465] text-sm font-bold text-[#111418] dark:text-white transition-colors">Configure</button>
                </td>
                <td className="p-6 border-none">
                  <button className="w-full py-2 px-4 rounded-lg border border-primary text-primary hover:bg-primary/10 text-sm font-bold transition-colors">Contact Sales</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
