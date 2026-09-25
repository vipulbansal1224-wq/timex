export interface Product {
  id: string;
  name: string;
  category: 'bolts' | 'nuts' | 'wires' | 'washers';
  price: string;
  priceValue: number;
  unit: string;
  rating: number;
  reviewsCount: number;
  minOrderQuantity: string;
  image: string;
  shortDesc: string;
  description: string;
  specifications: Record<string, string>;
  applications: string[];
  standards: string[];
  availableFinishes: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'ms-bolt-standard',
    name: 'Mild Steel (MS) Hex Bolt',
    category: 'bolts',
    price: '₹70',
    priceValue: 70,
    unit: 'Kg',
    rating: 4.8,
    reviewsCount: 24,
    minOrderQuantity: '100 Kg',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/EZ/SN/NP/4140564/mild-steel-bolt-250x250.jpg',
    shortDesc: 'High-precision cold forged Mild Steel Hex Bolts manufactured according to IS:1363 & DIN 933 standards.',
    description: 'Timexo Wire (India) manufactures premium Grade Mild Steel Hex Bolts engineered for high structural strength, precision threading, and superior tensile durability. Ideal for construction, machinery assembly, and steel fabrication.',
    specifications: {
      'Material Grade': 'Mild Steel (Grade 4.6 / 5.6 / 8.8)',
      'Diameter Range': 'M6 to M36',
      'Length Range': '12mm to 300mm',
      'Thread Type': 'Metric Coarse / BSW / UNC',
      'Surface Finish': 'Zinc Plated (Electro-galvanized), Black Oxide, Hot Dip Galvanized',
      'Head Type': 'Hexagonal Outer Drive'
    },
    applications: ['Structural Steel Building', 'Machinery & Equipment Assembly', 'Automotive Framing', 'Heavy Infrastructure Projects'],
    standards: ['DIN 933 / ISO 4017', 'IS 1363 / IS 1364', 'BS 1083'],
    availableFinishes: ['Bright Zinc Plated', 'Black Phosphate', 'Hot Dip Galvanized', 'Self Finish']
  },
  {
    id: 'ms-hex-bolt-10mm',
    name: '10mm Mild Steel Hex Bolt',
    category: 'bolts',
    price: '₹60',
    priceValue: 60,
    unit: 'Kilogram',
    rating: 4.7,
    reviewsCount: 18,
    minOrderQuantity: '50 Kg',
    image: 'https://5.imimg.com/data5/BA/LU/VX/SELLER-4140564/10mm-mild-steel-hex-bolt-250x250.jpg',
    shortDesc: 'Cold-formed M10 Mild Steel Hexagon Head Bolt with uniform pitch thread for industrial fastening.',
    description: 'Specially engineered 10mm Mild Steel Hex Bolts designed for optimum torque retention and resistance against mechanical shear. Manufactured with high-yield strength steel wire sourced from certified mills.',
    specifications: {
      'Diameter': '10mm (M10)',
      'Thread Pitch': '1.5mm',
      'Length Options': '20mm to 150mm',
      'Material': 'Mild Steel (Grade 4.6)',
      'Tensile Strength': '400 N/mm²',
      'Corrosion Protection': 'Clear Zinc Passivation'
    },
    applications: ['Electrical Tower Fabrication', 'Solar Structure Mounting', 'Industrial Racking Systems', 'Agricultural Equipment'],
    standards: ['IS 1363 Part 1', 'DIN 931 (Half Thread)', 'DIN 933 (Full Thread)'],
    availableFinishes: ['Yellow Zinc', 'Blue Zinc', 'Self Color Natural']
  },
  {
    id: 'ms-hex-bolt-20mm',
    name: '20mm Heavy Industrial Hex Bolt',
    category: 'bolts',
    price: '₹58',
    priceValue: 58,
    unit: 'Kilogram',
    rating: 4.9,
    reviewsCount: 15,
    minOrderQuantity: '200 Kg',
    image: 'https://5.imimg.com/data5/ZA/AQ/RL/SELLER-4140564/mild-steel-hex-bolt-250x250.jpg',
    shortDesc: 'Heavy-duty 20mm (M20) MS Bolt for bridge erection, structural steel columns, and heavy machinery.',
    description: 'Precision forged M20 Heavy Industrial Bolts built to withstand immense load stress. Features clean cut threads for smooth wrenching and minimum wear during torque application.',
    specifications: {
      'Diameter': '20mm (M20)',
      'Thread Pitch': '2.5mm',
      'Length': '40mm to 300mm',
      'Material': 'Low Carbon Steel / Mild Steel',
      'Yield Strength': '240 N/mm²',
      'Weight per 100 pcs': 'Approx 22.5 Kg (for 100mm len)'
    },
    applications: ['Bridge & Highway Construction', 'Heavy Crane Girder Assembly', 'Railway Tracks & Sleepers', 'Pipeline Flange Bolting'],
    standards: ['DIN 601', 'IS 1364', 'ASTM A307'],
    availableFinishes: ['Hot Dip Galvanized', 'Zinc Electroplated']
  },
  {
    id: 'ms-carriage-bolt',
    name: 'Mild Steel Carriage Bolt (Cup Head)',
    category: 'bolts',
    price: '₹68',
    priceValue: 68,
    unit: 'Kg',
    rating: 4.6,
    reviewsCount: 12,
    minOrderQuantity: '100 Kg',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/5/507891501/PL/JJ/ZY/4140564/bolts-250x250.jpg',
    shortDesc: 'Smooth round head MS Carriage Bolts with square neck below head to prevent rotation during tightening.',
    description: 'Designed for wood-to-metal and security structural installations. The square neck under the smooth dome head locks into place, allowing easy single-side nut tightening.',
    specifications: {
      'Head Type': 'Mushroom / Round Cup Head with Square Neck',
      'Diameter': 'M6 to M16',
      'Length': '25mm to 200mm',
      'Material': 'Mild Steel IS 2062 Grade',
      'Thread': 'UNC / Metric Coarse'
    },
    applications: ['Security Fencing & Gates', 'Timber Construction & Guard Rails', 'Truck & Trailer Body Building', 'Playground Equipment'],
    standards: ['DIN 603', 'BS 4933'],
    availableFinishes: ['Zinc Passivated', 'Hot Dip Galvanized']
  },
  {
    id: 'ms-hex-nut-standard',
    name: 'Industrial Mild Steel Hex Nut',
    category: 'nuts',
    price: '₹65',
    priceValue: 65,
    unit: 'Kg',
    rating: 4.8,
    reviewsCount: 29,
    minOrderQuantity: '100 Kg',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/7/530299837/DF/VW/KJ/4140564/ms-bolts-and-nuts-500x500.jpg',
    shortDesc: 'Precision tapped Hexagonal Nuts manufactured to standard metric thread pitch for perfect bolt mating.',
    description: 'Our Mild Steel Hex Nuts provide dependable vibration resistance and uniform load distribution across bolted joints. Manufactured with automatic multi-station cold nut formers.',
    specifications: {
      'Material': 'Mild Steel Grade 4 / Grade 8',
      'Size Range': 'M4 to M42',
      'Threading': 'ISO Metric Threads (Internal Tapped)',
      'Hardness': 'HB 110 to 180',
      'Thread Fit': '6H Precision Tolerance'
    },
    applications: ['General Mechanical Assembly', 'Pipe Clamping & Support Systems', 'Automotive Chassis', 'Scaffolding Structures'],
    standards: ['DIN 934 / ISO 4032', 'IS 1363 Part 3'],
    availableFinishes: ['Electro Zinc', 'Galvanized', 'Natural Black']
  },
  {
    id: 'ms-flange-lock-nut',
    name: 'Heavy Duty MS Flange Nut',
    category: 'nuts',
    price: '₹72',
    priceValue: 72,
    unit: 'Kg',
    rating: 4.7,
    reviewsCount: 14,
    minOrderQuantity: '50 Kg',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/5/507893919/AR/EJ/TH/4140564/8mm-mild-steel-hex-bolt-250x250.jpg',
    shortDesc: 'Hex Nut with wide integrated flange base serving as an integrated non-spinning washer.',
    description: 'MS Flange Nuts feature a wide circular rim that spreads clamping force across the joint surface, preventing damage to connected parts and eliminating the need for a separate flat washer.',
    specifications: {
      'Size Range': 'M6 to M20',
      'Flange Type': 'Serrated / Smooth Face',
      'Material': 'Cold Forged Mild Steel',
      'Thread Fit': 'Class 6H Internal Tapping'
    },
    applications: ['Automotive Frame Assemblies', 'Exhaust Manifold Mounting', 'Conveyor Roller Racks'],
    standards: ['DIN 6923', 'EN 1661'],
    availableFinishes: ['Yellow Zinc', 'White Zinc']
  },
  {
    id: 'ms-hb-wire-coils',
    name: 'Mild Steel HB Wire (Hard Bright Wire)',
    category: 'wires',
    price: '₹55',
    priceValue: 55,
    unit: 'Kg',
    rating: 4.9,
    reviewsCount: 31,
    minOrderQuantity: '500 Kg',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/EZ/SN/NP/4140564/mild-steel-bolt-250x250.jpg',
    shortDesc: 'High-purity Hard Bright MS Wires for fast drawing, cold heading fastener production, and mesh fabrication.',
    description: 'Timexo Wire (India) is a leading processor of HB (Hard Bright) Mild Steel Wires. Drawn from premier wire rods, our HB wire features smooth surface finish, uniform gauge diameter, and optimal tensile strength.',
    specifications: {
      'Wire Gauge (SWG)': '6 SWG to 18 SWG (1.2mm to 5.0mm)',
      'Tensile Strength': '500 - 750 N/mm²',
      'Carbon Content': '0.08% - 0.15% (Low Carbon)',
      'Coil Weight': '50 Kg to 500 Kg per coil bundle',
      'Surface': 'Bright Smooth Clean Finish'
    },
    applications: ['Cold Forging Bolt & Rivet Manufacturing', 'Welded Mesh & Wire Baskets', 'Nail & Screw Production', 'Binding & Bundling'],
    standards: ['IS 280 / IS 1812', 'ASTM A510'],
    availableFinishes: ['Bright Draw Finish', 'Annealed (Soft)']
  },
  {
    id: 'galvanized-binding-wire',
    name: 'Galvanized MS Binding Wire',
    category: 'wires',
    price: '₹58',
    priceValue: 58,
    unit: 'Kg',
    rating: 4.7,
    reviewsCount: 21,
    minOrderQuantity: '200 Kg',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/5/507891501/PL/JJ/ZY/4140564/bolts-250x250.jpg',
    shortDesc: 'Flexible electro-galvanized mild steel binding wire for construction rebar tying and industrial packaging.',
    description: 'Soft annealed galvanized iron/steel wire designed for high flexibility and anti-corrosion life. Does not snap under heavy twist-tying load.',
    specifications: {
      'Diameter': '1.0mm to 3.0mm (18 SWG to 10 SWG)',
      'Zinc Coating Thickness': '40g/m² to 90g/m²',
      'Elongation': '15% - 25%',
      'Packing': '10 Kg / 25 Kg Rolls wrapped in HDPE'
    },
    applications: ['RCC Construction Rebar Tying', 'Chainlink Fencing Fabrication', 'Agriculture Trellising', 'Industrial Packing'],
    standards: ['IS 280 Mild Steel Wire Specifications'],
    availableFinishes: ['Hot Dip GI', 'Electro GI']
  },
  {
    id: 'ms-plain-spring-washer',
    name: 'MS Flat & Spring Washers',
    category: 'washers',
    price: '₹64',
    priceValue: 64,
    unit: 'Kg',
    rating: 4.8,
    reviewsCount: 19,
    minOrderQuantity: '50 Kg',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/7/530299837/DF/VW/KJ/4140564/ms-bolts-and-nuts-500x500.jpg',
    shortDesc: 'Stamped Mild Steel Flat Washers and Spring Lock Washers for thread tension and joint protection.',
    description: 'Precision stamped MS washers manufactured to withstand high torque pressure without warping. Protects contact surfaces and prevents nut backing under heavy vibration.',
    specifications: {
      'Types Available': 'Flat / Plain Washer (Form A/B), Spring Lock Washer (Single Coil)',
      'Inner Diameter': 'M4 to M36',
      'Thickness': '1.0mm to 6.0mm',
      'Material': 'Cold Rolled MS Sheet / Spring Steel'
    },
    applications: ['Automotive Suspension & Frame', 'Electrical Transformers & Switchgear', 'Heavy Industrial Machinery', 'Structural Steel Joints'],
    standards: ['DIN 125 (Flat)', 'DIN 127 (Spring Lock)', 'IS 2016'],
    availableFinishes: ['Bright Zinc', 'Hot Dip Galvanized', 'Blackened']
  }
];

export const COMPANY_INFO = {
  name: 'Timexo Wire (India)',
  legalName: 'Timexo Wire (India) Proprietorship',
  proprietor: 'Mr. Gautam Bansal',
  establishedYear: 1972,
  experienceYears: 54,
  location: 'Ludhiana, Punjab, India',
  postalCode: '141001',
  phone: '+91-7942545440',
  secondaryPhone: '+91 98140 12345',
  email: 'sales@timexowire.com',
  rating: 4.6,
  reviewsCount: 32,
  responseRate: '83%',
  gstVerified: true,
  trustSealVerified: true,
  memberSinceYears: 14,
  monthlyCapacity: '1000+ Metric Tons',
  address: 'Industrial Area C, Near Gill Road, Ludhiana, Punjab 141001, India',
};
