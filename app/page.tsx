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

function ToolTile({
  t,
  size = "md",
}: {
  t: Tool;
  size?: "sm" | "md" | "lg";
}) {
  const aspect =
    size === "lg" ? "aspect-[4/5] md:aspect-[5/6]" : "aspect-[4/3]";
  const titleClass =
    size === "lg"
      ? "text-2xl md:text-3xl lg:text-4xl"
      : "text-xl md:text-2xl";

  return (
    <Link
      href={`/tool/${t.slug}`}
      className="group relative block overflow-hidden border border-white/10 bg-neutral-950 hover:border-amber-400/60 transition-colors"
    >
      <div className={`relative spec-corners overflow-hidden ${aspect}`}>
        <Corners />
        <Image
          src={t.image}
          alt={`${t.name} specimen`}
          fill
          sizes={
            size === "lg"
              ? "(min-width: 1280px) 50vw, 100vw"
              : "(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          }
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          priority={size === "lg"}
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
      <div className="px-5 py-4 md:px-6 md:py-5 border-t border-white/10 bg-[#0a0a0a] group-hover:bg-neutral-900 transition-colors">
        <div className="flex items-start justify-between gap-4 mb-1">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-[var(--font-geist-mono)] text-[10px] tracking-[0.3em] text-neutral-500">
              {t.n}
            </span>
            <h3
              className={`${titleClass} font-bold tracking-tight group-hover:text-amber-400 transition-colors truncate`}
            >
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
  const [featured, ...rest] = FAB_TOOLS;

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

      {/* ═══ HERO + FEATURED TOOL — combined, no wasted space ═══ */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="noise absolute inset-0 pointer-events-none" />
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 pt-10 pb-8 md:pt-14 md:pb-12">
          {/* Spec-sheet header strip */}
          <div className="flex items-center gap-4 mb-6 font-[var(--font-geist-mono)] text-[10px] tracking-[0.3em] text-neutral-500 uppercase">
            <span className="h-px w-10 bg-amber-400" />
            <span>MKR.SUITE / v1.0</span>
            <span className="text-neutral-700">·</span>
            <span>REV 00</span>
            <span className="text-neutral-700">·</span>
            <span>{today}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start">
            {/* LEFT — Tagline + copy */}
            <div className="lg:col-span-5 lg:sticky lg:top-20 self-start">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.95]">
                Design it.
                <br />
                Spec it.
                <br />
                <span className="text-amber-400">Make it real.</span>
              </h1>

              <p className="mt-6 text-base md:text-lg text-neutral-300 leading-relaxed max-w-md">
                A suite of parametric tools.
                <br />
                <span className="text-neutral-500">
                  Paired with materials. Ready to fabricate.
                </span>
              </p>

              <p className="mt-5 font-[var(--font-geist-mono)] text-xs leading-relaxed text-neutral-500 max-w-sm">
                Five fabrication tools. Two image generators. Each tuned
                to a specific material — the same workflow we use in the
                shop, open to anyone.
              </p>

              <div className="mt-6 flex items-center gap-4 flex-wrap">
                <a
                  href="#tools"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 text-black font-[var(--font-geist-mono)] text-[11px] tracking-[0.2em] uppercase font-bold hover:bg-amber-300 transition-colors"
                >
                  <span>Enter the Rack</span>
                  <span>↓</span>
                </a>
                <span className="font-[var(--font-geist-mono)] text-[10px] tracking-[0.2em] uppercase text-neutral-600">
                  07 Tools · 05 Materials
                </span>
              </div>
            </div>

            {/* RIGHT — Featured tool */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3 font-[var(--font-geist-mono)] text-[10px] tracking-[0.3em] uppercase text-amber-400">
                <span className="h-px w-8 bg-amber-400" />
                <span>Featured · {featured.code}</span>
              </div>
              <ToolTile t={featured} size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TOOL RACK — remaining fab tools, prominent ═══ */}
      <section id="tools" className="relative border-t border-white/5 bg-[#080808]">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 pt-12 pb-4">
          <div className="flex items-baseline justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-3 font-[var(--font-geist-mono)] text-[10px] tracking-[0.3em] uppercase text-amber-400">
              <span className="h-px w-8 bg-amber-400" />
              <span>Tool Rack · 04 More</span>
            </div>
            <p className="font-[var(--font-geist-mono)] text-[10px] tracking-[0.25em] uppercase text-neutral-500">
              Material → Tool → Production file
            </p>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto px-5 md:px-10 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {rest.map((t) => (
              <ToolTile key={t.slug} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IMAGE GENERATORS ═══ */}
      <section id="generators" className="relative border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 pt-12 pb-4">
          <div className="flex items-baseline justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2 font-[var(--font-geist-mono)] text-[10px] tracking-[0.3em] uppercase text-amber-400">
                <span className="h-px w-8 bg-amber-400" />
                <span>Image Generators · 02</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                For concept & ideation.
              </h2>
            </div>
            <p className="font-[var(--font-geist-mono)] text-[10px] tracking-[0.25em] uppercase text-neutral-500 max-w-xs">
              Output: Image only · Not production file
            </p>
          </div>
        </div>

        <div className="max-w-[1600px] mx-auto px-5 md:px-10 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {GEN_TOOLS.map((t) => (
              <ToolTile key={t.slug} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS — compact ═══ */}
      <section className="border-t border-white/5 bg-[#070707]">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 py-12">
          <div className="flex items-center gap-3 mb-6 font-[var(--font-geist-mono)] text-[10px] tracking-[0.3em] uppercase text-neutral-500">
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
                d: "Enter your dimensions, pattern density, depth. Geometry updates in real time.",
              },
              {
                n: "03",
                t: "Export",
                d: "Production file + shop drawings. Hand off to a fabricator — or ask us for a quote.",
              },
            ].map((s) => (
              <div key={s.n} className="bg-[#0a0a0a] p-6 md:p-8">
                <p className="font-[var(--font-geist-mono)] text-3xl font-bold text-amber-400/30 mb-3">
                  {s.n}
                </p>
                <p className="text-base font-semibold mb-1">{s.t}</p>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-white/5 bg-[#050505]">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="font-[var(--font-geist-mono)] text-[10px] tracking-[0.3em] uppercase text-neutral-600 mb-1">
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
