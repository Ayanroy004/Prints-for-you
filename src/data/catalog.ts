export type ProductCategory =
  | 'All'
  | 'Stickers'
  | 'Business Cards'
  | 'Wedding Invitations'
  | 'Packaging'
  | 'Custom Prints';

export interface ServiceCategory {
  id: Exclude<ProductCategory, 'All'>;
  index: string;
  title: string;
  tagline: string;
  turnaround: string;
  startingAt: string;
  image: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: Exclude<ProductCategory, 'All'>;
  turnaround: string;
  minQty: string;
  priceLabel: string;
  description: string;
  specs: string;
  image: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  city: string;
  category: string;
  summary: string;
  specs: string;
  image: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  city: string;
  project: string;
  quote: string;
}

export interface InstagramPost {
  id: string;
  caption: string;
  category: string;
  image: string;
}

export const BUSINESS_INFO = {
  brand: 'Prints for you',
  tagline: 'Your Trusted Printing Partner',
  phoneDisplay: '+91 98219 11674',
  phoneRaw: '9821911674',
  whatsappNumber: '919821911674',
  location: 'Delhi, India',
  delivery: 'All India Delivery',
  instagramUrl: 'https://www.instagram.com/printss4you/',
  instagramHandle: '@printss4you',
  hours: 'Mon – Sat · 10:00 AM to 7:30 PM IST',
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const IMAGES = {
  hero: '/src/assets/images/hero_print_atelier_1794994235120.jpg',
  businessCards: '/src/assets/images/product_business_cards_1794994236430.jpg',
  stickers: '/src/assets/images/product_stickers_labels_1794994236492.jpg',
  weddingInvites: '/src/assets/images/product_wedding_invites_1794994237004.jpg',
  packaging: '/src/assets/images/product_custom_packaging_1794994237356.jpg',
  customCraft: '/src/assets/images/portfolio_print_craft_1794994237917.jpg',
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'Stickers',
    index: '01',
    title: 'Stickers & Labels',
    tagline: 'Waterproof die-cut vinyl stickers, roll labels, and metallic brand seals built to resist moisture and scuffs.',
    turnaround: '2–3 Days',
    startingAt: 'From ₹499',
    image: IMAGES.stickers,
  },
  {
    id: 'Business Cards',
    index: '02',
    title: 'Business Cards',
    tagline: '400gsm velvet matte, textured cotton, and rose-gold or gold hot-foil visiting cards that command attention.',
    turnaround: '2–4 Days',
    startingAt: 'From ₹799',
    image: IMAGES.businessCards,
  },
  {
    id: 'Wedding Invitations',
    index: '03',
    title: 'Wedding Invitations',
    tagline: 'Bespoke Indian wedding suites with deckled cotton stocks, foil embossing, vellum wraps, and wax seals.',
    turnaround: '5–7 Days',
    startingAt: 'From ₹4,500',
    image: IMAGES.weddingInvites,
  },
  {
    id: 'Packaging',
    index: '04',
    title: 'Custom Packaging',
    tagline: 'Rigid magnetic gift boxes, printed corrugated mailers, and branded tissue wraps tailored for D2C brands.',
    turnaround: '6–9 Days',
    startingAt: 'From ₹3,200',
    image: IMAGES.packaging,
  },
  {
    id: 'Custom Prints',
    index: '05',
    title: 'Custom Prints & More',
    tagline: 'Hang tags, thank-you cards, boutique paper bags, brochures, and corporate stationery suites.',
    turnaround: '3–5 Days',
    startingAt: 'From ₹950',
    image: IMAGES.customCraft,
  },
];

