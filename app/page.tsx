import Image from "next/image";

type Tool = {
  n: string;
  code: string; // material code, spec-sheet chrome
  name: string;
  tagline: string;
  material: string;
  materialLabel: string;
  accent: string; // hex pulled from material photo
  image: string;
  href: string;
};

const FAB_TOOLS: Tool[] = [
  {
    n: "01",
    code: "CO-RIB-01",
    name: "Rib Maker",
    tagline: "Corian ribs. Fluted, carved, backlit.",
    material: "Corian",
    materialLabel: "Solid Surface · Corian",
    accent: "#e8e2d6",
    image: "/tools/rib.png",
    href: "https://rib-maker.vercel.app/",
  },
  {
    n: "02",
    code: "CO-PRF-02",
    name: "Perf Panel Maker",
    tagline: "Perforated screens, backlit walls.",
    material: "Corian / Metal",
    materialLabel: "Corian or Metal",
    accent: "#d4a762",
    image: "/tools/perf.png",
    href: "https://mr-perf-panel-maker.vercel.app/",
  },
  {
    n: "03",
    code: "CO-FLD-03",
    name: "Triangle Fold",
    tagline: "Folded Corian. Ribbon geometry.",
    material: "Corian",
    materialLabel: "Solid Surface · Corian",
    accent: "#f5ebd7",
    image: "/tools/fold.png",
    href: "https://triangle-fold-mr.vercel.app",
  },
  {
    n: "04",
    code: "3F-TRI-04",
    name: "Triangular Wall",
    tagline: "Translucent acrylic triangles.",
    material: "3form Acrylic",
    materialLabel: "3form · Translucent Acrylic",
    accent: "#6db7b2",
    image: "/tools/triangular.png",
    href: "https://triangular-wall-maker-9mryo2o14-mario-s-projects-4f51649b.vercel.app",
  },
  {
    n: "05",
    code: "MDF-VOR-05",
    name: "Voronoi Panel",
    tagline: "Laminated MDF, organic cell patterns.",
    material: "MDF Laminated",
    materialLabel: "MDF · Wood Laminate",
    accent: "#b8926a",
    image: "/tools/voronoi.png",
    href: "https://voronoi-cnc-panel-60zxg29ms-mario-s-projects-4f51649b.vercel.app",
  },
];

const IMAGE_GEN_TOOLS = [
  {
    n: "G1",
    code: "IMG-LAKE",
    name: "Lake",
    tagline: "Generative pattern studies.",
    image: "/tools/fold.png",
    href: "https://make-real-flux2.vercel.app/",
  },
  {
    n: "G2",
    code: "IMG-FINS",
    name: "Fins",
    tagline: "Concept renderings, elevator lobbies.",
    image: "/tools/fins.jpg",
    href: "https://fins-maker.vercel.app/",
  },
];

function Corners() {
  return (
    <>
      <span className="corner-tr" />
      <span className="corner-bl" />
    </>
  );
}

