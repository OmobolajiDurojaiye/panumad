// src/pages/Gallery.jsx
import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import SEO from '../components/SEO';

const Gallery = () => {
  // State for filtering images
  const [filter, setFilter] = useState('All');
  // State for the full-screen lightbox
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery Data
  const images = [
    { id: 1, category: 'Residential', title: 'Site Operations', src: '/project-images/1 (1).jpeg' },
    { id: 2, category: 'Construction', title: 'Early Stage Development', src: '/project-images/1 (2).jpeg' },
    { id: 3, category: 'Commercial', title: 'Level 2 Structural Works', src: '/project-images/1 (3).jpeg' },
    { id: 4, category: 'Residential', title: 'Ground Works', src: '/project-images/1 (4).jpeg' },
    { id: 5, category: 'Interior', title: 'Foundation Pillars', src: '/project-images/1 (5).jpeg' },
    { id: 6, category: 'Construction', title: 'Trenching Strategy', src: '/project-images/1 (6).jpeg' },
    { id: 7, category: 'Residential', title: 'Base Infrastructure', src: '/project-images/1 (7).jpeg' },
    { id: 8, category: 'Interior', title: 'Material Check', src: '/project-images/1 (8).jpeg' },
    { id: 9, category: 'Commercial', title: 'Formwork Application', src: '/project-images/1 (9).jpeg' },
  ];

  // Filter logic
  const categories = ['All', 'Residential', 'Commercial', 'Construction', 'Interior'];
  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-gray-50 pb-20">
      <SEO title="Gallery" description="View images of our construction progress, foundation works, and completed structural engineering projects." />
      
      {/* 1. Page Hero Section */}
      <section className="relative h-[30vh] md:h-[40vh] w-full bg-brand-dark text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">OUR GALLERY</h1>
          <p className="text-sm md:text-base text-gray-300 font-light tracking-widest uppercase">Visualizing our commitment to excellence</p>
        </div>
      </section>

      {/* 2. Gallery Filters */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                filter === cat 
                  ? 'bg-brand-blue text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-lightBlue hover:text-brand-lightBlue'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              className="group relative h-72 rounded-sm overflow-hidden bg-gray-200 shadow-sm cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              {/* Image with zoom effect on hover */}
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Overlay that appears on hover */}
              <div className="absolute inset-0 bg-brand-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <ZoomIn className="text-white w-10 h-10 mb-3 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                <h3 className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h3>
                <p className="text-blue-200 text-sm mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State if a filter somehow has no images */}
        {filteredImages.length === 0 && (
          <div className="text-center text-gray-500 py-20">
            No images found for this category.
          </div>
        )}
      </section>

      {/* 4. Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          {/* Close Button */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X w={32} h={32} />
          </button>
          
          {/* Main Image in Lightbox */}
          <div className="max-w-5xl w-full flex flex-col items-center">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="max-h-[80vh] object-contain shadow-2xl rounded"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-brand-lightBlue mt-2 font-medium tracking-wide uppercase">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;