import { DentalService, GalleryItem, Testimonial } from '../types/dental';

export const HERO_DATA = {
  title: "Your Smile, Our Masterpiece.",
  subtitle: "Bespoke Cosmetic Dentistry & Digital Smile Architecture",
  description: "Experience the pinnacle of pain-free dental perfection in our Manhattan sanctuary. Combining Swiss micro-precision technology with artistic porcelain craft.",
  stats: [
    { value: "15+", label: "Years of Excellence" },
    { value: "12,000+", label: "Masterpiece Smiles" },
    { value: "99.8%", label: "Patient Satisfaction" },
    { value: "100%", label: "Pain-Free Precision" }
  ],
  image: new URL('../assets/images/hero_clinic_interior_1792997527327.jpg', import.meta.url).href
};

export const ABOUT_DATA = {
  kicker: "THE AURA PHILOSOPHY",
  title: "Redefining Luxury Oral Wellness and Aesthetic Architecture",
  paragraph1: "At AURA DENTAL CLINIC, we believe a smile is the ultimate signature of confidence. Founded on the principle of peaceful, uncompromising excellence, our boutique institute bridges state-of-the-art medical technology with high-fashion aesthetic precision.",
  paragraph2: "Every treatment suite is designed as a tranquil sanctuary featuring sound-isolated acoustics, ergonomic therapy seats, and panoramic garden views — ensuring your journey is as restful as it is transformative.",
  image: new URL('../assets/images/about_treatment_suite_1792997527754.jpg', import.meta.url).href,
  pillars: [
    {
      title: "Micro-Surgical Precision",
      desc: "Sub-millimeter digital scanning ensures minimal tissue impact and effortless recovery."
    },
    {
      title: "Handcrafted Porcelain Art",
      desc: "Custom layered porcelain created by world-renowned ceramic master artisans."
    },
    {
      title: "Zero-Anxiety Environment",
      desc: "Spa-grade amenities, calming aromatherapy, and gentle conscious sedation options."
    }
  ]
};

