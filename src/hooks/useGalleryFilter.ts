import { useState } from 'react';
import { galleryImages } from '../data/gallery';

export function useGalleryFilter() {
  const categories = Array.from(new Set(galleryImages.map(img => img.category)));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredImages = selectedCategory
    ? galleryImages.filter(img => img.category === selectedCategory)
    : galleryImages;

  return {
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredImages
  };
}