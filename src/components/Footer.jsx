// src/components/Footer.jsx
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4 md:px-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4 text-lg">ABOUT US</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about">Who We Are</Link></li>
            <li><Link to="/about">CEO's Message</Link></li>
            <li><Link to="/about">Our Team</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-lg">OUR PROJECTS</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/projects">Ongoing Projects</Link></li>
            <li><Link to="/projects">Commercial Buildings</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-bold mb-4 text-lg">GET IN TOUCH</h3>
          <p className="flex items-center text-gray-400 mb-2">
            <Phone size={16} className="mr-2"/> 08029617972
          </p>
          <p className="flex items-center text-gray-400 mb-2">
            <Mail size={16} className="mr-2"/> panumadstruct@gmail.com
          </p>
          <p className="flex items-start text-gray-400 mb-4">
            <MapPin size={16} className="mr-2 mt-1 flex-shrink-0"/>
            Abuja, FCT, Nigeria.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-brand-blue mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>© 2026 Panum A.D. Structures. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0 items-center">
          <span>GET SOCIAL</span>
          <Facebook className="hover:text-white cursor-pointer" size={20} />
          <Twitter className="hover:text-white cursor-pointer" size={20} />
          <Instagram className="hover:text-white cursor-pointer" size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;