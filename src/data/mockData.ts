export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'commercial' | 'residential' | 'gates' | 'stairs' | 'coastal';
  location: string;
  image: string;
  description: string;
  specs: {
    material: string;
    finish: string;
    tolerances: string;
    leadTime: string;
    installationType: string;
  };
  features: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  verified: boolean;
  source: 'Google Review' | 'Verified Client' | 'Architect Reference';
}

export interface FinishOption {
  id: string;
  name: string;
  code: string;
  hex: string;
  surfaceTexture: string;
  glossLevel: string;
  corrosionHours: string;
  bestFor: string;
  description: string;
}

export interface VideoReel {
  id: string;
  title: string;
  tag: string;
  duration: string;
  handle: string;
  description: string;
  thumbnail: string;
  videoHighlights: string[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'lake-norman',
    title: 'LAKE NORMAN WATERFRONT ESTATE',
    subtitle: 'Multi-Level Exterior Black Powder-Coated Guardrail & Gate',
    category: 'residential',
    location: 'Cornelius, NC',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTpPKPIqLmdoj9vRHNllGMdcyfLe8rWiYHp0x1C-iX7LQ_l0ZZuEUYglmMP9uSTReRSVDKFNkvNd3QVnccwvLJ2j-05csjjk-xURsg1cAe6pS89R09FGM2bwff-Ih4ookBBS_kpaKjFljdPC1TC-PVG5MI0fgFuFbj4pEdUmv0eJ8yrOc9uMjEfacCQoCiZNCcX8F_AK4w-9ptVhnzZvbpHchEoC2VhvHPkRCLrQ',
    description: 'Custom multi-tier estate guardrail system designed to meet strict 4-inch sphere building codes while maintaining panoramic lake vistas. Built with hot-dip galvanized core steel and architectural satin black super-durable powder coating.',
    specs: {
      material: 'A500 Grade B Structural Tubing & Solid Steel Pickets',
      finish: 'Hot-Dip Galvanized + Tiger Drylac Series 38 Polyester',
      tolerances: '+/- 1/16" laser-verified field fitment',
      leadTime: '3.5 Weeks',
      installationType: 'Core-drilled bluestone anchor with high-strength non-shrink epoxy'
    },
    features: [
      'Engineered for 50 lbs/linear foot lateral railing loads',
      'Integrated low-voltage LED under-cap channel routing',
      'Zero-wobble welded post shoes concealed below finish pavers'
    ]
  },
  {
    id: 'charlotte-gate',
    title: 'CHARLOTTE HISTORIC ENTRY GATE',
    subtitle: 'Custom Forged Wrought-Iron Double Swing Vehicle Gate',
    category: 'gates',
    location: 'Myers Park, NC',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8gupjY7Ee01zuan4j24aX2Es1mE5U1ZyA5Tppf3mGeHMYaTcNbzzkxv77KWMGZ_FkMc9__Wv7Je6vMxyYXWmX0OKm58r4YD58ZiSUUDGEVb3OOO4QCjYmUTe6lsUS3NXBOWCwQO9yd_qVB5UahzmijUC2x3StJjMQHv0gR5Kz_0AP_7oP-3pzeqacO29V8grM9s48_y14fM5TKYIhkvYHT9F-frbQHTjQg8FFgA',
    description: 'Grand 18-foot historic entry gate hand-forged in our Monroe forge. Features solid 1" square hand-twisted pickets, waterjet-cut heraldic finials, and commercial heavy-duty sealed bearing pivot hinges.',
    specs: {
      material: 'Forged Solid Bar Stock & 2" Heavy Wall Structural Box Frame',
      finish: 'Zinc-Rich Epoxy Primer + Architectural Statuary Matte Black',
      tolerances: 'True-hung sag tolerance under 1/8" across 18ft span',
      leadTime: '4 Weeks',
      installationType: 'Embedded steel ground-caisson foundation tubes'
    },
    features: [
      'Engineered for LiftMaster automated commercial operators',
      'Custom greaseable ball-bearing hinges rated for 3,500 lbs',
      'Architectural review board historical compliance certified'
    ]
  },
  {
    id: 'commercial-mezzanine',
    title: 'COMMERCIAL MEZZANINE & STAIR',
    subtitle: 'Industrial Facility Structural Package • Monroe, NC',
    category: 'commercial',
    location: 'Monroe, NC',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJMpCoIX5t0uUrHduUWh8gov8AGKelK0oiuh0MyCe53cq9cnHs4NdUZhaYhpzI4C1-tZJCVcSS-rkm9_5bASHnAcyZHS12uh7EuONgJ7TMW6-dtiAhX-S-utHUPIgHZ0PfaX25ObSo0LAu8TYUgAahVh4_Q51MUbUd_b7TnFJkR0mUlMkIPsihk56gwjMTajQXClq5fV_TSVSRslMPD_NfXdbcTC3Qs1rka6IgCg',
    description: 'Complete prefabricated structural steel mezzanine with OSHA/ADA-compliant switchback staircase, heavy-duty diamond plate treads, and yellow-accented kickplates.',
    specs: {
      material: 'Wide Flange W-Beams (W10x33) & C12 Channel Stringers',
      finish: 'Shop-applied Industrial Epoxy Enamel',
      tolerances: 'AISC Code of Standard Practice compliance',
      leadTime: '2.5 Weeks',
      installationType: 'Bolted field assembly with ASTM A325 structural bolts'
    },
    features: [
      '125 PSF uniform live load engineering rating',
      'Continuous smooth ADA handrail returns',
      'Safety safety gate and integrated pallet loading drop zone'
    ]
  },
  {
    id: 'mono-stringer',
    title: 'MONO-STRINGER INTERIOR STAIR',
    subtitle: 'Custom Residence Floating Stair & Handrail • SouthPark, NC',
    category: 'stairs',
    location: 'SouthPark, NC',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzEAqOx4nZe0bUCskN55_VW7F-RKGhlag3adxBByxVYlWpDyj2mpp9QFRP-y7ANh5G88JdqzaZpLjQqNeM0sJ3ARCSKWOe2-_0HXoUh3Gtz8EkqS-c-EnPTIswv_F1n8H_WZx1cJHI8ZMpyosU1RxrXpU2vZfc0NG_t30OCyUpvtEJZe3cyDKWCjgwQVYfZNF7vwATp6kfV0ZEKDFRd0nVo9ZaCKtXTum_YKvL-g',
    description: 'Center-spine floating steel staircase fabricated with an 8"x8" structural box tube and CNC laser-cut 1/2" tread support plates designed to receive thick white oak treads.',
    specs: {
      material: '8"x8"x3/8" HSS Steel Spine & 1/2" Milled Plate Brackets',
      finish: 'Fine-Texture Graphite Charcoal Powder Coat',
      tolerances: '1/32" riser height variance across 16 risers',
      leadTime: '3 Weeks',
      installationType: 'Concealed structural header pocket & slab anchoring'
    },
    features: [
      'Deflection ratio exceeds L/480 for rock-solid walk feel',
      'Concealed cable tensioning hardware hidden inside posts',
      'Full TIG-welded seamless corners ground flush and blended'
    ]
  },
  {
    id: 'bahama-shutters',
    title: 'COASTAL ALUMINUM BAHAMA SHUTTERS',
    subtitle: 'Powder-Coated Coastal Exterior Package • Oak Island, NC',
    category: 'coastal',
    location: 'Oak Island, NC',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoDUeXk6KqexOvatX2hyL0P1ZKoRYRdZ0pygjnX2OPGiw2G1zb_cyDUNdjKubnsx5SqiaaGv6Px5qGfe-dpr6V52cEjDjs6_fXWKJMTRp4tmmfvWW728V7MSuxzqOi0cxUTvbtk0lJquTpkKnUHzdMF-tOcjyAxH2ReQ7l80luZ-P_40QVnLi9UU4VvBqU7Ww63I-K_ByUTTctBeH8LsuZ0diUKzqha7MYSon4bQ',
    description: 'Custom extruded aluminum Bahama louvered shutters and coastal balcony railings built to endure salty ocean winds, hurricane-force gusts, and coastal humidity.',
    specs: {
      material: '6063-T6 Marine-Grade Extruded Architectural Aluminum',
      finish: 'AAMA 2605 Fluropon Coastal Barrier Powder Coat',
      tolerances: '140 MPH Wind Load engineered',
      leadTime: '3 Weeks',
      installationType: '316 Stainless Steel standoff pins and hurricane hold-backs'
    },
    features: [
      'Salt spray resistance tested exceeding 3,000 hours',
      'Articulating telescopic support arms with locking positions',
      'Available in custom coastal color matching'
    ]
  },
  {
    id: 'lake-norman-highlight',
    title: 'LAKE NORMAN MODERN STEEL STAIRCASE',
    subtitle: 'Architectural Feature Floating Steel Assembly',
    category: 'stairs',
    location: 'Mooresville, NC',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvuDlfg8-WML4rEuV3tIyGj3sL4TaOLI2vGod-QNlt2WNTcPsXpc60bytpE3lDl6AJ3Ie1uCHOVbnye3LbVmm1TLJ8W_s9vZvX7fRrKSU8Zs-6BxdMCpFgVElv0oZg-_vMSH4IEiIOK_zp7s4mwhXln0s12OotSdExnhnxf8z41i6E9ryvIm4mKZRkjxnulJt9PmF0LWMnved4R0Zk75DW_ENWmO2wE2CmL9fAXw',
    description: 'Precision milled steel framework showcasing our heavy metalwork capabilities. Built with laser-cut gusset plates, seamless robotic TIG welds, and a custom burnished graphite finish.',
    specs: {
      material: 'A36 Plate & High-Yield Hollow Structural Sections',
      finish: 'Electrostatic Hand-Wiped Micro-Wax over Blackened Steel',
      tolerances: 'Aerospace-grade millimeter repeatability',
      leadTime: '4 Weeks',
      installationType: 'Structural steel foundation frame with flush leveling plates'
    },
    features: [
      'Signature exposed fastener architectural hardware',
      'Integrated acoustic dampening elastomer pads',
      'Featured in Carolina Architecture & Design 2024'
    ]
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Marcus Vance',
    role: 'Custom Home Builder',
    location: 'Lake Norman, NC',
    rating: 5,
    quote: 'James Iron & Steel exceeded all expectations! From start to finish, the crew was professional, communicative, and incredibly skilled. They built and installed our custom driveway gate and exterior railings quickly and with surgical precision. The quality of work is outstanding. You can tell they take pride in what they do. Highly recommend them to anyone looking for reliable, top-notch metalwork!',
    verified: true,
    source: 'Google Review'
  },
  {
    id: 'rev-2',
    name: 'Robert Nielsen',
    role: 'Commercial Superintendent',
    location: 'Charlotte, NC',
    rating: 5,
    quote: 'These guys are simply the best. Got the work done on schedule and treated me with total respect. Our commercial stair tower passed building inspection on the first run without a single modification requested. Fair pricing, no excuses, just honest Carolina craftsmanship.',
    verified: true,
    source: 'Verified Client'
  },
  {
    id: 'rev-3',
    name: 'Dr. John & Ellen Shepard',
    role: 'Residential Client',
    location: 'Waxhaw, NC',
    rating: 5,
    quote: 'James Iron & Steel came out and did an absolutely incredible job on our interior floating mono-stringer staircase. The turnaround time was fast, the powder coat finish was immaculate, and the crew left our home spotless after installation. I highly recommend James Iron & Steel for any kind of architectural fabrication project.',
    verified: true,
    source: 'Google Review'
  },
  {
    id: 'rev-4',
    name: 'Clara Beaumont',
    role: 'Principal Architect',
    location: 'SouthPark Charlotte, NC',
    rating: 5,
    quote: 'As an architectural firm, finding fabricators who can execute hairline tolerances from CAD drawings without cutting corners is rare. JIS has been our go-to partner for four commercial renovations and six luxury private residences. Their powder coating shop is the best in the Southeast.',
    verified: true,
    source: 'Architect Reference'
  }
];

