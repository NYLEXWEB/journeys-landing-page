const CURRENT_YEAR = new Date().getFullYear();

const WhatsAppIcon = () => (
  <svg aria-hidden="true" fill="none" height="17" viewBox="0 0 24 24" width="17">
    <path
      d="M20.5 11.65a8.5 8.5 0 0 1-12.56 7.46L3.5 20.5l1.45-4.28A8.5 8.5 0 1 1 20.5 11.65Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M8.07 7.75c.2-.45.4-.46.59-.47h.5c.16 0 .42.06.64.53.22.48.76 1.86.83 2 .07.14.11.3.02.48-.08.18-.13.29-.26.44-.13.15-.28.33-.4.44-.13.13-.26.26-.11.51.15.26.66 1.09 1.42 1.77.98.88 1.8 1.15 2.06 1.28.25.13.4.11.55-.07.15-.18.64-.75.81-1 .17-.26.34-.22.57-.13.24.08 1.49.7 1.75.83.25.13.42.19.48.3.07.11.07.64-.15 1.26-.22.62-1.27 1.19-1.74 1.26-.45.07-1.03.1-1.66-.1-.38-.12-.87-.28-1.5-.55-.63-.27-2.78-1.03-4.72-3.6-.54-.72-.91-1.52-1.02-1.78-.1-.25-1.08-2.59.07-4.47Z"
      fill="currentColor"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg aria-hidden="true" fill="none" height="14" viewBox="0 0 16 16" width="14">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
    />
  </svg>
);

export default function App() {
  return (
    <main className="relative h-screen h-[100dvh] max-h-[100dvh] w-full overflow-hidden bg-[#334738] text-[#f7f2e8]">
      <img
        alt="A traditional boat gliding through the lush Kerala backwaters"
        className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
        src="/kerala-backwaters.jpg"
      />

      {/* Atmospheric overlays for text contrast and depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,39,29,0.88)_0%,rgba(29,48,35,0.72)_42%,rgba(30,44,33,0.30)_75%,rgba(26,39,30,0.18)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,22,16,0.22)_0%,transparent_35%,rgba(12,22,16,0.35)_100%)]"
      />

      {/* Single Viewport Container - Zero Scroll Across All Screens */}
      <div className="relative z-10 mx-auto flex h-full max-h-[100dvh] w-full max-w-[1440px] flex-col justify-between px-5 py-4 sm:px-8 sm:py-6 lg:px-14 lg:py-8">
        {/* Header - Luxury Frosted Atelier Capsule for 100% Logo Contrast */}
        <header className="flex-shrink-0 flex items-center justify-between gap-4">
          <a
            aria-label="Journeys by Jibu Thomas, home"
            className="group relative inline-flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl bg-[#fffcf5]/94 px-3.5 py-2 sm:px-5 sm:py-2.5 shadow-[0_12px_36px_rgba(10,24,16,0.35),0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-xl border border-[#e9e0d2] transition-all duration-300 hover:bg-[#fffcf5] hover:shadow-[0_16px_44px_rgba(10,24,16,0.45)] hover:-translate-y-0.5"
            href="/"
          >
            <img
              alt="Journeys"
              className="h-8 sm:h-10 lg:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              src="/logo.png"
            />
            <div className="h-7 sm:h-8 w-px bg-[#8b5e35]/35" />
            <div className="flex flex-col justify-center text-left">
              <span className="text-[0.58rem] sm:text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[#8b5e35]">
                By Jibu Thomas
              </span>
              <span className="mt-0.5 text-[0.48rem] sm:text-[0.54rem] font-medium uppercase tracking-[0.2em] text-[#183d2b]/85">
                Kerala · South India
              </span>
            </div>
          </a>

          <div className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#fffcf5]/15 px-3.5 py-1.5 backdrop-blur-md border border-[#f0e4d0]/25 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d8c7a4] animate-pulse" />
            <span className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-[#eee2cd]">
              A new chapter, soon
            </span>
          </div>
        </header>

        {/* Central Content Area - Dynamically Balanced */}
        <section className="flex-1 min-h-0 flex flex-col justify-center max-w-[680px] my-auto py-2 sm:py-4">
          <p className="mb-2.5 sm:mb-3.5 lg:mb-4 flex items-center gap-2.5 sm:gap-3 text-[0.58rem] sm:text-[0.64rem] font-semibold uppercase tracking-[0.26em] text-[#e4d4b8]">
            <span className="h-px w-6 sm:w-8 bg-[#d8c7a4]" />
            Our website is taking shape
          </p>

          <h1 className="font-display max-w-[650px] text-[clamp(2.1rem,4.8vh,4.6rem)] sm:text-[clamp(2.5rem,5.6vh,5.4rem)] leading-[0.92] font-normal tracking-[-0.04em] text-[#fffaf0]">
            Thoughtful journeys,
            <span className="block italic text-[#e8d8bb]">beautifully personal.</span>
          </h1>

          <p className="mt-3 sm:mt-4 lg:mt-5 max-w-[550px] text-[0.85rem] sm:text-[0.96rem] lg:text-[1.02rem] leading-snug sm:leading-relaxed font-light text-[#f5ede0]/90">
            In the meantime, we would be delighted to help you plan a personalised journey through
            Kerala and South India.
          </p>

          <div className="mt-4 sm:mt-6 lg:mt-7 flex flex-row items-center gap-2.5 sm:gap-3.5 flex-wrap">
            <a
              className="group inline-flex min-h-10 sm:min-h-11 items-center justify-center gap-2.5 bg-[#f3eadb] px-4 sm:px-6 text-[0.62rem] sm:text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#26392c] transition-colors duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3eadb]"
              href="https://wa.me/919847030110"
              rel="noreferrer"
              target="_blank"
            >
              <WhatsAppIcon />
              <span>WhatsApp Jibu</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>

            <a
              className="inline-flex min-h-10 sm:min-h-11 items-center justify-center border border-[#f0e4d0]/55 px-4 sm:px-6 text-[0.62rem] sm:text-[0.66rem] font-medium uppercase tracking-[0.14em] text-[#fff9ee] transition-colors duration-300 hover:border-[#f0e4d0] hover:bg-[#f3eadb]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3eadb]"
              href="tel:+919847030110"
            >
              Call&nbsp;
              <span className="tracking-[0.08em] text-[#f1e5d2]/85">+91 98470 30110</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex-shrink-0 flex items-end justify-between gap-4 pt-1 sm:pt-2">
          <p className="max-w-[270px] text-[0.54rem] sm:text-[0.58rem] leading-4 sm:leading-5 uppercase tracking-[0.16em] text-[#eee4d2]/70">
            Curated with care in Kerala
            <br />
            for travellers from around the world
          </p>
          <p className="text-right text-[0.52rem] sm:text-[0.56rem] uppercase tracking-[0.18em] text-[#eee4d2]/55">
            &copy; {CURRENT_YEAR} Journeys by Jibu Thomas
          </p>
        </footer>
      </div>
    </main>
  );
}