export const SERVICES_DATA: DentalService[] = [
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    tagline: 'Laser Whitening & Enamel Polish',
    category: 'Cosmetic',
    description: 'Transform your shade up to 8 shades lighter in a single 45-minute laser session with zero enamel sensitivity.',
    fullOverview: 'Our proprietary Laser Shade Activation system uses cold-light LED wavelength technology paired with gentle remineralizing botanical gels. Safely lifts years of deep coffee, tea, and red wine staining while fortifying natural tooth enamel.',
    benefits: [
      'Immediate results up to 8 shades brighter in 45 mins',
      'Advanced anti-sensitivity desensitizing formulation',
      'Long-lasting shade retention gel kit included',
      'Enamel-safe cold LED laser technology'
    ],
    duration: '45 - 60 Minutes',
    longevity: '18 - 36 Months',
    priceRange: '$650 - $1,200',
    image: new URL('../assets/images/service_teeth_whitening_1792997528166.jpg', import.meta.url).href,
    iconName: 'Sparkles'
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    tagline: 'Swiss Titanium & Zirconia Restoration',
    category: 'Restorative',
    description: 'Permanent, lifelike replacement teeth anchored with biocompatible titanium or ceramic zirconia posts.',
    fullOverview: 'Guided by 3D Cone-Beam CBCT imaging, our implant specialists place ultra-durable biocompatible implants with sub-millimeter accuracy. Topped with hand-crafted ceramic crowns that blend seamlessly with your natural bite and facial structure.',
    benefits: [
      'Lifetime warranty on implant posts',
      '99.4% clinical integration success rate',
      '3D computer-guided flapless surgery for fast healing',
      'Natural chew force and permanent bone structure preservation'
    ],
    duration: '2 - 3 Visits over 3 months',
    longevity: 'Lifetime Durability',
    priceRange: '$3,200 - $5,500 per unit',
    image: new URL('../assets/images/service_dental_implants_1792997542627.jpg', import.meta.url).href,
    iconName: 'ShieldCheck'
  },
  {
    id: 'smile-makeover',
    title: 'Smile Makeover',
    tagline: 'Handmade Ultra-Thin Porcelain Veneers',
    category: 'Aesthetic Architecture',
    description: 'Bespoke facial aesthetic design utilizing ultra-thin porcelain veneers to correct alignment, shape, and color.',
    fullOverview: 'Using Digital Smile Design (DSD) software, we analyze your facial proportions, lips, and symmetry before crafting ultra-thin 0.2mm porcelain veneers. Requires minimal or zero enamel reduction, creating a radiant, natural red-carpet smile.',
    benefits: [
      'Custom 3D preview model before treatment begins',
      'Stain-resistant high-translucency ceramic porcelain',
      'Ultra-thin 0.2mm prep-less veneer options',
      'Completely tailored shade, translucency, and shape'
    ],
    duration: '2 - 3 Visits',
    longevity: '15 - 25+ Years',
    priceRange: '$1,800 - $3,500 per tooth',
    image: new URL('../assets/images/service_smile_makeover_1792997542280.jpg', import.meta.url).href,
    iconName: 'Crown'
  },
  {
    id: 'teeth-alignment',
    title: 'Teeth Alignment',
    tagline: 'Custom Invisible Ceramic Aligners',
    category: 'Orthodontics',
    description: 'Straighten your smile discreetly with custom 3D-printed transparent aligners and digital monitoring.',
    fullOverview: 'Discreet, removable clear aligners designed through AI tooth-movement simulations. Gently shifts teeth into ideal aesthetic alignment without metallic brackets or emergency wires.',
    benefits: [
      'Virtually invisible crystal-clear Medical Grade polymer',
      'Removable for meals, events, and effortless flossing',
      'Remote digital progress scanning for fewer clinic visits',
      'Includes complimentary post-treatment retainer set'
    ],
    duration: '6 - 14 Months',
    longevity: 'Permanent with Retainer',
    priceRange: '$4,200 - $7,000',
    image: new URL('../assets/images/service_teeth_alignment_1792997542464.jpg', import.meta.url).href,
    iconName: 'Layers'
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    tagline: 'Microscopic Gentle Endodontics',
    category: 'Endodontics',
    description: 'Pain-free root canal therapy using high-magnification surgical microscopes and rotary nickel-titanium tools.',
    fullOverview: 'Relieve pain and preserve your natural tooth structure under surgical magnification. Ultra-precise cleaning and bioceramic sealing eliminate infection quietly in a single comfortable visit.',
    benefits: [
      '100% painless procedure guaranteed under local anesthesia',
      '20x surgical microscope magnification for precise cleaning',
      'Preserves original natural tooth root foundation',
      'Biocompatible warm gutta-percha and bioceramic seal'
    ],
    duration: '60 - 90 Minutes (1 Visit)',
    longevity: 'Lifetime Preservation',
    priceRange: '$1,400 - $2,200',
    image: new URL('../assets/images/service_root_canal_1792997555234.jpg', import.meta.url).href,
    iconName: 'Activity'
  },
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    tagline: 'Comprehensive Preventive Care',
    category: 'Wellness',
    description: 'Gentle ultrasonic hygiene cleaning, digital oral health screening, and composite tooth restoration.',
    fullOverview: 'Routine wellness maintenance for healthy gums and luminous teeth. Air-abrasion hygiene cleaning gently washes away plaque buildup without scraper discomfort.',
    benefits: [
      'Airflow Polish ultrasonic painless cleaning system',
      'Comprehensive 3D digital oral cancer and cavity check',
      'Biocompatible tooth-colored ceramic composite fillings',
      'Personalized preventive oral health care plan'
    ],
    duration: '45 - 60 Minutes',
    longevity: '6 Month Maintenance',
    priceRange: '$250 - $600',
    image: new URL('../assets/images/service_general_dentistry_1792997555981.jpg', import.meta.url).href,
    iconName: 'HeartPulse'
  }
];