export const FINISHES: FinishOption[] = [
  {
    id: 'matte-black',
    name: 'Architectural Matte Black',
    code: 'TIGER-38-BLK',
    hex: '#161719',
    surfaceTexture: 'Fine Micro-Texture',
    glossLevel: '5% - 8% Ultra Flat',
    corrosionHours: '3,000+ Hours (ASTM B117)',
    bestFor: 'Modern Railings, Exterior Gates, Steel Canopies',
    description: 'Our most sought-after architectural finish. Resists fingerprints, hides fine scratches, and maintains deep obsidian richness under Southern sun exposure.'
  },
  {
    id: 'oil-rubbed-bronze',
    name: 'Statuary Oil-Rubbed Bronze',
    code: 'JIS-BRZ-40',
    hex: '#3E342A',
    surfaceTexture: 'Satin Metallic Sheen',
    glossLevel: '20% - 25% Satin',
    corrosionHours: '2,500+ Hours',
    bestFor: 'Estate Gates, Courtyard Doors, Luxury Staircases',
    description: 'Warm copper undertones blended with aged dark patina highlights, replicating traditional foundry brass with modern polyester longevity.'
  },
  {
    id: 'graphite-slate',
    name: 'Foundry Graphite Carbon',
    code: 'MET-GRAPH-50',
    hex: '#30343C',
    surfaceTexture: 'Metallic Stipple',
    glossLevel: '15% Semi-Matte',
    corrosionHours: '3,000+ Hours',
    bestFor: 'Commercial Mezzanines, Modern Mono-Stringers, ADA Rails',
    description: 'Reflective micro-metallic flakes embedded in deep charcoal slate. Catches natural skylight with striking architectural depth.'
  },
  {
    id: 'burnished-gold',
    name: 'Heritage Burnished Gold',
    code: 'JIS-GLD-1952',
    hex: '#C5A059',
    surfaceTexture: 'Fine Lustre Brushed',
    glossLevel: '35% Luminous',
    corrosionHours: '2,000+ Hours',
    bestFor: 'Accent Finials, Custom Crests, Bespoke Handrail Brackets',
    description: 'Our signature brand alloy accent patina. Meticulously hand-burnished for focal entry statements and historic restoration details.'
  },
  {
    id: 'coastal-white',
    name: 'Coastal Glacier Marine White',
    code: 'MAR-WHT-90',
    hex: '#F4F5F7',
    surfaceTexture: 'Smooth High-Reflectance',
    glossLevel: '30% Satin-Gloss',
    corrosionHours: '4,000+ Hours (AAMA 2605)',
    bestFor: 'Bahama Shutters, Seaside Railings, Coastal Pergolas',
    description: 'Formulated with fluoropolymer resins to reflect intense coastal solar heat and block oceanfront salt-crust buildup.'
  }
];

