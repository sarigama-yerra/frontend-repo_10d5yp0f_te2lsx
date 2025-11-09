import { Rocket, Sparkles, BarChart3, Shapes } from "lucide-react";

const projects = [
  {
    title: "Neon Networks",
    tag: "WebGL • Generative",
    icon: Rocket,
    color: "from-fuchsia-500 to-violet-500",
    desc: "A reactive particle system driven by real-time data streams.",
    href: "#",
  },
  {
    title: "Pulse City",
    tag: "D3 • Urban Data",
    icon: BarChart3,
    color: "from-cyan-500 to-blue-500",
    desc: "Interactive city rhythms mapped with motion and sound.",
    href: "#",
  },
  {
    title: "Orbit Stories",
    tag: "Three.js • Narrative",
    icon: Shapes,
    color: "from-amber-500 to-rose-500",
    desc: "Planetary orbits visualized as scroll-driven adventures.",
    href: "#",
  },
  {
    title: "Signal Bloom",
    tag: "Shader • Audio-reactive",
    icon: Sparkles,
    color: "from-emerald-500 to-teal-500",
    desc: "Floral fields that grow to music and live metrics.",
    href: "#",
  },
];

export default function WorkGrid() {
  return (
    <section id="work" className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Selected Work</h2>
          <p className="text-gray-600 mt-2">A mix of experiments and commissioned pieces.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.href} className="group rounded-xl border border-gray-200 overflow-hidden bg-gradient-to-br p-[1px] hover:shadow-xl transition-shadow">
              <div className="rounded-[10px] bg-white h-full flex flex-col">
                <div className={`h-28 w-full bg-gradient-to-br ${p.color}`} />
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100 text-xs text-gray-600">{p.tag}</span>
                    <p.icon className="h-5 w-5 text-gray-500" />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-gray-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 flex-1">{p.desc}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-blue-600 group-hover:underline">Open project →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
