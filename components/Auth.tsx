const Auth = () => {
    return (
        <>
            <div className="flex flex-col gap-2">
                <h1 className="text-[#112222] dark:text-white text-4xl font-black leading-tight tracking-[-0.02em]">Welcome Back</h1>
                <p className="text-gray-500 dark:text-[#92c9c9] text-base font-normal leading-normal">
                    Securely access your SentinelAI dashboard.
                </p>
            </div>
            <div className="flex flex-col gap-3">
                <button className="flex items-center justify-center gap-3 w-full h-12 rounded-lg bg-white dark:bg-[#193333] border border-gray-200 dark:border-[#326767] text-[#112222] dark:text-white font-medium text-sm hover:bg-gray-50 dark:hover:bg-[#234848] transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFRlJlZpKoVxN6k7tLXDiaPEuzq2BsArObcEXHHrJk_FK_aNqnxXPGWwiRZkPt33jOb7q2_m3dZigrF2wN1ZSvSB0t3gZK7An9wakOkYuIOo3KDPo5fJk4K3dlmFR3ymnxRnxMvO9Cb22GqY39vxKON4luYHI2NJliGVgEIsrXVlPpExFJ8CPy-dg3iqyYyvol-yuM1JGH4rgZC14jmOPooxs_38UFvgXwgtUOsLkh4pVXiFJ7ZI6GWy9-eiCfc-jRfpotVrnuP4I"/>
                    Continue with Google
                </button>
                <button className="flex items-center justify-center gap-3 w-full h-12 rounded-lg bg-white dark:bg-[#193333] border border-gray-200 dark:border-[#326767] text-[#112222] dark:text-white font-medium text-sm hover:bg-gray-50 dark:hover:bg-[#234848] transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <img alt="GitHub" className="w-5 h-5 invert dark:invert-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHf3HLewfPGOUB1VrOdTZ81rZe7XFyG_HIHe9XaFCVIlN9GObVuMLTk0lMFnohKGsriRk-bkKjUYAj9rl5FFrWKziAorUmcGS_4OZQB5O_fos1ZkqpaFYkeqsNdx2m-cVKoRj7Etyp6GH-OtLk4Cv5Td_FZXlmH3jHUS78Qr7Kxqx6Tbigk5WMOXVO8_pJHvoJoaXQOHuvVMYz9NWUWCWLSw52_G2CQY3vj8hcblysGWApY1czJI-EiJOSFfeWHaEJzssOAsmMg0Q"/>
                    Continue with GitHub
                </button>
                <button className="flex items-center justify-center gap-3 w-full h-12 rounded-lg bg-white dark:bg-[#193333] border border-gray-200 dark:border-[#326767] text-[#112222] dark:text-white font-medium text-sm hover:bg-gray-50 dark:hover:bg-[#234848] transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <span className="material-symbols-outlined text-lg">domain</span>
                    Continue with SSO
                </button>
            </div>
            <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-200 dark:border-[#234848]"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 dark:text-[#568a8a] text-sm">or login with email</span>
                <div className="flex-grow border-t border-gray-200 dark:border-[#234848]"></div>
            </div>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <label className="flex flex-col gap-2">
                    <span className="text-[#112222] dark:text-white text-sm font-semibold leading-normal">Work Email</span>
                    <div className="relative flex items-center">
                        <input className="w-full h-12 pl-4 pr-10 rounded-lg bg-white dark:bg-[#193333] border border-gray-300 dark:border-[#326767] text-[#112222] dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#568a8a] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all" placeholder="name@company.com" required type="email"/>
                        <span className="material-symbols-outlined absolute right-3 text-gray-400 dark:text-[#568a8a] pointer-events-none">mail</span>
                    </div>
                </label>
                <label className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <span className="text-[#112222] dark:text-white text-sm font-semibold leading-normal">Password</span>
                        <a className="text-primary hover:text-primary/80 text-sm font-medium transition-colors" href="#">Forgot Password?</a>
                    </div>
                    <div className="relative flex items-center">
                        <input className="w-full h-12 pl-4 pr-10 rounded-lg bg-white dark:bg-[#193333] border border-gray-300 dark:border-[#326767] text-[#112222] dark:text-white placeholder:text-gray-400 dark:placeholder:text-[#568a8a] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all" placeholder="••••••••" required type="password"/>
                        <span className="material-symbols-outlined absolute right-3 text-gray-400 dark:text-[#568a8a] cursor-pointer hover:text-primary transition-colors">visibility_off</span>
                    </div>
                </label>
                <button className="w-full h-12 mt-2 rounded-lg bg-primary hover:bg-[#0fd6d6] text-[#112222] text-base font-bold shadow-[0_0_15px_rgba(19,236,236,0.3)] hover:shadow-[0_0_25px_rgba(19,236,236,0.5)] transition-all transform active:scale-[0.98]" type="submit">
                    Sign In
                </button>
            </form>
            <div className="flex items-center gap-2 mt-4 justify-center">
                <span className="material-symbols-outlined text-green-500 text-sm">shield</span>
                <span className="text-xs text-gray-500 dark:text-[#568a8a] font-medium">Secured by SentinelAI Defense</span>
            </div>
        </>
    )
}

export default Auth;