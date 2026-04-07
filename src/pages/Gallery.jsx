import { useState, useEffect } from 'react';
import { ZoomIn, X, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const Gallery = () => {
  // State for filtering images
  const [filter, setFilter] = useState('All');
  // State for the full-screen lightbox
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery Data
  const images = [
    // New Videos (Prioritized)
    { id: 101, type: 'video', category: 'Design', title: 'Site Progress Update', src: '/project-images/more-images/2 (1).mp4', alt: 'On-site construction progress at Panum A.D. Structures' },
    { id: 102, type: 'video', category: 'Design', title: 'Structural Inspection', src: '/project-images/more-images/2 (2).mp4', alt: 'Technical inspection of structural reinforcement' },
    { id: 103, type: 'video', category: 'Design', title: 'Building Development', src: '/project-images/more-images/2 (4).mp4', alt: 'Ongoing building development and site management' },

    // Existing Assets (Updated with Alt Tags)
    { id: 1, type: 'image', category: 'Residential', title: 'Site Operations', src: '/project-images/1 (1).jpeg', alt: 'Panum A.D. construction site operations in Abuja' },
    { id: 2, type: 'image', category: 'Construction', title: 'Early Stage Development', src: '/project-images/1 (2).jpeg', alt: 'Foundation and early stage building development' },
    { id: 3, type: 'image', category: 'Commercial', title: 'Level 2 Structural Works', src: '/project-images/1 (3).jpeg', alt: 'Commercial building level 2 structural engineering works' },
    { id: 4, type: 'image', category: 'Residential', title: 'Ground Works', src: '/project-images/1 (4).jpeg', alt: 'Residential project ground works and excavation' },
    { id: 5, type: 'image', category: 'Field Work', title: 'Foundation Pillars', src: '/project-images/1 (5).jpeg', alt: 'Structural foundation pillars being set by Panum A.D.' },
    { id: 6, type: 'image', category: 'Construction', title: 'Trenching Strategy', src: '/project-images/1 (6).jpeg', alt: 'Professional trenching and site preparation for building' },
    { id: 7, type: 'image', category: 'Residential', title: 'Base Infrastructure', src: '/project-images/1 (7).jpeg', alt: 'Infrastructure development for residential project' },
    { id: 8, type: 'image', category: 'Field Work', title: 'Material Check', src: '/project-images/1 (8).jpeg', alt: 'Quality control and material inspection on site' },
    { id: 9, type: 'image', category: 'Commercial', title: 'Formwork Application', src: '/project-images/1 (9).jpeg', alt: 'Formwork and shuttering application for commercial building' },

    // New Images (Sample of the best ones)
    { id: 20, type: 'image', category: 'Construction', title: 'Rebar Installation', src: '/project-images/more-images/2 (1).jpeg', alt: 'Technical rebar installation for structural stability' },
    { id: 21, type: 'image', category: 'Field Work', title: 'Site Inspection', src: '/project-images/more-images/2 (10).jpeg', alt: 'Engineering site inspection and quality assurance' },
    { id: 22, type: 'image', category: 'Residential', title: 'Wall Development', src: '/project-images/more-images/2 (11).jpeg', alt: 'Structural wall development and lintel casting' },
    { id: 23, type: 'image', category: 'Construction', title: 'Slab Preparation', src: '/project-images/more-images/2 (12).jpeg', alt: 'First floor slab preparation and reinforcement' },
    { id: 24, type: 'image', category: 'Commercial', title: 'Technical Works', src: '/project-images/more-images/2 (13).jpeg', alt: 'Complex structural engineering works on site' },
    { id: 25, type: 'image', category: 'Field Work', title: 'Concrete Pouring', src: '/project-images/more-images/2 (14).jpeg', alt: 'Controlled concrete pouring for structural integrity' },
    { id: 26, type: 'image', category: 'Construction', title: 'Site Overview', src: '/project-images/more-images/2 (15).jpeg', alt: 'Aerial view of ongoing construction project site' },
    { id: 27, type: 'image', category: 'Residential', title: 'Finishing Works', src: '/project-images/more-images/2 (16).jpeg', alt: 'Early finishing and plastering works for luxury home' },
    { id: 28, type: 'image', category: 'Field Work', title: 'On-Site Engineering', src: '/project-images/more-images/2 (17).jpeg', alt: 'Panum A.D. engineers supervising on-site operations' },
    { id: 29, type: 'image', category: 'Construction', title: 'Pillar Reinforcement', src: '/project-images/more-images/2 (18).jpeg', alt: 'Heavy-duty pillar reinforcement for high-rise structure' },
    { id: 30, type: 'image', category: 'Commercial', title: 'Base Development', src: '/project-images/more-images/2 (19).jpeg', alt: 'Foundational base development for commercial complex' },
    { id: 31, type: 'image', category: 'Residential', title: 'Structural Assembly', src: '/project-images/more-images/2 (20).jpeg', alt: 'Assembly of structural elements for residential build' },
    { id: 32, type: 'image', category: 'Construction', title: 'Advanced Scaffolding', src: '/project-images/more-images/2 (22).jpeg', alt: 'Safe and professional scaffolding for high-level works' },
    { id: 33, type: 'image', category: 'Field Work', title: 'Quality Review', src: '/project-images/more-images/2 (23).jpeg', alt: 'On-site quality review and safety compliance check' },
    { id: 34, type: 'image', category: 'Construction', title: 'Laying Works', src: '/project-images/more-images/2 (24).jpeg', alt: 'Precision brick laying and alignment for structural walls' },
    { id: 35, type: 'image', category: 'Commercial', title: 'Engineering Precision', src: '/project-images/more-images/2 (25).jpeg', alt: 'High-precision engineering works for durable structures' },
  ];

  // Filter logic
  const categories = ['All', 'Design', 'Residential', 'Commercial', 'Construction', 'Field Work'];
  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  // Slideshow Logic
  const selectedIndex = selectedImage ? filteredImages.findIndex(img => img.id === selectedImage.id) : -1;

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    const nextIndex = (selectedIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    const prevIndex = (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  // Keyboard Support
  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex]);

  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-gray-50 pb-20">
      <SEO title="Gallery" description="View images of our construction progress, foundation works, and completed structural engineering projects by Panum A.D. Structures." />
      
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
              {/* Media Element (Image or Video Thumbnail) */}
              {img.type === 'video' ? (
                <div className="relative w-full h-full">
                  <video 
                    src={img.src} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    muted
                    preload="metadata"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-brand-blue/80 p-4 rounded-full group-hover:scale-110 transition-transform">
                      <Play className="text-white fill-white w-6 h-6" />
                    </div>
                  </div>
                </div>
              ) : (
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              
              {/* Dark Overlay that appears on hover */}
              <div className="absolute inset-0 bg-brand-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <div className="transform transition-transform duration-300">
                  {img.type === 'video' ? (
                     <Play className="text-white w-12 h-12 mx-auto fill-white opacity-80" />
                  ) : (
                     <ZoomIn className="text-white w-12 h-12 mx-auto opacity-80" />
                  )}
                </div>
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
          
          {/* Slideshow Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 md:left-10 z-[110] text-white/50 hover:text-white transition-all bg-black/20 hover:bg-black/40 p-3 rounded-full backdrop-blur-sm group"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 md:right-10 z-[110] text-white/50 hover:text-white transition-all bg-black/20 hover:bg-black/40 p-3 rounded-full backdrop-blur-sm group"
            aria-label="Next image"
          >
            <ChevronRight size={40} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Main Content in Lightbox */}
          <div className="max-w-5xl w-full flex flex-col items-center relative z-[105]">
            {selectedImage.type === 'video' ? (
              <video 
                key={selectedImage.src} // Key ensures video resets when source changes
                src={selectedImage.src} 
                controls 
                autoPlay 
                loop 
                className="max-h-[85vh] w-full object-contain shadow-2xl rounded"
                aria-label={selectedImage.alt}
              />
            ) : (
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="max-h-[85vh] object-contain shadow-2xl rounded"
              />
            )}
            {/* Minimal Info Overlay (Optional) */}
            <div className="absolute top-0 right-0 bg-black/60 text-white text-[10px] px-3 py-1 rounded-bl m-4 opacity-50">
              {selectedIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;