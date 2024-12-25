import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export function CategoryFilter({ categories, selectedCategory, onCategorySelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8 justify-center">
      <button
        onClick={() => onCategorySelect(null)}
        className={`px-4 py-2 rounded-full ${
          selectedCategory === null
            ? 'bg-slate-800 text-white'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === category
              ? 'bg-slate-800 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}