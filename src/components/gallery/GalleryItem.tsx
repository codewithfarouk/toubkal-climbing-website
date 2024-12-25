import React from 'react';
import { GalleryImage } from '../../types';

interface GalleryItemProps {
  image: GalleryImage;
  onClick: () => void;
}

export function GalleryItem({ image, onClick }: GalleryItemProps) {
  return (
    <div
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image.url}
        alt={image.alt}
        className="w-full h-48 object-cover rounded-lg shadow-md"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-white font-semibold text-sm">View Details</span>
      </div>
    </div>
  );
}
