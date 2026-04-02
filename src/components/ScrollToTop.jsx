import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Can use 'smooth' if desired, but instant is better for page transitions
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
