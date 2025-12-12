import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Trust from '../components/Trust';
import Features from '../components/Features';
import ComparisonTable from '../components/ComparisonTable';
import Certifications from '../components/Certifications';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SentinelAI - Enterprise-Level AI Code Security</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Noto+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: "class",
                theme: {
                  extend: {
                    colors: {
                      "primary": "#144bb8",
                      "background-light": "#f6f6f8",
                      "background-dark": "#111722",
                      "surface-dark": "#1a2232",
                      "accent-teal": "#14b8a6",
                    },
                    fontFamily: {
                      "display": ["Manrope", "sans-serif"],
                      "body": ["Noto Sans", "sans-serif"],
                    },
                    borderRadius: {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px",
                    },
                  },
                },
              }
            `,
          }}
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-[#111418] dark:text-white font-display overflow-x-hidden">
        <div className="relative flex min-h-screen w-full flex-col group/design-root">
          <Navbar />
          <Hero />
          <Trust />
          <Features />
          <ComparisonTable />
          <Certifications />
          <Testimonials />
          <FAQ />
          <Footer />
        </div>
      </body>
    </html>
  );
}