export const WHY_CHOOSE_US_DATA = {
  kicker: "WORLD-CLASS DENTAL TECHNOLOGY",
  title: "Where Cutting-Edge Innovation Meets Boutique Care",
  description: "We invest in the world's most advanced dental technologies so that your procedures are faster, completely painless, and visually flawless.",
  mainImage: new URL('../assets/images/why_choose_us_technology_1792997555939.jpg', import.meta.url).href,
  features: [
    {
      title: "3D Cone-Beam CBCT Imaging",
      desc: "Produces high-definition 3D anatomical scans with 90% less radiation than standard dental X-rays.",
      icon: "Scan"
    },
    {
      title: "CEREC Same-Day Ceramic Milling",
      desc: "Custom porcelain crowns and inlays milled and placed in under 90 minutes in-house.",
      icon: "Cpu"
    },
    {
      title: "Pain-Free Computerized Anesthesia",
      desc: "Gentle Single Tooth Anesthesia (STA) system delivers fluid without pressure or needle sensation.",
      icon: "Feather"
    },
    {
      title: "Hospital-Grade Air & Water Sterilization",
      desc: "Surgically sterile environment using HEPA-14 medical filtration and continuous UV-C air scrubbers.",
      icon: "Sparkles"
    }
  ]
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Panoramic Treatment Suite',
    category: 'suites',
    categoryLabel: 'Treatment Suites',
    image: new URL('../assets/images/hero_clinic_interior_1792997527327.jpg', import.meta.url).href,
    caption: 'Flooded with natural garden daylight and equipped with luxury ergonomic chairs.'
  },
  {
    id: 'gal-2',
    title: 'VIP Consultation Lounge',
    category: 'lounge',
    categoryLabel: 'VIP Lounge',
    image: new URL('../assets/images/gallery_lounge_1792997568825.jpg', import.meta.url).href,
    caption: 'Restful travertine marble reception lounge with bespoke refreshments.'
  },
  {
    id: 'gal-3',
    title: '3D Imaging Suite',
    category: 'technology',
    categoryLabel: '3D Tech Suite',
    image: new URL('../assets/images/why_choose_us_technology_1792997555939.jpg', import.meta.url).href,
    caption: 'Low-dose 3D cone beam tomographic scanner for sub-millimeter surgical precision.'
  },
  {
    id: 'gal-4',
    title: 'Surgical Operating Theatre',
    category: 'suites',
    categoryLabel: 'Operating Suite',
    image: new URL('../assets/images/gallery_op_suite_1792997568777.jpg', import.meta.url).href,
    caption: 'Ceiling-mounted ring lighting and sterile air purification for complex implant procedures.'
  },
  {
    id: 'gal-5',
    title: 'Cosmetic Design Studio',
    category: 'suites',
    categoryLabel: 'Design Studio',
    image: new URL('../assets/images/service_smile_makeover_1792997542280.jpg', import.meta.url).href,
    caption: 'Digital Smile Design suite where custom porcelain veneer shades are matched.'
  },
  {
    id: 'gal-6',
    title: 'Private Recovery Suite',
    category: 'lounge',
    categoryLabel: 'Private Suite',
    image: new URL('../assets/images/about_treatment_suite_1792997527754.jpg', import.meta.url).href,
    caption: 'Peaceful private room for post-treatment relaxation.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Elena Rostova',
    role: 'Fashion Creative Director',
    treatment: 'Master Smile Makeover (10 Porcelain Veneers)',
    rating: 5,
    comment: 'AURA DENTAL completely transformed not only my smile, but my self-confidence on set. The team made me feel like royalty from the minute I stepped into the lounge.',
    date: 'October 2026'
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Venture Capital Partner',
    treatment: 'Full Arch Ceramic Implants',
    rating: 5,
    comment: 'As someone who dreaded dental visits for two decades, AURA was a revelation. Zero pain during implant surgery and my new teeth feel 100% natural.',
    date: 'September 2026'
  },
  {
    id: 'test-3',
    name: 'Sophia Thorne',
    role: 'Architectural Consultant',
    treatment: 'Laser Whitening & Clear Aligners',
    rating: 5,
    comment: 'The level of architectural design detail in their clinic mirrors their dental craftsmanship. Absolute perfectionists!',
    date: 'August 2026'
  }
];

export const FAQ_DATA = [
  {
    question: "Is the initial aesthetic consultation truly comprehensive?",
    answer: "Yes. During your 60-minute VIP consultation, we perform 3D intraoral imaging, digital facial symmetry photography, and a complete health assessment. You will receive a 3D visual preview of your proposed smile makeover before any treatment begins."
  },
  {
    question: "Are treatments really pain-free?",
    answer: "Absolutely. We utilize Computer-Controlled Local Anesthesia (STA) which eliminates needle pinch, along with optional conscious sedation or nitrous oxide. Most patients describe feeling completely relaxed and at ease throughout."
  },
  {
    question: "How long do porcelain veneers and ceramic implants last?",
    answer: "Our handcrafted porcelain veneers typically last 15–25+ years with proper oral care, while our Swiss titanium and zirconia implant posts come with a lifetime structural guarantee."
  },
  {
    question: "How do I schedule an appointment and what are your payment options?",
    answer: "You can request an appointment online through our booking section below or call our concierge line at +1 (212) 555-0198. We offer flexible zero-interest monthly healthcare financing plans and assist with concierge insurance reimbursement."
  }
];
