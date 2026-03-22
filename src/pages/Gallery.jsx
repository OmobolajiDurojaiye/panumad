// src/pages/Gallery.jsx
import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

const Gallery = () => {
  // State for filtering images
  const [filter, setFilter] = useState('All');
  // State for the full-screen lightbox
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery Data
  const images = [
    { id: 1, category: 'Residential', title: 'Mount Pleasant Estate Phase 1', src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000' },
    { id: 2, category: 'Construction', title: 'EPS Technology Implementation', src: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000' },
    { id: 3, category: 'Commercial', title: 'Abuja Central Mall', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000' },
    { id: 4, category: 'Residential', title: 'Panum Ad Villas', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000' },
    { id: 5, category: 'Interior', title: 'Luxury 4-Bedroom Duplex', src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000' },
    { id: 6, category: 'Construction', title: 'Foundation Laying Ceremony', src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000' },
    { id: 7, category: 'Residential', title: 'Polystyrene City Terraces', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000' },
    { id: 8, category: 'Interior', title: 'Modern Kitchen Finishing', src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000' },
    { id: 9, category: 'Commercial', title: 'Office Complex Block B', src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000' },
  ];

  // Filter logic
  const categories = ['All', 'Residential', 'Commercial', 'Construction', 'Interior'];
  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-gray-50 pb-20">
      
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