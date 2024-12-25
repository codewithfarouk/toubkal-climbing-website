import React, { useState } from 'react';
import { GalleryImage } from '../../types';
import { GalleryItem } from './GalleryItem';
import { ImageModal } from './ImageModel';


interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image) => (
          <GalleryItem key={image.id} image={image} onClick={() => openModal(image)} />
        ))}
      </div>
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </>
  );
}
