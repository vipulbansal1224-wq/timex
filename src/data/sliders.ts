export interface SlideItem {
  id: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix?: string;
  subtitle: string;
  highlights: string[];
  ctaPrimaryText: string;
  ctaPrimaryAction?: 'rfq' | 'products' | 'contact' | 'call' | 'about';
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
  statNumber: string;
  statLabel: string;
  image: string;
}

export const HOME_SLIDES: SlideItem[] = [
  {
    id: 'home-1',
    badge: '50+ Years Manufacturing Trust (Est. 1972)',
    titlePrefix: 'High-Precision',
    titleHighlight: 'MS Bolts, Nuts',
    titleSuffix: '& Industrial Wires',
    subtitle: 'Timexo Wire (India) is Ludhiana’s premier manufacturer of cold-forged Mild Steel Hex Bolts, Heavy MS Nuts, HB Wire Coils, and Galvanized Fasteners built to ISO/DIN precision standards.',
    highlights: ['Cold Forged Precision', 'IS & DIN 933 Compliant', 'Wholesale Rates (Per Kg)', '1000+ Ton Monthly Stock'],
    ctaPrimaryText: 'Request Wholesale Price Quote',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'Explore Catalog',
    ctaSecondaryHref: '/products',
    statNumber: '54+',
    statLabel: 'Years Industrial Experience',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/EZ/SN/NP/4140564/mild-steel-bolt-250x250.jpg'
  },
  {
    id: 'home-2',
    badge: 'Cold-Formed Fastener Engineering',
    titlePrefix: 'Heavy-Duty',
    titleHighlight: 'Cold Forged Bolts',
    titleSuffix: '& Hex Nuts',
    subtitle: 'Manufactured using high-speed multi-station headers and thread rolling machines. Guaranteed pitch accuracy for structural building, towers, and solar power plants.',
    highlights: ['M6 to M36 Diameter Sizes', 'Grade 4.6 / 5.6 / 8.8 Options', 'Clear Zinc & HDG Coating', 'Zero Thread Stripping Guarantee'],
    ctaPrimaryText: 'Get Fastener Quote',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'View Technical Specs',
    ctaSecondaryHref: '/products',
    statNumber: '1000+',
    statLabel: 'Metric Tons Monthly Output',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/7/530299837/DF/VW/KJ/4140564/ms-bolts-and-nuts-500x500.jpg'
  },
  {
    id: 'home-3',
    badge: 'Wire Drawing & Processing Plant',
    titlePrefix: 'Premium Grade',
    titleHighlight: 'Hard Bright (HB) Wire',
    titleSuffix: '& GI Binding Wire',
    subtitle: 'Drawn from certified steel billets for high ductility, fast forging, and wire mesh manufacturing. Available in 6 SWG to 18 SWG coils.',
    highlights: ['Bright Clean Surface Finish', 'High Tensile & Soft Annealed', '50 Kg to 500 Kg Coils', 'Ideal for Bolt Forging & Rebar'],
    ctaPrimaryText: 'Inquire Wire Prices',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'Contact Factory',
    ctaSecondaryHref: '/contact',
    statNumber: '100%',
    statLabel: 'Steel Purity Guarantee',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/5/507891501/PL/JJ/ZY/4140564/bolts-250x250.jpg'
  },
  {
    id: 'home-4',
    badge: 'Pan-India Freight Logistics',
    titlePrefix: 'Express 24-48 Hr',
    titleHighlight: 'Factory Dispatch',
    titleSuffix: 'Across India',
    subtitle: 'Located in Ludhiana’s Industrial Area C with direct access to major railway freight corridors and national highways for fast bulk deliveries.',
    highlights: ['TrustSEAL Verified (14 Yrs)', 'GST Registered Firm', '100% Payment Protection', 'Mill Test Certificates Provided'],
    ctaPrimaryText: 'Order Direct Factory Stock',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'Call Sales Direct',
    ctaSecondaryHref: 'tel:+917942545440',
    statNumber: '4.6★',
    statLabel: 'Buyer Rating (32+ Reviews)',
    image: 'https://5.imimg.com/data5/BA/LU/VX/SELLER-4140564/10mm-mild-steel-hex-bolt-250x250.jpg'
  }
];