export const VIDEO_REELS: VideoReel[] = [
  {
    id: 'reel-1',
    title: 'TIG WELDING ARCHITECTURAL RAILS',
    tag: 'Monroe Shop',
    duration: '0:45',
    handle: '@jamesironsteel',
    description: 'Clean seams and precise heat control before multi-stage coating.',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqzTkw94YQMhtEUr5_1NbRq6mkpwYre_Rq_5hsLCnYyKPm1zljGD-vAecahaZ-HWZye6pChoZ2lq99qU4_qpTZdKF2lOzxGqs9E3E13Kraygj1Uw5RJNuyam7QU-7LMVRihPrEysTGhzpSdNyZIc4iF53CK_3QhKTSAdGzqbjFyUvD096GDF_PugsIyhE_UuVAxJrRq2WDEH0R8Z9b8nT6beeHojqq0y9nvpB9NA',
    videoHighlights: [
      'High-purity Argon gas shielding preventing joint porosity',
      'Precision bevel preparation for 100% full-penetration welds',
      'Zero distortion clamping jig crafted for 20ft continuous rails'
    ]
  },
  {
    id: 'reel-2',
    title: 'CRANE HOISTING 18FT ESTATE GATE',
    tag: 'Field Install',
    duration: '1:12',
    handle: '@jamesironsteel',
    description: 'Final millimeter alignment on custom motorized pivots.',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_QgpWVTbs3AXc42vydqrm_rp9bNAwv90wAKnBi0zwYfi1TrfOhSyGh3Mk6Sb-U0siEc9jl2y4hMuhOsPaB7zoV6U31W1MdQARCET3PukMBKQhbKmCMEnL5UPV0DqE4K-atQKRJfqSD_6w47NiEOfsGXzVs-wxnEMAQXmkYdzXHUagwVjHWj0B5BzPvR09lNsUwBvwthDEvOO02kW_uB-1M8x69G-gbAxKWrLthQ',
    videoHighlights: [
      '50-ton hydraulic boom crane pick over estate stone pillars',
      'Laser transit verification across 18ft gate span',
      'Smooth automated swing test with concealed hydraulic operators'
    ]
  }
];

