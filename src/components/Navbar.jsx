// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Facebook, Twitter, Instagram, Menu, ChevronLeft, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Scroll listener for the sticky dark navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper component for mobile links
  const MobileNavLink = ({ to, children }) => (
    <Link 
      to={to} 
      onClick={toggleMenu}
      className="flex items-center justify-between p-4 border-b border-gray-200 text-gray-600 hover:bg-gray-50 transition"
    >
      <span className="text-sm font-light tracking-wide">{children}</span>
      <ChevronRight size={16} className="text-gray-400" />
    </Link>
  );

  return (
    <>
      {/* 1. THE SLIDING COMPACT DARK NAVBAR (Visible only on scroll) */}
      <div 
        className={`fixed top-0 left-0 w-full z-[70] bg-[#0a0f18] border-b border-gray-800 transition-transform duration-300 ease-in-out hidden md:flex items-center justify-center ${
          isScrolled ? 'translate-y-0 shadow-xl' : '-translate-y-full'
        }`}
      >
        <nav className="flex items-center text-xs font-semibold text-gray-400 uppercase tracking-widest">
          <Link to="/about" className="px-6 py-4 hover:text-white transition border-r border-gray-800">ABOUT US</Link>
          <Link to="/projects" className="px-6 py-4 hover:text-white transition border-r border-gray-800">OUR PROJECTS</Link>
          <Link to="/contact" className="px-6 py-4 hover:text-white transition border-r border-gray-800">PANUM WORKSHOP</Link>
          <Link to="/projects" className="px-6 py-4 hover:text-white transition border-r border-gray-800">EPS TECHNOLOGY</Link>
          <Link to="/gallery" className="px-6 py-4 hover:text-white transition border-r border-gray-800">GALLERY</Link>
          <Link to="/" className="px-6 py-4 hover:text-white transition">TRENDING NEWS/BLOG</Link>
        </nav>
      </div>

      {/* 2. THE MAIN STATIC NAVBAR */}
      <header className="w-full relative z-50 shadow-md bg-white">
        {/* Top Bar */}
        <div className="bg-black text-white text-xs py-2 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Phone size={14} className="mr-1"/> 08033143867</span>
            <span className="flex items-center"><Mail size={14} className="mr-1"/> info@panumad.com</span>
          </div>
          <div className="flex space-x-3 mt-2 md:mt-0">
            <Facebook size={16} className="hover:text-brand-lightBlue cursor-pointer" />
            <Twitter size={16} className="hover:text-brand-lightBlue cursor-pointer" />
            <Instagram size={16} className="hover:text-brand-lightBlue cursor-pointer" />
          </div>
        </div>

        {/* Main Nav */}
        <div className="flex justify-between items-center px-4 md:px-10 py-4">
          {/* Logo Placeholder */}
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 bg-brand-lightBlue text-white flex items-center justify-center font-bold text-xl rounded shadow-lg">
              PA
            </div>
            <span className="ml-3 font-bold text-2xl tracking-tight text-brand-blue">PANUM AD</span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-6 text-sm font-semibold text-gray-700">
            <Link to="/" className={`hover:text-brand-lightBlue transition ${location.pathname === '/' ? 'text-brand-lightBlue' : ''}`}>HOME</Link>
            <Link to="/about" className={`hover:text-brand-lightBlue transition ${location.pathname === '/about' ? 'text-brand-lightBlue' : ''}`}>ABOUT US</Link>
            <Link to="/projects" className={`hover:text-brand-lightBlue transition ${location.pathname === '/projects' ? 'text-brand-lightBlue' : ''}`}>OUR PROJECTS</Link>
            <Link to="/gallery" className={`hover:text-brand-lightBlue transition ${location.pathname === '/gallery' ? 'text-brand-lightBlue' : ''}`}>GALLERY</Link>
            <Link to="/contact" className={`hover:text-brand-lightBlue transition ${location.pathname === '/contact' ? 'text-brand-lightBlue' : ''}`}>CONTACT</Link>
          </nav>

          {/* Talk to Us Button (Desktop) */}
          <div className="hidden md:block">
            <Link to="/contact" className="bg-brand-blue text-white px-6 py-3 font-bold hover:bg-brand-lightBlue transition">
              TALK TO US
            </Link>
          </div>

          {/* Mobile Menu Hamburger Icon */}
          <button onClick={toggleMenu} className="md:hidden text-gray-800 focus:outline-none">
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Menu Full-Screen Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-[80] transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden flex flex-col`}
        >
          {/* Mobile Menu Header - "Back" */}
          <div className="flex items-center justify-center p-4 border-b border-gray-200 relative bg-white">
            <button onClick={toggleMenu} className="absolute left-4 text-gray-500 p-1">
              <ChevronLeft size={20} />
            </button>
            <span className="text-gray-400 text-sm font-light">Back</span>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col w-full bg-white overflow-y-auto">
            <MobileNavLink to="/">HOME</MobileNavLink>
            <MobileNavLink to="/about">ABOUT US</MobileNavLink>
            <MobileNavLink to="/projects">OUR PROJECTS</MobileNavLink>
            <MobileNavLink to="/gallery">GALLERY</MobileNavLink>
            <MobileNavLink to="/contact">CONTACT</MobileNavLink>
            
            <div className="p-4 mt-4">
               <Link 
                 to="/contact" 
                 onClick={toggleMenu}
                 className="block w-full text-center bg-brand-blue text-white py-3 font-semibold rounded shadow"
               >
                  TALK TO US
               </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;