export const PRODUCTS_SLIDES: SlideItem[] = [
  {
    id: 'prod-1',
    badge: 'Complete Industrial Catalog',
    titlePrefix: 'Explore Our',
    titleHighlight: 'Fastener & Wire',
    titleSuffix: 'Manufacturing Range',
    subtitle: 'From M6 hex bolts to 500kg HB wire coils, explore India’s most trusted mild steel industrial component catalog direct from Ludhiana.',
    highlights: ['MS Hex Bolts (M6-M36)', 'Heavy Duty MS Nuts', 'HB & GI Wire Coils', 'Carriage & Flange Bolts'],
    ctaPrimaryText: 'Request Bulk Quote',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'View All Items',
    ctaSecondaryHref: '#catalog-grid',
    statNumber: '9+',
    statLabel: 'Product Categories',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/EZ/SN/NP/4140564/mild-steel-bolt-250x250.jpg'
  },
  {
    id: 'prod-2',
    badge: 'Custom Blueprint Manufacturing',
    titlePrefix: 'Custom Lengths &',
    titleHighlight: 'Special Forged',
    titleSuffix: 'Fastener Specs',
    subtitle: 'In-house die development allows us to forge custom bolt lengths, thread pitches, and specialized flange nuts tailored to your exact drawings.',
    highlights: ['Custom Thread Pitch', 'Special Head Stampings', 'Clear & Yellow Plating', 'B2B Wholesale Per Kg'],
    ctaPrimaryText: 'Submit Drawing Quote',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'Quality Assurance',
    ctaSecondaryHref: '/quality',
    statNumber: '100%',
    statLabel: 'Custom Tolerance Match',
    image: 'https://5.imimg.com/data5/ZA/AQ/RL/SELLER-4140564/mild-steel-hex-bolt-250x250.jpg'
  },
  {
    id: 'prod-3',
    badge: 'Wire Drawing Division',
    titlePrefix: 'Hard Bright (HB)',
    titleHighlight: 'Steel Wire Coils',
    titleSuffix: '& GI Binding Wire',
    subtitle: 'Processed from high-purity low carbon wire rods. Designed for high speed fastener forging, nail making, and construction rebar tying.',
    highlights: ['SWG 6 to SWG 18 Gauges', 'Uniform Tensile Strength', 'Rust-Resistant Galvanized', 'Bulk Freight Bundles'],
    ctaPrimaryText: 'Get Wire Rate per KG',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'Check Specifications',
    ctaSecondaryHref: '#catalog-grid',
    statNumber: '500 Tons',
    statLabel: 'Monthly Wire Capacity',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/5/507891501/PL/JJ/ZY/4140564/bolts-250x250.jpg'
  },
  {
    id: 'prod-4',
    badge: 'Direct Factory Pricing',
    titlePrefix: 'Guaranteed Best',
    titleHighlight: 'Wholesale Per Kg',
    titleSuffix: 'Price Rates',
    subtitle: 'Cut out middlemen margins by ordering directly from Timexo Wire’s manufacturing plant in Ludhiana. Clear transparent B2B pricing.',
    highlights: ['Direct Mill Sourced Raw Material', 'Transparent Weight Scale', 'Discounts on Bulk Tonnage', 'GST Invoice Included'],
    ctaPrimaryText: 'Calculate Order Cost',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'Call Sales Team',
    ctaSecondaryHref: 'tel:+917942545440',
    statNumber: '₹58-70',
    statLabel: 'Average Per KG Rate',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/7/530299837/DF/VW/KJ/4140564/ms-bolts-and-nuts-500x500.jpg'
  }
];

