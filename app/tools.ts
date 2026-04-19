export type Tool = {
  slug: string;
  n: string;
  code: string;
  name: string;
  tagline: string;
  material: string;
  materialLabel: string;
  accent: string;
  image: string;
  href: string;
  kind: "fab" | "gen";
};

export const ALL_TOOLS: Tool[] = [
  {
    slug: "rib-maker",
    n: "01",
    code: "CO-RIB-01",
    name: "Rib Maker",
    tagline: "Corian ribs. Fluted, carved, backlit.",
    material: "Corian",
    materialLabel: "Solid Surface · Corian",
    accent: "#e8e2d6",
    image: "/tools/rib.png",
    href: "https://rib-maker.vercel.app/",
    kind: "fab",
  },
  {
    slug: "perf-panel",
    n: "02",
    code: "CO-PRF-02",
    name: "Perf Panel Maker",
    tagline: "Perforated screens, backlit walls.",
    material: "Corian / Metal",
    materialLabel: "Corian or Metal",
    accent: "#d4a762",
    image: "/tools/perf.png",
    href: "https://mr-perf-panel-maker.vercel.app/",
    kind: "fab",
  },
  {
    slug: "triangle-fold",
    n: "03",
    code: "CO-FLD-03",
    name: "Triangle Fold",
    tagline: "Folded Corian. Ribbon geometry.",
    material: "Corian",
    materialLabel: "Solid Surface · Corian",
    accent: "#f5ebd7",
    image: "/tools/fold.png",
    href: "https://triangle-fold-mr.vercel.app",
    kind: "fab",
  },
  {
    slug: "triangular-wall",
    n: "04",
    code: "3F-TRI-04",
    name: "Triangular Wall",
    tagline: "Translucent acrylic triangles.",
    material: "3form Acrylic",
    materialLabel: "3form · Translucent Acrylic",
    accent: "#6db7b2",
    image: "/tools/triangular.png",
    href: "https://triangular-wall-maker-9mryo2o14-mario-s-projects-4f51649b.vercel.app",
    kind: "fab",
  },
  {
    slug: "voronoi-panel",
    n: "05",
    code: "MDF-VOR-05",
    name: "Voronoi Panel",
    tagline: "Laminated MDF, organic cell patterns.",
    material: "MDF Laminated",
    materialLabel: "MDF · Wood Laminate",
    accent: "#b8926a",
    image: "/tools/voronoi.png",
    href: "https://voronoi-cnc-panel-60zxg29ms-mario-s-projects-4f51649b.vercel.app",
    kind: "fab",
  },
  {
    slug: "lake",
    n: "G1",
    code: "IMG-LAKE",
    name: "Lake",
    tagline: "Generative pattern studies.",
    material: "Image Gen",
    materialLabel: "Output · Image Only",
    accent: "#8aa2c7",
    image: "/tools/fold.png",
    href: "https://make-real-flux2.vercel.app/",
    kind: "gen",
  },
  {
    slug: "fins",
    n: "G2",
    code: "IMG-FINS",
    name: "Fins",
    tagline: "Concept renderings, elevator lobbies.",
    material: "Image Gen",
    materialLabel: "Output · Image Only",
    accent: "#c9b79a",
    image: "/tools/fins.jpg",
    href: "https://fins-maker.vercel.app/",
    kind: "gen",
  },
];

export const FAB_TOOLS = ALL_TOOLS.filter((t) => t.kind === "fab");
export const GEN_TOOLS = ALL_TOOLS.filter((t) => t.kind === "gen");

export function getToolBySlug(slug: string): Tool | undefined {
  return ALL_TOOLS.find((t) => t.slug === slug);
}
