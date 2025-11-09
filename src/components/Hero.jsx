import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Gradient overlay for readable text without blocking interactions */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/70 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full sm:w-2/3 lg:w-1/2 space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-black text-white text-xs font-medium tracking-wide uppercase/5">
            Digital Art • Data Visualizations
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tighter text-gray-900">
            Turning data into playful, interactive stories.
          </h1>
          <p className="text-gray-700 text-base sm:text-lg">
            I design and build modern, immersive visual experiences across the web. Explore selected works below.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="#work" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-800 transition">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 border border-gray-300 px-5 py-2.5 text-sm font-medium hover:bg-gray-50 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
