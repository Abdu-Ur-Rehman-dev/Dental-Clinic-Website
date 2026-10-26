export interface DentalService {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  fullOverview: string;
  benefits: string[];
  duration: string;
  longevity: string;
  priceRange: string;
  image: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'suites' | 'lounge' | 'technology';
  categoryLabel: string;
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
}

export interface AIConsultationRequest {
  goals: string;
  concerns: string;
  budgetPreference: string;
  timeline: string;
}

export interface AIConsultationResponse {
  personalizedGreeting: string;
  recommendedTreatments: {
    name: string;
    description: string;
    timeframe: string;
  }[];
  estimatedInvestmentRange: string;
  expectedOutcomes: string[];
  expertClinicalNote: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  service: string;
  message: string;
}
