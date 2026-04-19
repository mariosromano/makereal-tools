import Image from "next/image";
import Link from "next/link";
import { FAB_TOOLS, GEN_TOOLS, type Tool } from "./tools";

function Corners() {
  return (
    <>
      <span className="corner-tr" />
      <span className="corner-bl" />
    </>
  );
}

function ToolTile({ t }: { t: Tool }) {
  return (
    <Link
      href={`/tool/${t.slug}`}
      className="group relative block overflow-hidden border border-white/10 bg-neutral-950 hover:border-amber-400/60 transition-colors"
    >
      <div className="relative spec-corners overflow-hidden aspect-[4/3]">
        <Corners />
        <Image
          src={t.image}
          alt={`${t.name} specimen`}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="scanline absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
          <span
            className="inline-block w-3 h-3 rounded-full ring-2 ring-black/40"
            style={{ backgroundColor: t.accent }}
          />
          <span className="font-[var(--font-geist-mono)] text-[9px] tracking-[0.25em] uppercase text-white/80 bg-black/60 backdrop-blur-sm px-2 py-1">
            {t.materialLabel}
          </span>
        </div>
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
            Open →
          </span>
        </div>
        <p className="text-sm text-neutral-400 leading-snug">{t.tagline}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, ".");

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
          <div className="flex items-center gap-4 mb-10 font-[var(--font-geist-mono)] text-[10px] tracking-[0.3em] text-neutral-500 uppercase">
            <span className="h-px w-10 bg-amber-400" />
            <span>MKR.SUITE / v1.0</span>
            <span className="text-neutral-700">·</span>
            <span>REV 00</span>
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

      {/* ═══ FABRICATION TOOLS ═══ */}
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

        <div className="max-w-[1600px] mx-auto px-5 md:px-10 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {FAB_TOOLS.map((t) => (
              <ToolTile key={t.slug} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IMAGE GENERATORS ═══ */}
      <section id="generators" className="relative border-t border-white/5 bg-[#080808]">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {GEN_TOOLS.map((t) => (
              <ToolTile key={t.slug} t={t} />
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
              { n: "01", t: "Pick a tool", d: "Choose by material or wall type. Each tool is tuned to a specific fabrication method." },
              { n: "02", t: "Configure", d: "Enter your dimensions, pattern density, depth. The geometry updates in real time." },
              { n: "03", t: "Export", d: "Production file + shop drawings. Hand off to a fabricator — or ask us for a quote." },
            ].map((s) => (
              <div key={s.n} className="bg-[#0a0a0a] p-8 md:p-10">
                <p className="font-[var(--font-geist-mono)] text-4xl font-bold text-amber-400/30 mb-4">
                  {s.n}
                </p>
                <p className="text-lg font-semibold mb-2">{s.t}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{s.d}</p>
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
                <a href="https://mrwalls.com" target="_blank" rel="noopener" className="text-amber-400 hover:underline">
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
