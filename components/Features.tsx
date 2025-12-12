import React from 'react';

const Features = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="layout-content-container flex flex-col max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
          <div className="md:w-1/3 flex flex-col gap-4 sticky top-24">
            <h2 className="text-[#111418] dark:text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight">
              Built for Governance &amp; Compliance
            </h2>
            <p className="text-[#637588] dark:text-[#93a5c8] text-lg font-normal leading-relaxed">
              Ensure your codebase meets the highest security standards with automated compliance tools designed for modern engineering teams.
            </p>
            <div className="hidden md:block mt-8">
              <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold transition-colors" href="#">
                View all features
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group flex flex-col gap-4 rounded-xl border border-[#e5e7eb] dark:border-[#344465] bg-white dark:bg-surface-dark p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[28px]">shield_lock</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111418] dark:text-white text-xl font-bold">Compliance Automation</h3>
                <p className="text-[#637588] dark:text-[#93a5c8] text-base leading-relaxed">
                  Generate SOC2, HIPAA, and GDPR ready reports automatically with every scan. Export directly to PDF or JSON.
                </p>
              </div>
            </div>
            <div className="group flex flex-col gap-4 rounded-xl border border-[#e5e7eb] dark:border-[#344465] bg-white dark:bg-surface-dark p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[28px]">history_edu</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111418] dark:text-white text-xl font-bold">Immutable Audit Logs</h3>
                <p className="text-[#637588] dark:text-[#93a5c8] text-base leading-relaxed">
                  Track every scan, result, and user remediation action with tamper-proof logs stored on a private ledger.
                </p>
              </div>
            </div>
            <div className="group flex flex-col gap-4 rounded-xl border border-[#e5e7eb] dark:border-[#344465] bg-white dark:bg-surface-dark p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[28px]">admin_panel_settings</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111418] dark:text-white text-xl font-bold">Corporate Governance</h3>
                <p className="text-[#637588] dark:text-[#93a5c8] text-base leading-relaxed">
                  Implement strict role-based access control (RBAC) and SSO enforcement for large engineering organizations.
                </p>
              </div>
            </div>
            <div className="group flex flex-col gap-4 rounded-xl border border-[#e5e7eb] dark:border-[#344465] bg-white dark:bg-surface-dark p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/50 transition-all duration-300">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[28px]">webhook</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111418] dark:text-white text-xl font-bold">CI/CD Integration</h3>
                <p className="text-[#637588] dark:text-[#93a5c8] text-base leading-relaxed">
                  Seamlessly integrate with GitHub Actions, GitLab CI, and Jenkins to block failing builds automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
