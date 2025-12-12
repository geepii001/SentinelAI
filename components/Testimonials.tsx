import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f3f4f6] dark:bg-[#161e2c]">
      <div className="layout-content-container flex flex-col max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-[#111418] dark:text-white text-3xl font-bold">Trusted by DevSecOps Teams</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col justify-between rounded-xl bg-white dark:bg-surface-dark p-8 shadow-sm border border-[#e5e7eb] dark:border-[#344465]">
            <div className="flex flex-col gap-4">
              <div className="flex text-amber-400 text-sm">
                <span className="material-symbols-outlined fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              </div>
              <p className="text-[#111418] dark:text-white text-lg font-medium leading-relaxed">
                "SentinelAI caught a critical SQL injection vulnerability in our legacy codebase that three other tools missed. It's now an essential part of our CI pipeline."
              </p>
            </div>
            <div className="flex items-center gap-4 mt-6 border-t border-[#e5e7eb] dark:border-[#344465] pt-4">
              <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCYooi_l59tiy1l_huu7W8YqBm6ZusFA_C764wAMPCc14Oa2HBrupylcDuqRtcDNXjcnl5KdQvm17rSN_n2o4EYWY8xWiWE4Z6aeFkAojQytKMAFPIfU25voHeYwhk7RByeZS32tX9n_eRMVtbDfb-uzSmvysSwyDLF4sMd6Jr1vi4g2zf7j9thXPx4qsPwGgV-dvbGVaa8a_oNz6f9f_EGF3sKd-yQyIcM335K2B6sYrVSBo56akeAY-rCpydFf8KoiuH8ZNrelI')"}}></div>
              <div>
                <div className="text-[#111418] dark:text-white font-bold text-sm">Alex M.</div>
                <div className="text-[#637588] dark:text-[#93a5c8] text-xs">CTO at FinTechGlobal</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-xl bg-white dark:bg-surface-dark p-8 shadow-sm border border-[#e5e7eb] dark:border-[#344465]">
            <div className="flex flex-col gap-4">
              <div className="flex text-amber-400 text-sm">
                <span className="material-symbols-outlined fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              </div>
              <p className="text-[#111418] dark:text-white text-lg font-medium leading-relaxed">
                "The speed of the scan is incredible. We went from waiting hours for results to minutes, allowing our developers to fix issues in real-time."
              </p>
            </div>
            <div className="flex items-center gap-4 mt-6 border-t border-[#e5e7eb] dark:border-[#344465] pt-4">
              <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6o4HZrhCuj6rx6yp3uzhCG5wFVwRAdU6BIaF_Bu-xsLCkqHblQQcRNSV3p_F5_LzPwPQzUeDv9i-lQIMfpoD_Yh475YkQm6hcC43cA_-WxCDuxEXGK7slTAxb2op0ljK2P-cxKnAKsU-22YPmMoHek9UZbr4y27Dt0ZiPDSiEmBo3zijHdpMhbaL6oHkrnjTFLGj9T1Uid4Piwr-DFYj7NKp4_jVDe64XrkSYPTFprYqpc7Wj5EjiderqcSlJlkntXQ_Tt1y3b5c')"}}></div>
              <div>
                <div className="text-[#111418] dark:text-white font-bold text-sm">Sarah L.</div>
                <div className="text-[#637588] dark:text-[#93a5c8] text-xs">Lead DevOps at CloudScale</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-xl bg-white dark:bg-surface-dark p-8 shadow-sm border border-[#e5e7eb] dark:border-[#344465]">
            <div className="flex flex-col gap-4">
              <div className="flex text-amber-400 text-sm">
                <span className="material-symbols-outlined fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined fill-current" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              </div>
              <p className="text-[#111418] dark:text-white text-lg font-medium leading-relaxed">
                "Compliance used to be a nightmare quarter for us. With SentinelAI's automated reporting, we passed our SOC2 audit with zero friction."
              </p>
            </div>
            <div className="flex items-center gap-4 mt-6 border-t border-[#e5e7eb] dark:border-[#344465] pt-4">
              <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVzsE3e7E-CMJZnhEQwT55nD5bhyWmEf01orxdr65ClBrSy0_L56euKDxAO-2_153CCVTGVTurYIkS58rePhHhjmvIhir3nRtQwd_7yP3rGtv6vFTCquImu1ANPpAqMqS28POzeP0RhlBd7KUgTuAbpixxTanRBnYpHrjZskCOL8ravGVusYrxuElKszaK1pp-kR1DZNvtWneeAFANYm-eBvSih0ZxOwJ17G139hO0HyPcA8zZx63v4r9LGuaqLmQbjvJv1L9RRuE')"}}></div>
              <div>
                <div className="text-[#111418] dark:text-white font-bold text-sm">James K.</div>
                <div className="text-[#637588] dark:text-[#93a5c8] text-xs">Security Engineer at DataVault</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
