// src/pages/Projects.jsx
import { MapPin, ArrowRight, CheckCircle2, Building, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Projects = () => {
  // Data for major estate projects
  const estates = [
    {
      id: 1,
      name: "Foundation Works: Katampe, Abuja",
      location: "Katampe, Abuja",
      description: "A pivotal consultancy role involving structural supervision, ensuring compliance with design specifications and reporting progress for high-end residential foundation works.",
      features: ["Structural Supervision", "Compliance Checking", "Consultancy Role", "Quality Control"],
      image: "/project-images/1 (10).jpeg"
    },
    {
      id: 2,
      name: "Structural Development",
      location: "Abuja, FCT",
      description: "Full construction project from setting out to completion and handover, ensuring quality control and structural integrity.",
      features: ["Full Construction", "Setting Out", "Structural Integrity", "Turnkey Delivery"],
      image: "/project-images/1 (11).jpeg"
    },
    {
      id: 3,
      name: "Upcoming Luxury: The 5 Bedroom Duplex",
      location: "Citec, Mount Pleasant Estates, Mbora District, Abuja",
      description: "A luxury 5 bedroom duplex with penthouse floors. Currently undergoing intensive engineering design, modeling, and strategic surveying phases.",
      features: ["Penthouse Floors", "Engineering Design", "3D Modeling", "Material Planning"],
      image: "/project-images/1 (12).jpeg"
    }
  ];

  // Data for the slanted housing styles section
  const housingStyles = [
    { title: "RESIDENTIAL CONSTRUCTION", bg: "bg-brand-blue", img: "/project-images/1 (1).jpeg" },
    { title: "COMMERCIAL STRUCTURES", subtitle: "Built to standard", bg: "bg-brand-lightBlue", hasTour: true, img: "/project-images/1 (2).jpeg" },
    { title: "STRUCTURAL ENGINEERING", bg: "bg-transparent", img: "/project-images/1 (3).jpeg" },
    { title: "RENOVATIONS & REMODELING", subtitle: "Transforming existing spaces", bg: "bg-brand-lightBlue", hasMore: true, img: "/project-images/1 (8).jpeg" },
    { title: "FACILITY MANAGEMENT", subtitle: "Long term maintenance", bg: "bg-brand-blue", img: "/project-images/1 (9).jpeg" }
  ];

  return (
    <div className="w-full overflow-x-hidden bg-gray-50">
      <SEO title="Our Projects" description="Explore Panum A.D. Structures construction portfolio, including ongoing and completed structural developments." />
      
      {/* 1. Page Hero Section */}
      <section className="relative h-[35vh] w-full bg-black text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 text-center px-4 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">OUR PROJECTS</h1>
          <p className="text-lg md:text-xl text-brand-lightBlue font-semibold tracking-widest uppercase">Redefining the Housing Landscape</p>
        </div>
      </section>

      {/* 2. Featured Estates (Alternating Layout) */}
      <section className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-blue">RECENT PROJECTS</h2>
          <div className="w-24 h-1 bg-brand-lightBlue mx-auto mt-4"></div>
        </div>

        <div className="space-y-20">
          {estates.map((estate, index) => (
            <div key={estate.id} className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative h-80 md:h-[400px] w-full rounded-sm overflow-hidden shadow-xl group">
                  <img src={estate.image} alt={estate.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
              
              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold text-gray-800">{estate.name}</h3>
                <p className="flex items-center text-brand-lightBlue font-medium">
                  <MapPin size={18} className="mr-2" /> {estate.location}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {estate.description}
                </p>
                
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Building size={18} className="mr-2 text-brand-blue" /> Project Focus
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {estate.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle2 size={16} className="mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Housing Styles (Recreated from Screenshot 2 & 8 with Slanted Design) */}
      <section className="bg-white py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-lightBlue mb-2">KEY SERVICE AREAS</h2>
          <p className="text-gray-500 text-lg font-light">Delivering diverse structural solutions</p>
        </div>

        {/* Slanted Grid Container */}
        <div className="w-full h-[500px] flex overflow-hidden bg-brand-blue relative">
          {/* Background image across the whole section just in case */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>

          {housingStyles.map((style, index) => (
            <div 
              key={index}
              className={`flex-1 h-full relative -skew-x-12 border-r-4 border-white overflow-hidden group 
                ${style.bg} hover:bg-transparent transition-colors duration-500
                ${index === 0 ? '-ml-10' : ''} ${index === housingStyles.length - 1 ? '-mr-10' : ''}
              `}
            >
              {/* Image that appears on hover */}
              {style.img && (
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-125 object-cover"
                  style={{ backgroundImage: `url('${style.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="absolute inset-0 bg-brand-blue/60 mix-blend-multiply"></div>
                </div>
              )}

              {/* Default transparent overlay if needed */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>

              {/* Undo Skew for Content inside */}
              <div className="skew-x-12 w-full h-full flex flex-col items-center justify-center text-center p-6 relative z-10">
                <h3 className="text-white font-bold text-xl md:text-2xl mb-2 drop-shadow-lg">{style.title}</h3>
                
                {style.subtitle && (
                  <p className="text-blue-100 text-sm mb-6 drop-shadow-md px-4">{style.subtitle}</p>
                )}

                {style.hasTour && (
                  <button className="bg-brand-lightBlue text-white font-bold px-6 py-2 mt-4 hover:bg-white hover:text-brand-lightBlue transition shadow-lg">
                    VIRTUAL TOUR
                  </button>
                )}
                
                {style.hasMore && (
                  <button className="bg-brand-lightBlue text-white font-bold px-6 py-2 mt-4 hover:bg-white hover:text-brand-lightBlue transition shadow-lg">
                    SEE ALL SERVICES
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="bg-brand-blue text-white py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to acquire your dream property?</h2>
        <p className="text-blue-200 mb-8 max-w-2xl mx-auto">Contact our sales team today to schedule a site inspection or request a brochure for any of our ongoing projects.</p>
        <Link to="/contact" className="inline-block border-2 border-white text-white font-bold px-8 py-3 hover:bg-white hover:text-brand-blue transition">
          CONTACT SALES TEAM
        </Link>
      </section>

    </div>
  );
};

export default Projects;