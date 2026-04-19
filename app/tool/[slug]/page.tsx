import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_TOOLS, getToolBySlug } from "../../tools";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return ALL_TOOLS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Not Found — MakeReal" };
  return {
    title: `${tool.name} — MakeReal by M|R Walls`,
    description: tool.tagline,
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return notFound();

  return (
    <div className="fixed inset-0 flex flex-col bg-[#0a0a0a]">
      {/* ═══ SHELL TOP BAR — Persistent back-to-suite ═══ */}
      <header className="flex-shrink-0 bg-[#0a0a0a] border-b border-white/10 z-30">
        <div className="h-14 px-4 md:px-6 flex items-center justify-between gap-4">
          {/* Left: back to suite */}
          <Link
            href="/"
            className="group flex items-center gap-3 font-[var(--font-geist-mono)] text-[10px] tracking-[0.25em] uppercase text-neutral-400 hover:text-amber-400 transition-colors"
          >
            <span className="inline-flex items-center justify-center w-7 h-7 border border-white/15 group-hover:border-amber-400 group-hover:bg-amber-400/10 transition-all">
              ←
            </span>
            <span className="hidden sm:inline">Back to MakeReal</span>
            <span className="sm:hidden">Back</span>
          </Link>

          {/* Center: tool identity */}
          <div className="flex items-center gap-3 min-w-0">
            <span
              className="flex-shrink-0 inline-block w-2.5 h-2.5 rounded-full ring-1 ring-black/40"
              style={{ backgroundColor: tool.accent }}
            />
            <div className="flex items-baseline gap-2 md:gap-3 min-w-0">
              <span className="font-[var(--font-geist-mono)] text-[10px] tracking-[0.3em] text-neutral-500 hidden md:inline">
                {tool.code}
              </span>
              <span className="text-sm md:text-base font-semibold tracking-tight truncate">
                {tool.name}
              </span>
              <span className="font-[var(--font-geist-mono)] text-[10px] tracking-[0.2em] uppercase text-neutral-500 hidden lg:inline">
                {tool.materialLabel}
              </span>
            </div>
          </div>

          {/* Right: open externally */}
          <a
            href={tool.href}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 font-[var(--font-geist-mono)] text-[10px] tracking-[0.25em] uppercase text-neutral-400 hover:text-amber-400 transition-colors"
          >
            <span className="hidden sm:inline">Open ↗</span>
            <span className="sm:hidden">↗</span>
          </a>
        </div>
        {/* Suite strip: tool pills for lateral navigation */}
        <div className="border-t border-white/5 px-4 md:px-6 py-2 overflow-x-auto">
          <div className="flex items-center gap-1 md:gap-2 whitespace-nowrap">
            <span className="font-[var(--font-geist-mono)] text-[9px] tracking-[0.3em] uppercase text-neutral-600 mr-2 flex-shrink-0">
              Suite:
            </span>
            {ALL_TOOLS.map((x) => {
              const active = x.slug === tool.slug;
              return (
                <Link
                  key={x.slug}
                  href={`/tool/${x.slug}`}
                  className={`inline-flex items-center gap-1.5 px-2 py-1 font-[var(--font-geist-mono)] text-[10px] tracking-[0.15em] uppercase transition-colors ${
                    active
                      ? "bg-amber-400/15 text-amber-400 border border-amber-400/30"
                      : "text-neutral-500 hover:text-white border border-transparent hover:border-white/10"
                  }`}
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: x.accent }}
                  />
                  <span>{x.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* ═══ IFRAME ═══ */}
      <div className="flex-1 relative bg-neutral-900">
        <iframe
          src={tool.href}
          title={`${tool.name} — MakeReal`}
          className="absolute inset-0 w-full h-full border-0"
          allow="fullscreen; accelerometer; gyroscope; xr-spatial-tracking; clipboard-write"
        />
        {/* Fallback overlay shown only if iframe fails (hidden unless iframe is visibly blank; we expose "Open externally" always on top bar) */}
      </div>
    </div>
  );
}
