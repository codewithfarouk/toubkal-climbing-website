import { GalleryImage } from '../../types';
import { FaTimes, FaTag, FaMountain } from 'react-icons/fa';

interface ImageModalProps {
  image: GalleryImage;
  onClose: () => void;
}

export function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        {/* Image */}
        <img
          src={image.url}
          alt={image.alt}
          className="w-full h-64 object-cover rounded-t-lg"
        />

        {/* Content */}
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{image.alt}</h2>
          <p className="text-sm text-gray-600 mb-4">
            Explore this stunning view categorized as <span className="font-semibold">{image.category}</span>.
          </p>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-500">
              <FaTag className="mr-2" />
              <span>{image.category}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <FaMountain className="mr-2" />
              <span>Atlas Mountains</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