export const ABOUT_SLIDES: SlideItem[] = [
  {
    id: 'about-1',
    badge: '54 Years Industrial Heritage',
    titlePrefix: 'Founded in 1972 by',
    titleHighlight: 'Mr. Gautam Bansal',
    titleSuffix: 'in Ludhiana',
    subtitle: 'Over 5 decades of continuous technological evolution, building one of Punjab’s most respected metal fastener and wire manufacturing enterprises.',
    highlights: ['Established 1972', 'Proprietorship Firm', 'Ludhiana Industrial Hub', 'Pan-India Distribution'],
    ctaPrimaryText: 'Request Company Profile',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'Our Product Range',
    ctaSecondaryHref: '/products',
    statNumber: '1972',
    statLabel: 'Year Established',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/EZ/SN/NP/4140564/mild-steel-bolt-250x250.jpg'
  },
  {
    id: 'about-2',
    badge: 'Machinery & Infrastructure',
    titlePrefix: 'Multi-Station',
    titleHighlight: 'Cold Headers & Nut',
    titleSuffix: 'Forming Plants',
    subtitle: 'Equipped with high-speed automated forging headers, rotary thread rollers, and in-house wire drawing blocks for high dimensional accuracy.',
    highlights: ['Automatic Multi-Station Headers', 'High-Speed Thread Rollers', 'In-House Wire Drawing Blocks', '1000+ Ton Monthly Processing'],
    ctaPrimaryText: 'Schedule Factory Visit',
    ctaPrimaryAction: 'contact',
    ctaSecondaryText: 'Quality Standards',
    ctaSecondaryHref: '/quality',
    statNumber: '1000+',
    statLabel: 'Tons Monthly Capacity',
    image: 'https://5.imimg.com/data5/BA/LU/VX/SELLER-4140564/10mm-mild-steel-hex-bolt-250x250.jpg'
  },
  {
    id: 'about-3',
    badge: 'Verified Credibility',
    titlePrefix: '14 Years Member on',
    titleHighlight: 'IndiaMART TrustSEAL',
    titleSuffix: '& GST Verified',
    subtitle: 'Maintaining 83% response rate, 100% payment protection compliance, and top buyer trust ratings across thousands of successful B2B dispatches.',
    highlights: ['TrustSEAL Certified (14 Yrs)', 'GST Verified Business', '4.6/5 ★ Buyer Rating', '32+ Verified Buyer Reviews'],
    ctaPrimaryText: 'Verify Credentials',
    ctaPrimaryAction: 'contact',
    ctaSecondaryText: 'Read Buyer Reviews',
    ctaSecondaryHref: '/reviews',
    statNumber: '14 Yrs',
    statLabel: 'TrustSEAL Member',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/7/530299837/DF/VW/KJ/4140564/ms-bolts-and-nuts-500x500.jpg'
  },
  {
    id: 'about-4',
    badge: 'Core Corporate Mission',
    titlePrefix: 'Delivering High-Strength',
    titleHighlight: 'Fasteners for Nation',
    titleSuffix: 'Building Infrastructure',
    subtitle: 'Supplying foundational MS bolts and wire coils to solar power mounting structures, electrical transmission towers, and bridge erection projects.',
    highlights: ['Solar Mounting Fasteners', 'Transmission Tower Bolts', 'Building Construction Wire', 'Automotive OEM Quality'],
    ctaPrimaryText: 'Partner With Us',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'Contact Sales',
    ctaSecondaryHref: '/contact',
    statNumber: '100%',
    statLabel: 'Commitment to Quality',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/5/507891501/PL/JJ/ZY/4140564/bolts-250x250.jpg'
  }
];

export const QUALITY_SLIDES: SlideItem[] = [
  {
    id: 'qual-1',
    badge: 'Zero-Defect Commitment',
    titlePrefix: 'ISO & DIN Standard',
    titleHighlight: 'Quality Inspection',
    titleSuffix: '& Metallurgical Testing',
    subtitle: 'Every batch of MS bolts, nuts, and wire coils undergoes rigorous multi-stage physical and dimensional inspection to prevent joint failure.',
    highlights: ['DIN 933 / ISO 4017 Specs', 'IS 1363 Part 1 Compliance', 'Zero-Defect Quality Control', 'Batch Test Certificates'],
    ctaPrimaryText: 'Request QC Test Sheet',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'View All Standards',
    ctaSecondaryHref: '/products',
    statNumber: '100%',
    statLabel: 'Inspection Rate',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/EZ/SN/NP/4140564/mild-steel-bolt-250x250.jpg'
  },
  {
    id: 'qual-2',
    badge: 'Hydraulic Strength Testing',
    titlePrefix: 'Proof Load & Tensile',
    titleHighlight: 'Strength Guarantee',
    titleSuffix: 'Testing Lab',
    subtitle: 'Tested on hydraulic universal testing machines to guarantee proof load capacity up to Grade 8.8 standards under extreme load tension.',
    highlights: ['Grade 4.6 / 5.6 / 8.8 Testing', 'Hydraulic Tensile Bench', 'Proof Load Verification', 'Elongation & Shear Checks'],
    ctaPrimaryText: 'Get Tensile Spec Sheet',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'Contact QC Manager',
    ctaSecondaryHref: '/contact',
    statNumber: '400+',
    statLabel: 'N/mm² Tensile Strength',
    image: 'https://5.imimg.com/data5/ZA/AQ/RL/SELLER-4140564/mild-steel-hex-bolt-250x250.jpg'
  },
  {
    id: 'qual-3',
    badge: 'Surface Protection Lab',
    titlePrefix: 'Electro-Zinc & Hot Dip',
    titleHighlight: 'Galvanized Coating',
    titleSuffix: 'Micron Monitoring',
    subtitle: 'Coating thickness monitored from 5 to 15 microns to ensure multi-year corrosion resistance in acidic or marine atmospheres.',
    highlights: ['Electro-Zinc Passivation', 'Hot Dip Galvanizing (HDG)', 'Salt Spray Rust Resistance', 'Black Oxide & Phosphate'],
    ctaPrimaryText: 'Specify Surface Finish',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'Catalog Range',
    ctaSecondaryHref: '/products',
    statNumber: '15 µm',
    statLabel: 'Max Plating Thickness',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/7/530299837/DF/VW/KJ/4140564/ms-bolts-and-nuts-500x500.jpg'
  },
  {
    id: 'qual-4',
    badge: 'Thread Pitch Accuracy',
    titlePrefix: '100% Thread Pitch',
    titleHighlight: 'Ring & Plug Gauge',
    titleSuffix: 'Precision Check',
    subtitle: 'Go/no-go internal and external thread gauges prevent stripping and ensure smooth wrenching on every single bolt and nut pair.',
    highlights: ['Go / No-Go Gauge Checked', '6H Precision Tolerance', 'Uniform Thread Lead', 'Zero Thread Burrs'],
    ctaPrimaryText: 'Order Certified Stock',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'Read Reviews',
    ctaSecondaryHref: '/reviews',
    statNumber: '6H',
    statLabel: 'Precision Thread Class',
    image: 'https://5.imimg.com/data5/BA/LU/VX/SELLER-4140564/10mm-mild-steel-hex-bolt-250x250.jpg'
  }
];