export const SERVICE_AREAS = [
  {
    id: 'monroe',
    name: 'Monroe (HQ)',
    detail: '2819 Tophill Rd Fabrication Shop & Powder Coat Facility',
    leadRadius: 'Primary Hub'
  },
  {
    id: 'charlotte',
    name: 'Charlotte & SouthPark',
    detail: 'Uptown Commercial Projects, SouthPark Custom Estates & Retail',
    leadRadius: '30 min'
  },
  {
    id: 'lakenorman',
    name: 'Lake Norman & Cornelius',
    detail: 'Waterfront Railing Packages, Estate Gates, Custom Docks',
    leadRadius: '45 min'
  },
  {
    id: 'union',
    name: 'Waxhaw & Union County',
    detail: 'Equestrian Farm Gates, Custom Home Ornamental Metalwork',
    leadRadius: '20 min'
  },
  {
    id: 'fortmill',
    name: 'Lake Wylie & Fort Mill, SC',
    detail: 'SC Licensed Commercial & Residential Structural Steel',
    leadRadius: '35 min'
  },
  {
    id: 'coastal',
    name: 'Oak Island & Wilmington',
    detail: 'Marine-Grade Aluminum Bahama Shutters & Beachside Railings',
    leadRadius: 'Coastal Division'
  }
];

