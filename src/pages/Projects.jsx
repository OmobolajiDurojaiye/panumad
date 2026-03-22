// src/pages/Projects.jsx
import { MapPin, ArrowRight, CheckCircle2, Building, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Data for major estate projects
  const estates = [
    {
      id: 1,
      name: "MOUNT PLEASANT ESTATE",
      location: "Jabi-Airport Road By Pass, Abuja",
      status: "Completed / Selling",
      description: "This project targets the development of 3,000 housing units. With Mount Pleasant, Panum Ad has redefined standards and offered residents a wide range of top-quality houses with exquisite finishing in a homely environment. Located 20 minutes drive from Abuja International Airport.",
      features: ["Asphalted Roads", "Street Lights", "Safe & Secure Area", "Recreational Facilities"],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 2,
      name: "PANUM AD VILLAS",
      location: "Gwarinpa II Estate, Abuja",
      status: "Fully Sold Out",
      description: "Panum Ad is proud of her intervention in the development of Gwarinpa II Estate, Abuja. Tagged Panum Ad Villas, the 300 houses were built under a partnership agreement with the Federal Housing Authority, providing luxury and comfort.",
      features: ["300 Housing Units", "Partnership with FHA", "Exquisite Finishing", "Central Water System"],
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 3,
      name: "POLYSTYRENE CITY (EPS TECH)",
      location: "Karsana District, Abuja",
      status: "Ongoing Construction",
      description: "An estate project targeted at reducing housing deficits in the Federal Capital Territory. We are partnering with the Federal Government to provide Great Lifestyle and Exceptional houses building the Renewed Hope City Estate project using our revolutionary EPS Technology.",
      features: ["EPS Technology", "Energy Efficient", "Rapid Construction", "Affordable Luxury"],
      image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  // Data for the slanted housing styles section
  const housingStyles = [
    { title: "4 BEDROOM DETACHED DUPLEX", bg: "bg-brand-blue" },
    { title: "LUXURY TOWNHOUSE APARTMENTS", subtitle: "4 BEDROOM TERRACE", bg: "bg-brand-lightBlue", hasTour: true },
    { title: "5 BEDROOM DETACHED DUPLEX", bg: "bg-transparent", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" },
    { title: "4 BEDROOM SEMI-DETACHED", subtitle: "Built cautiously and elegantly furnished", bg: "bg-brand-lightBlue", hasMore: true },
    { title: "3 BEDROOM BLOCK OF FLATS", subtitle: "Elegantly structured 3 Bedroom Block", bg: "bg-brand-blue" }
  ];

  return (
    <div className="w-full overflow-x-hidden bg-gray-50">
      
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
          <h2 className="text-3xl font-bold text-brand-blue">MASTER-PLANNED ESTATES</h2>
          <div className="w-24 h-1 bg-brand-lightBlue mx-auto mt-4"></div>
        </div>

        <div className="space-y-20">
          {estates.map((estate, index) => (
            <div key={estate.id} className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative h-80 md:h-[400px] w-full rounded-sm overflow-hidden shadow-xl group">
                  <img src={estate.image} alt={estate.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-brand-lightBlue text-white text-xs font-bold px-3 py-1 uppercase rounded-sm shadow">
                    {estate.status}
                  </div>
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
                    <Building size={18} className="mr-2 text-brand-blue" /> Estate Features
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
                
                <div className="pt-6">
                  <button className="flex items-center text-white bg-brand-blue hover:bg-brand-lightBlue px-6 py-3 font-semibold transition shadow-md">
                    Explore Estate <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Housing Styles (Recreated from Screenshot 2 & 8 with Slanted Design) */}
      <section className="bg-white py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-lightBlue mb-2">OUR HOUSING STYLES</h2>
          <p className="text-gray-500 text-lg font-light">Inclusive of the revolutionary EPS Technology</p>
        </div>

        {/* Slanted Grid Container */}
        <div className="w-full h-[500px] flex overflow-hidden bg-brand-blue relative">
          {/* Background image across the whole section just in case */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>

          {housingStyles.map((style, index) => (
            <div 
              key={index}
              className={`flex-1 h-full relative -skew-x-12 border-r-4 border-white overflow-hidden group 
                ${style.bg} hover:bg-brand-lightBlue/90 transition-colors duration-500
                ${index === 0 ? '-ml-10' : ''} ${index === housingStyles.length - 1 ? '-mr-10' : ''}
              `}
              style={style.img ? { backgroundImage: `url(${style.img})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
            >
              {/* Semi-transparent overlay for images */}
              {style.img && <div className="absolute inset-0 bg-black/30 group-hover:bg-brand-blue/60 transition-colors duration-500"></div>}

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
                    SEE MORE HOUSE TYPES
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