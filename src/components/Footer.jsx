// src/components/Footer.jsx
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-4 md:px-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4 text-lg hover:text-brand-lightBlue transition">
            <Link to="/about" reloadDocument>ABOUT US</Link>
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about#who-we-are">Who We Are</Link></li>
            <li><Link to="/about#ceo-message">CEO's Message</Link></li>
            <li><Link to="/about#who-we-are">Our Team</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-lg hover:text-brand-lightBlue transition">
            <Link to="/projects" reloadDocument>OUR PROJECTS</Link>
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/projects">Ongoing Projects</Link></li>
            <li><Link to="/projects">Commercial Buildings</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-bold mb-4 text-lg hover:text-brand-lightBlue transition">
            <Link to="/contact" reloadDocument>GET IN TOUCH</Link>
          </h3>
          <a 
            href="https://wa.me/message/DSMZ66AI5ZHFF1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 mb-2 hover:text-brand-lightBlue transition group"
          >
            <div className="bg-green-600 p-1 rounded-full mr-2 group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.078 11.969c0 2.112.551 4.173 1.597 6.011L0 24l6.193-1.624c1.78.97 3.793 1.481 5.845 1.483h.005c6.602 0 11.967-5.366 11.97-11.973a11.866 11.866 0 00-3.504-8.471"/></svg>
            </div>
            +2348029617972 (WhatsApp)
          </a>
          <a 
            href="mailto:panumadstruct@gmail.com" 
            className="flex items-center text-gray-400 mb-2 hover:text-brand-lightBlue transition"
          >
            <Mail size={16} className="mr-2"/> panumadstruct@gmail.com
          </a>
          <p className="flex items-start text-gray-400 mb-4">
            <MapPin size={16} className="mr-2 mt-1 flex-shrink-0"/>
            Abuja, FCT, Nigeria.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-brand-blue mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p className="hover:text-white transition cursor-pointer">
          <Link to="/">© 2026 Panum A.D. Structures (Rc. 9473228). All rights reserved.</Link>
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0 items-center">
          <span>GET SOCIAL</span>
          <a href="https://www.facebook.com/profile.php?id=61574938955462" target="_blank" rel="noopener noreferrer">
            <Facebook className="hover:text-white transition cursor-pointer" size={20} />
          </a>
          <a href="https://x.com/panum_adstruc" target="_blank" rel="noopener noreferrer">
            <Twitter className="hover:text-white transition cursor-pointer" size={20} />
          </a>
          <a href="https://www.instagram.com/panum.a.d?igsh=MWFieTkxd2s0cWxiMg==" target="_blank" rel="noopener noreferrer">
            <Instagram className="hover:text-white transition cursor-pointer" size={20} />
          </a>
          <a href="https://wa.me/message/DSMZ66AI5ZHFF1" target="_blank" rel="noopener noreferrer" className="bg-green-600 p-1 rounded-full hover:scale-110 transition">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.078 11.969c0 2.112.551 4.173 1.597 6.011L0 24l6.193-1.624c1.78.97 3.793 1.481 5.845 1.483h.005c6.602 0 11.967-5.366 11.97-11.973a11.866 11.866 0 00-3.504-8.471"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;