export const BEST_SELLING_PRODUCTS: ProductItem[] = [
  {
    id: 'foil-business-cards',
    name: 'Velvet Matte Foil Business Cards',
    category: 'Business Cards',
    turnaround: '3–4 Days',
    minQty: '100 pcs',
    priceLabel: 'From ₹1,299',
    description: 'Ultra-thick duplex cardstock finished with soft-touch lamination and precision metallic gold or rose-gold foil stamping.',
    specs: '400gsm Cotton/Art · Hot Foil + Soft Touch',
    image: IMAGES.businessCards,
  },
  {
    id: 'die-cut-vinyl-stickers',
    name: 'Waterproof Die-Cut Vinyl Stickers',
    category: 'Stickers',
    turnaround: '2–3 Days',
    minQty: '100 pcs',
    priceLabel: 'From ₹599',
    description: 'Custom-contoured matte or glossy vinyl stickers with UV-resistant inks for laptops, jars, bottles, and courier boxes.',
    specs: '120 Micron Vinyl · Weather & Scratch Proof',
    image: IMAGES.stickers,
  },
  {
    id: 'royal-wedding-suite',
    name: 'Royal Foil & Wax Seal Wedding Suite',
    category: 'Wedding Invitations',
    turnaround: '5–7 Days',
    minQty: '50 suites',
    priceLabel: 'From ₹5,400',
    description: 'Layered handmade paper invitation with botanical foil detailing, RSVP insert, velvet ribbon, and custom monogram wax seal.',
    specs: '350gsm Textured Cotton · Foil + Custom Seal',
    image: IMAGES.weddingInvites,
  },
  {
    id: 'rigid-magnetic-boxes',
    name: 'Rigid Magnetic Closure Gift Boxes',
    category: 'Packaging',
    turnaround: '7–9 Days',
    minQty: '50 boxes',
    priceLabel: 'From ₹6,800',
    description: 'Boutique presentation boxes built on heavy greyboard with matte wrap, gold foil monogram, and custom foam or paper inserts.',
    specs: '1200gsm Kappa Board · Custom Dimensions',
    image: IMAGES.packaging,
  },
  {
    id: 'roll-product-labels',
    name: 'Custom Roll Product Labels',
    category: 'Stickers',
    turnaround: '2–3 Days',
    minQty: '250 labels',
    priceLabel: 'From ₹849',
    description: 'High-tack paper, clear BOPP, or textured wine-stock labels wound on standard cores for cosmetic jars, candles, and jars.',
    specs: 'Matte / Clear BOPP · Oil & Moisture Resistant',
    image: IMAGES.stickers,
  },
  {
    id: 'brand-hang-tags-cards',
    name: 'Boutique Hang Tags & Thank-You Kit',
    category: 'Custom Prints',
    turnaround: '3–4 Days',
    minQty: '200 sets',
    priceLabel: 'From ₹1,450',
    description: 'Unboxings made memorable with blind-debossed apparel tags, cotton thank-you inserts, and matching boutique carry bags.',
    specs: '350gsm Uncoated Card · Custom Die & String',
    image: IMAGES.customCraft,
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-aura-packaging',
    title: 'Aura Bespoke Skincare Packaging Suite',
    client: 'Aura Botanics',
    city: 'Mumbai',
    category: 'Custom Packaging',
    summary: 'Engineered rigid drawer boxes, corrugated outer mailers, and branded tissue paper in deep berry magenta with gold foil.',
    specs: '500 Rigid Boxes · 1,000 Mailers · 7-Day Dispatch',
    image: IMAGES.packaging,
    featured: true,
  },
  {
    id: 'proj-mehra-wedding',
    title: 'Udaipur Destination Wedding Stationery',
    client: 'Mehra & Kapoor Family',
    city: 'New Delhi',
    category: 'Wedding Invitations',
    summary: 'Deckled-edge cotton paper suite featuring magenta floral foil, vellum jacket, and hand-poured brass-stamped wax seals.',
    specs: '250 Complete Suites · 5 Inserts + Envelopes',
    image: IMAGES.weddingInvites,
  },
  {
    id: 'proj-adelaide-cards',
    title: '400gsm Duplex Gold-Foil Identity Cards',
    client: 'Studio Atelier',
    city: 'Bengaluru',
    category: 'Business Cards',
    summary: 'Sandwich-edge duplex visiting cards combining textured magenta front stock with crisp white back typography.',
    specs: '1,000 Cards · 600gsm Duplex + Edge Color',
    image: IMAGES.businessCards,
  },
  {
    id: 'proj-flora-retail',
    title: 'Boutique Retail Bags & Embossed Tags',
    client: 'Flora & Fauna Studio',
    city: 'Gurugram',
    category: 'Custom Prints',
    summary: 'Satin-ribbon carry bags, textured garment swing tags with jute twine, and thank-you cards for an organic apparel launch.',
    specs: '300 Bags · 1,000 Tags · 4-Day Turnaround',
    image: IMAGES.customCraft,
  },
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    caption: 'Fresh off the foil press — velvet magenta visiting cards with crisp gold stamping.',
    category: 'Foil Cards',
    image: IMAGES.businessCards,
  },
  {
    id: 'ig-2',
    caption: 'Custom die-cut stickers and roll labels ready for pan-India courier dispatch.',
    category: 'Stickers & Rolls',
    image: IMAGES.stickers,
  },
  {
    id: 'ig-3',
    caption: 'Hand-finished wedding invitation suites with custom brass wax seals.',
    category: 'Wedding Suites',
    image: IMAGES.weddingInvites,
  },
  {
    id: 'ig-4',
    caption: 'Rigid magnetic boxes and branded tissue wraps crafted for D2C unboxing.',
    category: 'Luxury Packaging',
    image: IMAGES.packaging,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'rev-1',
    name: 'Ananya Deshmukh',
    role: 'Founder',
    company: 'Kaya & Co. Skincare',
    city: 'Mumbai',
    project: 'Rigid Boxes & Roll Labels',
    quote: 'Our previous vendor struggled with colour consistency across our magenta packaging. Prints for you matched our Pantone shade on the first proof and delivered 600 rigid boxes to Mumbai ahead of launch week.',
  },
  {
    id: 'rev-2',
    name: 'Rohan Malhotra',
    role: 'Creative Director',
    company: 'Atelier Nine Architects',
    city: 'New Delhi',
    project: 'Duplex Foil Business Cards',
    quote: 'The 400gsm velvet finish and gold foil registration are genuinely studio-grade. Every client who picks up our card asks where we got them printed.',
  },
  {
    id: 'rev-3',
    name: 'Meera & Siddharth',
    role: 'Wedding Clients',
    company: 'Private Commission',
    city: 'Jaipur',
    project: '200 Custom Wedding Suites',
    quote: 'From choosing textured cotton paper in Delhi to receiving individually packed suites in Jaipur, the attention to detail on our wax seals and foil embossing made the entire process effortless.',
  },
];