export const REVIEWS_SLIDES: SlideItem[] = [
  {
    id: 'rev-1',
    badge: 'Verified Buyer Satisfaction',
    titlePrefix: '4.6/5 Stars Rated by',
    titleHighlight: '32+ Industrial Buyers',
    titleSuffix: 'on IndiaMART',
    subtitle: 'Read genuine feedback from infrastructure developers, solar frame contractors, and machine builders across India who trust Timexo Wire.',
    highlights: ['4.6 / 5.0 Average Rating', '32+ Verified Buyer Reviews', '100% Delivery Reliability', '83% Response Rate'],
    ctaPrimaryText: 'Become a Partner Client',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'View All Feedback',
    ctaSecondaryHref: '#reviews-grid',
    statNumber: '4.6★',
    statLabel: 'Overall Rating Score',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/EZ/SN/NP/4140564/mild-steel-bolt-250x250.jpg'
  },
  {
    id: 'rev-2',
    badge: 'Solar & Tower Infrastructure',
    titlePrefix: 'Trusted by Apex',
    titleHighlight: 'Infrastructure Pvt Ltd',
    titleSuffix: 'for 5-Ton Order',
    subtitle: '"We sourced 5 Metric Tons of M20 Hex Bolts for a solar mounting project. Clean threads, uniform zinc coating, and 48-hr Delhi delivery."',
    highlights: ['5 Ton Hex Bolt Order', '48-Hour Freight Delivery', 'Solar Structure Approved', 'Uniform Zinc Plating'],
    ctaPrimaryText: 'Get Infrastructure Rates',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'Call Sales Office',
    ctaSecondaryHref: 'tel:+917942545440',
    statNumber: '5 Tons',
    statLabel: 'Single Order Delivered',
    image: 'https://5.imimg.com/data5/ZA/AQ/RL/SELLER-4140564/mild-steel-hex-bolt-250x250.jpg'
  },
  {
    id: 'rev-3',
    badge: 'Long-Term Client Trust',
    titlePrefix: '8+ Years Loyalty from',
    titleHighlight: 'Gill Fabricators',
    titleSuffix: '& Tower Erectors',
    subtitle: '"Timexo Wire has been our primary fastener supplier for over 8 years. HB wires have consistent hardness and zero breakage during drawing."',
    highlights: ['8+ Years Partnership', 'Zero Wire Drawing Snap', 'Consistent Steel Hardness', 'Reliable Ludhiana Stock'],
    ctaPrimaryText: 'Inquire Wholesale HB Wire',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'Explore Wires',
    ctaSecondaryHref: '/products',
    statNumber: '8+ Yrs',
    statLabel: 'Client Relationship',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/5/507891501/PL/JJ/ZY/4140564/bolts-250x250.jpg'
  },
  {
    id: 'rev-4',
    badge: 'B2B Payment Protection',
    titlePrefix: '100% Protected',
    titleHighlight: 'IndiaMART B2B Orders',
    titleSuffix: '& Fast Dispatches',
    subtitle: 'Order with complete peace of mind with GST invoice, factory weight slips, and verified TrustSEAL protection.',
    highlights: ['TrustSEAL Verified Firm', 'GST Tax Invoice Provided', 'Safe Transport Packing', 'Pan-India Freight Tracking'],
    ctaPrimaryText: 'Place Protected Order',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'Contact Factory',
    ctaSecondaryHref: '/contact',
    statNumber: '100%',
    statLabel: 'Payment Protected',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/7/530299837/DF/VW/KJ/4140564/ms-bolts-and-nuts-500x500.jpg'
  }
];

