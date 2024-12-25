import { Route } from '../types';

export const routes: Route[] = [
  {
    id: 1,
    name: "Toubkal Classic Summit",
    difficulty: "Moderate",
    duration: "2 days",
    elevation: "4,167m",
    description: "Experience the majesty of North Africa's highest peak. This classic route takes you through stunning valleys, traditional Berber villages, and high-altitude terrain. Perfect for fit hikers with some mountain experience.",
    image: "https://i.pinimg.com/736x/94/50/f0/9450f00e2aec513a4df634816f1102af.jpg",
    details: {
      startPoint: "Imlil Village (1,740m)",
      bestSeason: "June to September",
      included: [
        "Professional mountain guide",
        "Mule support for luggage",
        "Mountain refuge accommodation",
        "All meals during trek",
        "Crampons (if needed)"
      ],
      highlights: [
        "Summit sunrise views",
        "Traditional Berber villages",
        "High altitude experience",
        "Mountain refuge stay"
      ]
    }
  },
  {
    id: 2,
    name: "Tazaghart Traverse",
    difficulty: "Advanced",
    duration: "3 days",
    elevation: "3,980m",
    description: "A technical traverse across the dramatic Tazaghart plateau. This route offers exposed ridges, challenging scrambles, and some of the most spectacular views in the Atlas Mountains.",
    image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1",
    details: {
      startPoint: "Imlil Village (1,740m)",
      bestSeason: "July to September",
      included: [
        "Expert climbing guide",
        "Technical equipment",
        "Mountain refuge & camping",
        "All meals during trek",
        "Emergency satellite phone"
      ],
      highlights: [
        "Technical climbing sections",
        "Remote wilderness camping",
        "Dramatic ridge traverses",
        "Ancient rock formations"
      ]
    }
  },
  {
    id: 3,
    name: "Ouanoukrim Circuit",
    difficulty: "Intermediate",
    duration: "2-3 days",
    elevation: "4,089m",
    description: "Summit Morocco's second-highest peak through a scenic circuit that combines alpine climbing with spectacular mountain vistas. Perfect for those seeking a challenging but accessible high-altitude experience.",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
    details: {
      startPoint: "Imlil Village (1,740m)",
      bestSeason: "June to October",
      included: [
        "Certified mountain guide",
        "All necessary equipment",
        "Mountain refuge stay",
        "Nutritious mountain meals",
        "Transport from Marrakech"
      ],
      highlights: [
        "Twin summit opportunity",
        "High-altitude lakes",
        "Mountain wildlife viewing",
        "Spectacular photo spots"
      ]
    }
  }
];