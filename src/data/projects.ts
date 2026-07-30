export type ProjectItem = {
  id: string;
  title: string;
  location: string;
  tag: string;
  description: string;
  image?: string;
  live?: boolean;
};

export const PROJECT_STATS = [
  { value: "100+", label: "Total projects" },
  { value: "40+", label: "2D plans delivered" },
  { value: "25+", label: "3D visualizations" },
  { value: "35+", label: "Homes completed" },
] as const;

export const PROJECTS_2D: ProjectItem[] = [
  {
    id: "2d-35x45",
    title: "Ground Floor Plan — 35' × 45'",
    location: "Billawar",
    tag: "4BHK",
    description:
      "Vastu-compliant ground floor with covered car porch, puja ghar, three bedrooms and open lobby/sit-out.",
    image: "/assets/projects/2d/ground-floor-plan-35x45.png",
  },
  {
    id: "2d-33x33",
    title: "First Floor Plan — 33' × 33'",
    location: "Basohli",
    tag: "2BHK",
    description:
      "Compact first-floor addition with two bedrooms, kitchenette and balconies on both sides.",
    image: "/assets/projects/2d/first-floor-plan-33x33.png",
  },
  {
    id: "2d-18x35",
    title: "Ground Floor Plan — 18' × 35'",
    location: "Nagrota",
    tag: "2BHK",
    description:
      "Efficient layout for a narrow urban plot with two bedrooms, puja room and central staircase.",
    image: "/assets/projects/2d/ground-floor-plan-18x35.png",
  },
  {
    id: "2d-29x41",
    title: "First Floor Plan — 29' × 41'",
    location: "Kathua",
    tag: "3BHK",
    description:
      "Spacious first floor with master bedroom, pantry, puja room, front balcony and rear open terrace.",
    image: "/assets/projects/2d/first-floor-plan-29x41.png",
  },
  {
    id: "2d-renovation",
    title: "Renovation Drawing Set",
    location: "Prehta",
    tag: "Renovation",
    description:
      "Complete set for an existing structure — floor plans, front elevation, foundation detail and site/key plan.",
    image: "/assets/projects/2d/renovation-site-plan.png",
  },
];

export const PROJECTS_3D: ProjectItem[] = [
  {
    id: "3d-villa-sunset",
    title: "Modern Villa Render",
    location: "Exterior",
    tag: "4BHK",
    description:
      "Photorealistic exterior with brick cladding, glass balconies, boundary wall and landscaped frontage.",
    image: "/assets/projects/villa-sunset.png",
  },
  {
    id: "3d-chanoria",
    title: "Chanoria House",
    location: "Exterior",
    tag: "Hillside",
    description:
      "Hillside residence with flower planters, arched balcony and exposed brick pilaster detailing.",
    image: "/assets/projects/chanoria-house.png",
  },
  {
    id: "3d-grey",
    title: "Contemporary Facade",
    location: "Exterior",
    tag: "Modern",
    description:
      "Grey textured elevation with wooden louvers, planter balcony and covered car parking.",
    image: "/assets/projects/modern-grey-house.png",
  },
  {
    id: "3d-compact",
    title: "Compact Three-Storey",
    location: "Exterior",
    tag: "Narrow plot",
    description:
      "Slim vertical design for a narrow plot with feature glazing strip and window planters.",
    image: "/assets/projects/compact-three-storey.png",
  },
  {
    id: "3d-gate",
    title: "Boundary Wall & Gate",
    location: "Exterior",
    tag: "Gate & wall",
    description:
      "Street-facing compound design with custom double gate, planter niches and accent panels.",
    image: "/assets/projects/boundary-gate.png",
  },
  {
    id: "3d-corner",
    title: "Corner Plot Villa",
    location: "Exterior",
    tag: "Corner plot",
    description:
      "Dual-facade corner design with glass railing balcony, wooden slats and entrance porch.",
    image: "/assets/projects/corner-villa.png",
  },
  {
    id: "3d-sgr-front",
    title: "SGR Niwas",
    location: "Exterior",
    tag: "Duplex",
    description:
      "Cream duplex with wide first-floor terrace, planter beds and stone-textured feature column.",
    image: "/assets/projects/sgr-niwas-front.png",
  },
  {
    id: "3d-sgr-elevation",
    title: "SGR Niwas — Front Elevation",
    location: "Exterior",
    tag: "Elevation",
    description:
      "Straight-on elevation study with glass terrace railing, box windows and ground-floor flower beds.",
    image: "/assets/projects/sgr-niwas-elevation.png",
  },
];

export const PROJECTS_LIVE: ProjectItem[] = [
  {
    id: "live-dewal",
    title: "Residential Build — Dewal",
    location: "Dewal",
    tag: "3BHK",
    description:
      "Foundation complete, RCC columns erected. Superstructure and slab work in progress.",
    image: "/assets/projects/modern-grey-house.png",
    live: true,
  },
  {
    id: "live-nagrota",
    title: "Renovation — Nagrota",
    location: "Nagrota",
    tag: "Renovation",
    description:
      "Waterproofing of terrace and bathroom, interior plastering and electrical rewiring underway.",
    image: "/assets/projects/boundary-gate.png",
    live: true,
  },
  {
    id: "live-billawar",
    title: "New Villa — Billawar",
    location: "Billawar",
    tag: "4BHK",
    description:
      "Terrain treatment done. Plinth and ground floor brickwork currently in progress.",
    image: "/assets/projects/corner-villa.png",
    live: true,
  },
  {
    id: "live-basohli",
    title: "Hillside Cottage — Basohli",
    location: "Basohli",
    tag: "2BHK",
    description:
      "Retaining wall constructed. Foundation casting scheduled after monsoon inspection.",
    image: "/assets/projects/chanoria-house.png",
    live: true,
  },
];

export const PROJECTS_COMPLETED: ProjectItem[] = [
  {
    id: "done-billawar",
    title: "Completed Home — Billawar",
    location: "Billawar",
    tag: "3BHK",
    description:
      "Full construction with terrain treatment, Vastu layout and landscaped front area.",
    image: "/assets/projects/villa-sunset.png",
  },
  {
    id: "done-manwal",
    title: "Completed Villa — Manwal",
    location: "Manwal",
    tag: "3BHK",
    description:
      "3BHK with roof waterproofing, modern kitchen and tiled exterior finishes.",
    image: "/assets/projects/sgr-niwas-front.png",
  },
  {
    id: "done-bani",
    title: "Completed Duplex — Bani",
    location: "Bani",
    tag: "Duplex",
    description:
      "Two-family residence with shared parking and independent floor access.",
    image: "/assets/projects/sgr-niwas-elevation.png",
  },
  {
    id: "done-kathua",
    title: "Urban Residence — Kathua",
    location: "Kathua",
    tag: "4BHK",
    description:
      "4BHK on a city plot with boundary wall, gate and full interior finishing.",
    image: "/assets/projects/compact-three-storey.png",
  },
  {
    id: "done-gujroo",
    title: "Compact Home — Gujroo",
    location: "Gujroo",
    tag: "2BHK",
    description:
      "Affordable 2BHK build with efficient space planning and low-maintenance exterior.",
    image: "/assets/projects/modern-grey-house.png",
  },
  {
    id: "done-udhampur",
    title: "Valley View Home — Udhampur",
    location: "Udhampur",
    tag: "3BHK",
    description:
      "3BHK with large windows, balcony and anti-termite treatment throughout.",
    image: "/assets/projects/corner-villa.png",
  },
];