export const CONTACT_SLIDES: SlideItem[] = [
  {
    id: 'con-1',
    badge: 'Ludhiana Factory & Sales Office',
    titlePrefix: 'Visit Our Facility at',
    titleHighlight: 'Industrial Area C',
    titleSuffix: 'Ludhiana, Punjab',
    subtitle: 'Connect directly with our sales managers for immediate ex-factory quotes per KG, transport booking, or mill test certificate requests.',
    highlights: ['Industrial Area C, Gill Road', 'Ludhiana, Punjab - 141001', 'Proprietor: Mr. Gautam Bansal', 'Open Mon-Sat 9AM-7:30PM'],
    ctaPrimaryText: 'Call Factory: +91-7942545440',
    ctaPrimaryAction: 'call',
    ctaSecondaryText: 'Open Google Maps',
    ctaSecondaryHref: 'https://maps.google.com/?q=Ludhiana+Punjab+141001',
    statNumber: '24/7',
    statLabel: 'WhatsApp Response',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/7/EZ/SN/NP/4140564/mild-steel-bolt-250x250.jpg'
  },
  {
    id: 'con-2',
    badge: 'Direct Phone & WhatsApp Sales',
    titlePrefix: 'Speak Directly to',
    titleHighlight: 'Factory Sales Office',
    titleSuffix: 'for Bulk Pricing',
    subtitle: 'Skip sales agents and brokers. Call our direct line for transparent manufacturer rates on MS Hex Bolts, Nuts, and Wire coils.',
    highlights: ['Phone: +91-7942545440', 'Secondary: +91 98140 12345', 'Email: sales@timexowire.com', 'Instant Price Quotation'],
    ctaPrimaryText: 'Call Now: +91-7942545440',
    ctaPrimaryAction: 'call',
    ctaSecondaryText: 'Request Quote Form',
    ctaSecondaryHref: '#contact-form',
    statNumber: '83%',
    statLabel: 'Inquiry Response Rate',
    image: 'https://5.imimg.com/data5/BA/LU/VX/SELLER-4140564/10mm-mild-steel-hex-bolt-250x250.jpg'
  },
  {
    id: 'con-3',
    badge: 'Express Pan-India Logistics',
    titlePrefix: 'Fast Transit Times to',
    titleHighlight: 'Delhi, Gujarat, South',
    titleSuffix: '& Pan-India Hubs',
    subtitle: 'We ship daily via leading freight transport logistics. Standard orders dispatched within 24 to 48 hours from Ludhiana stock.',
    highlights: ['Delhi-NCR: 24 Hrs Transit', 'Gujarat/MH: 48-72 Hrs', 'South India: 3-4 Days', 'HDPE Waterproof Wrapping'],
    ctaPrimaryText: 'Inquire Dispatch Timeline',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'View Catalog',
    ctaSecondaryHref: '/products',
    statNumber: '24-48h',
    statLabel: 'Standard Dispatch',
    image: 'https://5.imimg.com/data5/ZA/AQ/RL/SELLER-4140564/mild-steel-hex-bolt-250x250.jpg'
  },
  {
    id: 'con-4',
    badge: 'Mill Test Certificates & Spec Sheet',
    titlePrefix: 'Request Mill Test',
    titleHighlight: 'Certificates & Samples',
    titleSuffix: 'for Project Audits',
    subtitle: 'We provide full chemical and physical mill test certificates for government tenders, structural audits, and export requirements.',
    highlights: ['Full Chemical Spectro Analysis', 'Tensile Proof Test Reports', 'Zinc Plating Thickness Log', 'Sample Bolts Available'],
    ctaPrimaryText: 'Request Test Certificate',
    ctaPrimaryAction: 'rfq',
    ctaSecondaryText: 'Quality Standards',
    ctaSecondaryHref: '/quality',
    statNumber: '100%',
    statLabel: 'Tender Compliant',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/7/530299837/DF/VW/KJ/4140564/ms-bolts-and-nuts-500x500.jpg'
  }
];
