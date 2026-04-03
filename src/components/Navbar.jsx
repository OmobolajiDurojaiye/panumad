// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Menu, 
  ChevronLeft, 
  ChevronRight,
  HardHat
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Scroll listener to trigger the sticky dark navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Shared navigation links to ensure consistency
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'OUR PROJECTS', path: '/projects' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      {/* 1. THE STICKY NAVBAR (Appears on Scroll - Dark & Sleek) */}
      <div 
        className={`fixed top-0 left-0 w-full z-[70] bg-brand-dark/95 backdrop-blur-md border-b border-gray-800 transition-all duration-500 ease-in-out hidden md:block ${
          isScrolled ? 'translate-y-0 opacity-100 shadow-2xl' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center py-3">
          {/* Compact Logo for Sticky Nav */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/panumadlogo-white.png" 
              alt="Panum Ad Logo" 
              className="h-10 w-auto object-contain transform group-hover:rotate-12 transition-transform rounded-sm" 
            />
            <span className="ml-3 font-bold text-lg text-white tracking-tight uppercase">Panum A.D. <span className="text-brand-lightBlue font-light">Structures</span></span>
          </Link>

          {/* Nav Links */}
          <nav className="flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-[11px] font-bold tracking-[0.2em] transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-brand-lightBlue' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Compact Button */}
          <Link 
            to="/contact" 
            className="bg-brand-blue text-white px-5 py-2 text-[10px] font-bold tracking-widest hover:bg-brand-lightBlue transition-all duration-300 uppercase shadow-lg shadow-blue-900/20"
          >
            TALK TO US
          </Link>
        </div>
      </div>

      {/* 2. THE MAIN STATIC NAVBAR (Standard View) */}
      <header className="w-full relative z-50 bg-white">
        {/* Top Info Bar (Black) */}
        <div className="bg-black text-white text-[10px] md:text-xs py-2.5 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center tracking-wider">
          <div className="flex items-center space-x-6">
            <a 
              href="https://wa.me/message/DSMZ66AI5ZHFF1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-brand-lightBlue transition group"
            >
              <div className="bg-green-600 p-0.5 rounded-full mr-2 group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.078 11.969c0 2.112.551 4.173 1.597 6.011L0 24l6.193-1.624c1.78.97 3.793 1.481 5.845 1.483h.005c6.602 0 11.967-5.366 11.97-11.973a11.866 11.866 0 00-3.504-8.471"/></svg>
              </div>
              <Phone size={14} className="mr-2 text-brand-lightBlue" /> 08029617972
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=panumadstruct@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-brand-lightBlue transition"
            >
              <Mail size={14} className="mr-2 text-brand-lightBlue" /> panumadstruct@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-5 mt-2 md:mt-0 opacity-60">
            <span className="mr-2 font-bold text-[9px] uppercase hidden lg:inline">Follow Our Engineering Journey:</span>
            <a href="https://www.facebook.com/profile.php?id=61574938955462" target="_blank" rel="noopener noreferrer">
              <Facebook size={16} className="hover:text-brand-lightBlue cursor-pointer transition" />
            </a>
            <Twitter size={16} className="hover:text-brand-lightBlue cursor-pointer transition" />
            <a href="https://www.instagram.com/panum.a.d?igsh=MWFieTkxd2s0cWxiMg==" target="_blank" rel="noopener noreferrer">
              <Instagram size={16} className="hover:text-brand-lightBlue cursor-pointer transition" />
            </a>
          </div>
        </div>

        {/* Main Brand & Nav Row (White) */}
        <div className="flex justify-between items-center px-4 md:px-10 py-6 border-b border-gray-100 shadow-sm">
          {/* Main Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/panumadlogo-white.png" 
              alt="Panum Ad Logo" 
              className="h-14 w-auto object-contain shadow-sm transform group-hover:-translate-y-1 transition-transform duration-300 rounded-sm" 
            />
            <div className="ml-4">
              <span className="block font-black text-2xl md:text-3xl tracking-tighter text-brand-blue leading-none">PANUM A.D. STRUCTURES</span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase leading-none mt-1 flex items-center">
                <HardHat size={10} className="mr-1 text-brand-lightBlue" /> Construction & Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Links with Active Indicators */}
          <nav className="hidden lg:flex space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`relative py-2 text-[12px] font-black tracking-widest transition-all duration-300 hover:text-brand-lightBlue group ${
                  location.pathname === link.path ? 'text-brand-lightBlue' : 'text-gray-700'
                }`}
              >
                {link.name}
                {/* Active Underline Effect */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-lightBlue transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link 
              to="/contact" 
              className="bg-brand-blue text-white px-10 py-4 font-black text-xs tracking-[0.2em] hover:bg-brand-lightBlue transition-all duration-500 shadow-xl shadow-blue-900/10 uppercase"
            >
              TALK TO US
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden p-2 text-brand-blue focus:outline-none"
            aria-label="Toggle Menu"
          >
            <Menu size={32} />
          </button>
        </div>

        {/* 3. MOBILE MENU OVERLAY (Screenshot 6 Slide-in Style) */}
        <div 
          className={`fixed inset-0 bg-white z-[90] transform transition-transform duration-500 ease-in-out lg:hidden flex flex-col ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-center p-6 border-b border-gray-100 relative bg-gray-50">
            <button 
              onClick={toggleMenu} 
              className="absolute left-6 text-gray-500 p-2 hover:bg-white rounded-full transition shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <span className="text-gray-400 text-xs font-bold tracking-[0.3em] uppercase">Back</span>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col w-full bg-white overflow-y-auto">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={toggleMenu}
                className={`flex items-center justify-between p-6 border-b border-gray-50 transition-all duration-300 ${
                  location.pathname === link.path ? 'bg-blue-50/50 text-brand-lightBlue' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-sm font-bold tracking-[0.2em]">{link.name}</span>
                <ChevronRight size={18} className={`${location.pathname === link.path ? 'text-brand-lightBlue' : 'text-gray-300'}`} />
              </Link>
            ))}
            
            {/* Mobile Contact Action */}
            <div className="p-8 mt-10">
               <Link 
                 to="/contact" 
                 onClick={toggleMenu}
                 className="block w-full text-center bg-brand-blue text-white py-4 font-black tracking-[0.2em] text-sm shadow-2xl shadow-blue-900/30 uppercase"
               >
                  TALK TO US
               </Link>
               <div className="mt-10 flex justify-center space-x-8 opacity-40">
                  <Facebook size={20} /><Twitter size={20} /><Instagram size={20} />
               </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;