export const FAQS = [
  {
    question: 'Do you provide free on-site estimates?',
    answer: 'Yes, complimentary estimates are standard at James Iron & Steel. We can evaluate your architectural drawings, sketches, or come directly to your job site in Charlotte, Monroe, or the surrounding region to take exact laser measurements and discuss material specs.'
  },
  {
    question: 'What is your typical turnaround time for fabrication?',
    answer: 'Lead times vary depending on project complexity. Standard residential railings and gates typically require 2 to 3 weeks from approved shop drawings to final install. Large structural packages or custom powder-coated automated entry gates are scheduled according to contractor milestones.'
  },
  {
    question: 'Do you handle both commercial and residential projects?',
    answer: 'Yes. We have dedicated teams for both. Our commercial division fabricates structural steel beams, fire escape stairs, and ADA railings, while our residential team focuses on high-finish interior handrails, drive gates, and decorative accents.'
  },
  {
    question: 'What warranties do you provide on your metalwork?',
    answer: 'We stand behind every weld with a written 1-Year Workmanship Warranty. Additionally, our architectural powder-coat finishes feature manufacturer warranties against chalking, chipping, and peeling.'
  },
  {
    question: 'Can you match existing architectural iron designs or sketches?',
    answer: 'Absolutely. Our craftsmen have 70+ years of collective lineage replicating historical wrought iron, matching existing balustrades, or building modern minimalist profiles from architect CAD files and Pinterest inspiration photos.'
  },
  {
    question: 'How durable is the finish against rust in coastal areas?',
    answer: 'For coastal jobs in Oak Island, Wilmington, or high-humidity lakefronts, we utilize hot-dip galvanization or marine-grade aluminum coupled with multi-coat electrostatic powder coating to ensure lifetime rust inhibition.'
  }
];