export default function Home() {
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, ".");
  const rev = "REV 00";

  return (
    <main className="relative flex-1">
      {/* ═══ TOP BAR ═══ */}
      <header className="sticky top-0 z-30 bg-[#0a0a0a]/90 backdrop-blur border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 h-14 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-[var(--font-geist-mono)] text-[10px] tracking-[0.3em] text-amber-400">
              M|R WALLS
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="text-sm font-semibold tracking-tight">
              Make<span className="text-amber-400">Real</span>
            </span>
            <span className="hidden md:inline font-[var(--font-geist-mono)] text-[10px] text-neutral-500 tracking-widest ml-2">
              /tools
            </span>
          </div>
          <nav className="flex items-center gap-6 font-[var(--font-geist-mono)] text-[10px] tracking-[0.2em] uppercase text-neutral-400">
            <a href="#tools" className="hover:text-amber-400 transition">
              Tools
            </a>
            <a href="#generators" className="hover:text-amber-400 transition">
              Generators
            </a>
            <a
              href="https://mrwalls.com"
              target="_blank"
              rel="noopener"
              className="hover:text-amber-400 transition"
            >
              mrwalls.com ↗
            </a>
          </nav>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="noise absolute inset-0 pointer-events-none" />
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 pt-20 pb-24 md:pt-32 md:pb-36">
          {/* Spec-sheet header strip */}
          <div className="flex items-center gap-4 mb-10 font-[var(--font-geist-mono)] text-[10px] tracking-[0.3em] text-neutral-500 uppercase">
            <span className="h-px w-10 bg-amber-400" />
            <span>MKR.SUITE / v1.0</span>
            <span className="text-neutral-700">·</span>
            <span>{rev}</span>
            <span className="text-neutral-700">·</span>
            <span>{today}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] max-w-5xl">
            Design it.
            <br />
            Spec it.
            <br />
            <span className="text-amber-400">Make it real.</span>
          </h1>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-xl">
                A suite of parametric tools.
                <br />
                <span className="text-neutral-500">
                  Paired with materials. Ready to fabricate.
                </span>
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <p className="font-[var(--font-geist-mono)] text-xs leading-relaxed text-neutral-500 max-w-md">
                Five fabrication tools. Two image generators. Each tool is tuned
                to a specific material and outputs a production-ready file —
                the same workflow we use in the shop, open to anyone.
              </p>
              <div className="mt-6 flex items-center gap-3 font-[var(--font-geist-mono)] text-[10px] tracking-[0.2em] uppercase text-neutral-600">
                <span>Conceptual Release</span>
                <span>·</span>
                <span>Preview Only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TOOL RACK — 5 FABRICATION TOOLS ═══ */}
      <section id="tools" className="relative">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 pt-20 pb-8">
          <div className="flex items-baseline justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3 font-[var(--font-geist-mono)] text-[10px] tracking-[0.3em] uppercase text-amber-400">
                <span className="h-px w-8 bg-amber-400" />
                <span>Tool Rack · 05 Tools</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Fabrication tools.
              </h2>
            </div>
            <p className="font-[var(--font-geist-mono)] text-[10px] tracking-[0.25em] uppercase text-neutral-500">
              Each tool → Material → Production file
            </p>
          </div>
        </div>

        {/* The rack itself — specimen tiles */}
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {FAB_TOOLS.map((t, i) => (
              <a
                key={t.code}
                href={t.href}
                target="_blank"
                rel="noopener"
                className={`group relative block overflow-hidden border border-white/10 bg-neutral-950 hover:border-amber-400/60 transition-colors ${
                  i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
                style={
                  {
                    "--tool-accent": t.accent,
                  } as React.CSSProperties
                }
              >
                {/* The specimen photo */}
                <div
                  className={`relative spec-corners overflow-hidden ${
                    i === 0 ? "aspect-[4/5] lg:aspect-[5/6]" : "aspect-[4/3]"
                  }`}
                >
                  <Corners />
                  <Image
                    src={t.image}
                    alt={`${t.name} specimen`}
                    fill
                    sizes={i === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    priority={i < 2}
                  />
                  {/* Amber scanline on hover */}
                  <span className="scanline absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Accent chip bottom-left */}
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                    <span
                      className="inline-block w-3 h-3 rounded-full ring-2 ring-black/40"
                      style={{ backgroundColor: t.accent }}
                    />
                    <span className="font-[var(--font-geist-mono)] text-[9px] tracking-[0.25em] uppercase text-white/80 bg-black/60 backdrop-blur-sm px-2 py-1">
                      {t.materialLabel}
                    </span>
                  </div>
                  {/* Tool number top-right */}
                  <div className="absolute top-4 right-4 z-10 font-[var(--font-geist-mono)] text-[10px] tracking-[0.25em] text-white/80 bg-black/60 backdrop-blur-sm px-2 py-1">
                    {t.code}
                  </div>
                </div>

                {/* Label strip */}
                <div className="px-5 py-5 md:px-6 md:py-6 border-t border-white/10 bg-[#0a0a0a] group-hover:bg-neutral-900 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-[var(--font-geist-mono)] text-[10px] tracking-[0.3em] text-neutral-500">
                        {t.n}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-amber-400 transition-colors">
                        {t.name}
                      </h3>
                    </div>
                    <span className="font-[var(--font-geist-mono)] text-[10px] tracking-[0.25em] uppercase text-neutral-500 group-hover:text-amber-400 transition-colors whitespace-nowrap">
                      Launch ↗
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400 leading-snug">
                    {t.tagline}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IMAGE GENERATORS ═══ */}
      <section
        id="generators"
        className="relative border-t border-white/5 bg-[#080808]"
      >
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 pt-20 pb-20">
          <div className="flex items-baseline justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3 font-[var(--font-geist-mono)] text-[10px] tracking-[0.3em] uppercase text-amber-400">
                <span className="h-px w-8 bg-amber-400" />
                <span>Image Generators · 02</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                For concept & ideation.
              </h2>
            </div>
            <p className="font-[var(--font-geist-mono)] text-[10px] tracking-[0.25em] uppercase text-neutral-500 max-w-xs">
              Output: Image only · Not production file
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {IMAGE_GEN_TOOLS.map((t) => (
              <a
                key={t.code}
                href={t.href}
                target="_blank"
                rel="noopener"
                className="group relative block overflow-hidden border border-white/10 bg-neutral-950 hover:border-amber-400/60 transition-colors"
              >
                <div className="relative spec-corners overflow-hidden aspect-[16/10]">
                  <Corners />
                  <Image
                    src={t.image}
                    alt={`${t.name} output`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 right-4 z-10 font-[var(--font-geist-mono)] text-[10px] tracking-[0.25em] text-white/80 bg-black/60 backdrop-blur-sm px-2 py-1">
                    {t.code}
                  </div>
                </div>
                <div className="px-5 py-5 md:px-6 md:py-6 border-t border-white/10 bg-[#0a0a0a] group-hover:bg-neutral-900 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-[var(--font-geist-mono)] text-[10px] tracking-[0.3em] text-neutral-500">
                        {t.n}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-amber-400 transition-colors">
                        {t.name}
                      </h3>
                    </div>
                    <span className="font-[var(--font-geist-mono)] text-[10px] tracking-[0.25em] uppercase text-neutral-500 group-hover:text-amber-400 transition-colors whitespace-nowrap">
                      Launch ↗
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400 leading-snug">
                    {t.tagline}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 py-20">
          <div className="flex items-center gap-3 mb-8 font-[var(--font-geist-mono)] text-[10px] tracking-[0.3em] uppercase text-neutral-500">
            <span className="h-px w-8 bg-neutral-700" />
            <span>Process · 03 Steps</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                n: "01",
                t: "Pick a tool",
                d: "Choose by material or wall type. Each tool is tuned to a specific fabrication method.",
              },
              {
                n: "02",
                t: "Configure",
                d: "Enter your dimensions, pattern density, depth. The geometry updates in real time.",
              },
              {
                n: "03",
                t: "Export",
                d: "Production file + shop drawings. Hand off to a fabricator — or ask us for a quote.",
              },
            ].map((s) => (
              <div key={s.n} className="bg-[#0a0a0a] p-8 md:p-10">
                <p className="font-[var(--font-geist-mono)] text-4xl font-bold text-amber-400/30 mb-4">
                  {s.n}
                </p>
                <p className="text-lg font-semibold mb-2">{s.t}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-white/5 bg-[#070707]">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-[var(--font-geist-mono)] text-[10px] tracking-[0.3em] uppercase text-neutral-600 mb-2">
                Conceptual suite · Preview release
              </p>
              <p className="text-sm text-neutral-400">
                MakeReal is a suite of digital fabrication tools by{" "}
                <a
                  href="https://mrwalls.com"
                  target="_blank"
                  rel="noopener"
                  className="text-amber-400 hover:underline"
                >
                  M|R Walls
                </a>
                .
              </p>
            </div>
            <p className="font-[var(--font-geist-mono)] text-[10px] tracking-[0.2em] uppercase text-neutral-600">
              © {new Date().getFullYear()} · M|R Walls
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
