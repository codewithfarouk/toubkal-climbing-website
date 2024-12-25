export interface RouteDetails {
  startPoint: string;
  bestSeason: string;
  included: string[];
  highlights: string[];
}

export interface Route {
  id: number;
  name: string;
  difficulty: string;
  duration: string;
  elevation: string;
  description: string;
  image: string;
  details: RouteDetails;
}

export interface Plan {
  id: number;
  title: string;
  duration: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: string;
}