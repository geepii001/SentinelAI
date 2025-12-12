import Auth from './Auth';

const SignIn = () => {
  return (
    <html lang="en" className="dark">
        <head>
            <meta charSet="utf-8"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            <title>SentinelAI - Secure Login</title>
            <link href="https://fonts.googleapis.com" rel="preconnect"/>
            <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
            <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&amp;display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
            <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  tailwind.config = {
                      darkMode: "class",
                      theme: {
                          extend: {
                              colors: {
                                  "primary": "#13ecec",
                                  "background-light": "#f6f8f8",
                                  "background-dark": "#102222",
                                  "surface-dark": "#152a2a",
                                  "border-dark": "#234848"
                              },
                              fontFamily: {
                                  "display": ["Manrope", "sans-serif"]
                              },
                              borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                          },
                      },
                  }
                `,
              }}
            />
        </head>
        <body className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col overflow-x-hidden selection:bg-primary/30 selection:text-white">
            <header className="w-full flex items-center justify-between border-b border-solid border-[#e5e7eb] dark:border-[#234848] px-6 py-4 md:px-10 lg:px-40 bg-white dark:bg-[#112222] z-10 relative">
                <div className="flex items-center gap-3 text-[#112222] dark:text-white cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="size-8 text-primary">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">SentinelAI</h2>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-600 dark:text-[#92c9c9] hidden sm:block">Don't have an account?</span>
                    <a href="/sign-up" className="flex items-center justify-center overflow-hidden rounded-lg h-9 px-4 border border-transparent hover:border-primary/50 text-[#112222] dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-[#193333] transition-all text-sm font-bold leading-normal tracking-[0.015em]">
                        <span className="truncate">Sign Up</span>
                    </a>
                </div>
            </header>
          <main className="flex-1 flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto h-full">
            <div className="flex flex-1 flex-col items-center justify-center p-6 md:p-12 lg:p-20 relative">
              <div className="absolute inset-0 z-0 pointer-events-none opacity-40" style={{backgroundImage: "radial-gradient(circle at 10% 20%, rgba(19, 236, 236, 0.05) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(19, 236, 236, 0.03) 0%, transparent 20%)"}}>
              </div>
              <div className="w-full max-w-[440px] z-10 flex flex-col gap-8">
                  <Auth />
              </div>
            </div>
            <div className="hidden lg:flex flex-1 relative bg-[#0d1b1b] overflow-hidden items-center justify-center p-12">
              <div className="absolute inset-0 z-0 bg-cover bg-center opacity-60 mix-blend-overlay" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlBdT7O3LWWnRssJI2N2VqYc-tSn0AV06kE8auZzpcnw0aqP0YWl1QEJsFcfcmYKv3JYoDni0SKwx6H_hnkwMWeLygRhcQ4Kh9cUEkQMgM7dPkYWSyAgGpBAiBDJxpJ5RIFMog69w79Pkb5fD75OJ-kt5f5m7Nw7SaQrdFyu7kJ5hTctTMp1QJAYKGQfFYRu-HWWicFnOHCp_v6y_NECKiAb74hUVP91eMtaPOBdID8cPDfROq9NVum-vBwSdoAiAQ6lbugILd594')"}}>
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#102222] via-[#102222]/80 to-transparent"></div>
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#102222] via-transparent to-transparent"></div>
              <div className="relative z-20 max-w-[500px] flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#193333] to-[#112222] border border-[#234848] flex items-center justify-center shadow-2xl mb-4">
                  <span className="material-symbols-outlined text-primary text-4xl">lock_person</span>
                </div>
                <h2 className="text-white text-3xl font-bold leading-tight">Next-Generation Code Security</h2>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Real-time Analysis</h3>
                      <p className="text-[#92c9c9] text-sm leading-relaxed mt-1">Detect vulnerabilities in your codebase as you type with our advanced AI engine.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Enterprise Compliance</h3>
                      <p className="text-[#92c9c9] text-sm leading-relaxed mt-1">Automatically align your projects with SOC2, HIPAA, and GDPR standards.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Zero False Positives</h3>
                      <p className="text-[#92c9c9] text-sm leading-relaxed mt-1">Our contextual engine understands your logic, reducing noise by 99%.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 rounded-xl bg-[#152a2a]/60 backdrop-blur-sm border border-[#234848]">
                  <div className="flex items-center gap-1 mb-2 text-yellow-400">
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                  </div>
                  <p className="text-white/90 text-sm italic">"SentinelAI cut our security review time in half. It's an indispensable part of our CI/CD pipeline."</p>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden">
                      <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4iFNlhjKjl9ghUcFsBsouy7rccpcCgxNA3AY4-0XuldIMVPV520SJiIDDgapDN7xFSF0YLYSdPCPv8qPX9Be2CO7FH4FuXf435c2cGt1Nkx_qHfvMVy8l_0-k9ah4q-nE0HpJ78grQ2B7oEhrIljavBvXHS-VK6P4CJEfyLipOJgg1PI0EwcpOWy_mjEsTD06Iv0pdJb1QvGLVhPXG6SwYc2j-NJSnU5AxRve_B_2az2-z1moKHNrKwwbVd1T-2yu86Yz_xFZQB8"/>
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold">Alex Chen</p>
                      <p className="text-[#568a8a] text-[10px] uppercase tracking-wider">DevSecOps Lead</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </body>
    </html>
  );
};

export default SignIn;