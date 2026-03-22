// src/components/BackToTop.jsx
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[100] bg-gray-600 text-white w-12 h-12 flex flex-col items-center justify-center hover:bg-gray-700 transition-colors shadow-lg"
          aria-label="Back to top"
        >
          <ChevronUp size={20} strokeWidth={3} className="-mb-1" />
          <span className="text-[10px] font-bold tracking-wider">TOP</span>
        </button>
      )}
    </>
  );
};

export default BackToTop;