import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { CategoryFilter } from '../components/gallery/CategoryFilter';
import { useGalleryFilter } from '../hooks/useGalleryFilter';

export default function Gallery() {
  const { categories, selectedCategory, setSelectedCategory, filteredImages } = useGalleryFilter();

  return (
    <div className="pt-16">
      <PageHeader
        title="Photo Gallery"
        description="Journey through our adventures in the majestic Atlas Mountains"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        <GalleryGrid images={filteredImages} />
      </div>
    </div>
  );
}