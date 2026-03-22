// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { 
  PlayCircle, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  Building2, 
  HardHat, 
  Hammer, 
  CheckCircle2, 
  Video 
} from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel Data - Targeted at Construction & Civil Engineering
  const slides = [
    {
      title: "FEDERAL GOVERNMENT PARTNERS WITH PANUM AD",
      subtitle: "LEADING CIVIL ENGINEERING & CONSTRUCTION FIRM",
      image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070",
      btnText: "OUR PARTNERSHIPS"
    },
    {
      title: "REVOLUTIONIZING HOUSING WITH EPS TECHNOLOGY",
      subtitle: "ADVANCED BUILDING SYSTEMS FOR THE MODERN WORLD",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000",
      btnText: "EXPLORE TECHNOLOGY"
    },
    {
      title: "LUXURY INFRASTRUCTURE & URBAN DEVELOPMENT",
      subtitle: "BUILDING EXCELLENCE ACROSS NIGERIA",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
      btnText: "VIEW PROJECTS"
    }
  ];

  // Auto-play logic for Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="w-full overflow-x-hidden bg-white">
      {/* 0. SEO METADATA */}
      <SEO 
        title="Leading Construction & Civil Engineering Company in Abuja" 
        description="Panum Ad Construction is Nigeria's premier engineering firm specializing in EPS technology, luxury residential builds, and large-scale infrastructure projects."
        type="website"
      />

      {/* 1. DYNAMIC HERO CAROUSEL */}
      <section className="relative h-[85vh] w-full bg-black overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            {/* Ken Burns Background Effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-linear"
              style={{ 
                backgroundImage: `url(${slide.image})`, 
                transform: index === currentSlide ? 'scale(1.15)' : 'scale(1)' 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
            </div>

            {/* Slide Text Content */}
            <div className="relative h-full flex items-center px-6 md:px-20">
              <div className={`max-w-4xl transition-all duration-1000 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-brand-lightBlue font-bold tracking-[0.2em] uppercase mb-10 drop-shadow-md">
                  {slide.subtitle}
                </p>
                <button className="group relative overflow-hidden bg-brand-lightBlue hover:bg-blue-600 text-white px-10 py-5 font-bold transition flex items-center shadow-2xl">
                  <span className="relative z-10 uppercase tracking-widest">{slide.btnText}</span>
                  <ArrowRight className="ml-3 relative z-10 group-hover:translate-x-2 transition-transform" size={20} />
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 text-white/40 hover:text-white transition p-3 border border-white/20 rounded-full bg-black/10 backdrop-blur-sm hidden md:block">
          <ChevronLeft size={28} />
        </button>
        <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 text-white/40 hover:text-white transition p-3 border border-white/20 rounded-full bg-black/10 backdrop-blur-sm hidden md:block">
          <ChevronRight size={28} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === currentSlide ? 'w-16 bg-brand-lightBlue' : 'w-4 bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
      </section>

      {/* 2. BLUE ACTION BANNER (Screenshot 1) */}
      <section className="bg-brand-lightBlue text-white py-12 px-6 md:px-10 w-full relative z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2 tracking-tight">PANUM AD CONSTRUCTION & ENGINEERING</h2>
            <p className="text-blue-100 font-medium">Delivering revolutionary housing solutions and civil infrastructure across Nigeria.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="border-2 border-white px-8 py-3 font-bold hover:bg-white hover:text-brand-lightBlue transition duration-300 uppercase text-sm">
              CONNECT WITH US
            </button>
            <button className="bg-white text-brand-lightBlue px-8 py-3 font-bold hover:bg-gray-100 transition duration-300 uppercase text-sm shadow-lg">
              VIEW ONGOING PROJECTS
            </button>
          </div>
        </div>
        {/* Decorative Triangle */}
        <div className="absolute w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[25px] border-t-brand-lightBlue bottom-[-25px] left-24"></div>
      </section>

      {/* 3. WHAT'S NEW SECTION (Screenshot 1) */}
      <section className="pt-24 pb-20 px-6 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-brand-lightBlue mb-16 tracking-tight">What's New?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* News 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-60 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" alt="News 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-brand-blue text-lg mb-4 uppercase leading-tight">RENEWED HOPE CITY GROUND-BREAKING CEREMONY</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">Panum Ad partners with The Federal Ministry of Housing to deliver high-quality construction for the national housing project. <a href="#" className="text-brand-lightBlue font-bold underline">Click here</a></p>
              </div>
            </div>
            {/* News 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-60 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=800" alt="News 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-brand-blue text-lg mb-4 uppercase leading-tight">VISIT OF THE STATE GOVERNOR TO HEADQUARTERS</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">A working visit aimed at strengthening engineering partnerships and local infrastructure development. <a href="#" className="text-brand-lightBlue font-bold underline">Click here</a></p>
              </div>
            </div>
            {/* News 3 - Video */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-60 bg-black relative flex items-center justify-center cursor-pointer">
                <div className="z-20 bg-red-600 p-4 rounded-full shadow-2xl group-hover:scale-110 transition-transform">
                  <PlayCircle className="text-white w-10 h-10" />
                </div>
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Video cover"/>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-brand-blue text-lg mb-4 uppercase leading-tight">REVOLUTIONIZING CONSTRUCTION WITH EPS</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Watch our technical presentation on why EPS technology is the future of sustainable building in Nigeria. <a href="#" className="text-brand-lightBlue font-bold underline">Watch here</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE CONSTRUCTION SERVICES (SEO RICH SECTION) */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-blue uppercase tracking-[0.15em] mb-4">OUR CONSTRUCTION SERVICES</h2>
            <div className="w-24 h-1.5 bg-brand-lightBlue mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-10 border-t-4 border-brand-lightBlue hover:bg-white hover:shadow-2xl transition duration-500">
              <Building2 className="text-brand-lightBlue w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Civil Engineering</h3>
              <p className="text-gray-600 leading-relaxed mb-6">Expert design, planning, and execution of large-scale civil infrastructure, from road networks to urban drainage systems.</p>
              <ul className="space-y-2 text-sm font-semibold text-brand-blue">
                <li className="flex items-center"><CheckCircle2 size={14} className="mr-2" /> Structural Design</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="mr-2" /> Site Preparation</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="mr-2" /> Material Analysis</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-10 border-t-4 border-brand-lightBlue hover:bg-white hover:shadow-2xl transition duration-500">
              <HardHat className="text-brand-lightBlue w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">EPS Building Tech</h3>
              <p className="text-gray-600 leading-relaxed mb-6">Pioneering Expanded Polystyrene technology to deliver eco-friendly, fire-resistant, and cost-effective building solutions.</p>
              <ul className="space-y-2 text-sm font-semibold text-brand-blue">
                <li className="flex items-center"><CheckCircle2 size={14} className="mr-2" /> Rapid Construction</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="mr-2" /> Thermal Insulation</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="mr-2" /> Seismic Resistance</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-10 border-t-4 border-brand-lightBlue hover:bg-white hover:shadow-2xl transition duration-500">
              <Hammer className="text-brand-lightBlue w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">General Contracting</h3>
              <p className="text-gray-600 leading-relaxed mb-6">Comprehensive project management from foundation to finishing, ensuring world-class standards and timeline adherence.</p>
              <ul className="space-y-2 text-sm font-semibold text-brand-blue">
                <li className="flex items-center"><CheckCircle2 size={14} className="mr-2" /> Turnkey Projects</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="mr-2" /> Quality Control</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="mr-2" /> Renovations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VISION SECTION (Screenshot 2) */}
      <section className="bg-black text-white py-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-lightBlue font-bold mb-6 flex items-center tracking-widest text-sm">
            <span className="w-8 h-8 rounded-full border border-brand-lightBlue flex items-center justify-center mr-3 font-serif">i</span> 
            PASSION DRIVES US.
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-10 tracking-tight leading-tight uppercase">VISION DRIVEN BY PASSION</h2>
          <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            <p>At Panum Ad International Estates Limited, we have a passion to deliver top-quality houses in decent, life-enhancing environments.</p>
            <p className="text-white font-normal border-l-4 border-brand-lightBlue pl-6 italic">We do not aim at giving our clients just shelter; we deliver houses that re-define their ways of life.</p>
            <p>We seek to put luxury into life, right where our people live.</p>
          </div>
        </div>
      </section>

      {/* 6. OUR REAL ESTATES (Screenshot 3) */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-brand-lightBlue mb-4 tracking-tight">OUR REAL ESTATES</h2>
          <p className="text-gray-500 text-xl font-light mb-16 italic">Luxurious, Safe and Exceptional Homes</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {[
              { title: "MOUNT PLEASANT ESTATE", desc: "Redefining standards with a massive development of top-quality houses in a homely environment located near Abuja Airport." },
              { title: "PANUM AD VILLAS", desc: "300 luxury houses built under partnership with the Federal Housing Authority, featuring secure asphalted roads and street lights." },
              { title: "POLYSTYRENE CITY", desc: "Revolutionary housing project in Karsana District aimed at reducing housing deficits using advanced building technology." }
            ].map((estate, idx) => (
              <div key={idx} className="flex flex-col h-full bg-white group shadow-sm hover:shadow-2xl transition duration-500">
                <div className="w-full h-64 bg-gray-200 relative overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt="Estate" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white font-bold text-xl uppercase tracking-wider">{estate.title}</h3>
                    <div className="w-10 h-1 bg-brand-lightBlue mt-2"></div>
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">{estate.desc}</p>
                  <button className="bg-brand-lightBlue text-white px-8 py-3 font-bold text-xs tracking-widest hover:bg-brand-blue transition">MORE</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VIDEO TOUR SECTION (Screenshot 11) */}
      <section className="relative h-[65vh] w-full bg-gray-900 flex items-center justify-center overflow-hidden group">
        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition duration-[10s]" alt="Tour" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-full border border-white/20 cursor-pointer hover:bg-white/20 transition duration-500">
            <Video size={60} className="text-white" />
          </div>
          <p className="text-white font-bold tracking-[0.3em] text-sm uppercase mt-8 drop-shadow-lg">Tour Mount Pleasant Estate, Abuja</p>
        </div>
      </section>

      {/* 8. REVIEWS SECTION (Screenshot 4) */}
      <section className="bg-brand-blue text-white py-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-blue-200 font-medium tracking-widest text-xs uppercase mb-10">See what Clients and Residents say about Us</p>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold tracking-tight">RESIDENTS AND CLIENT'S REVIEW</h3>
            <div className="flex space-x-4">
              <button className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-brand-blue transition"><ChevronLeft size={20}/></button>
              <button className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-brand-blue transition"><ChevronRight size={20}/></button>
            </div>
          </div>
          <div className="bg-white text-gray-700 p-12 italic relative rounded-sm shadow-2xl text-xl leading-relaxed">
            "Panum Ad builds more than just houses but homes and safe havens. Estates are so secured and the Amenities are soul rendering"
            {/* Pointer */}
            <div className="absolute w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-white bottom-[-20px] left-10"></div>
          </div>
          <div className="mt-12 flex items-center">
            <div className="w-16 h-16 bg-gray-400 rounded-full mr-6 overflow-hidden border-4 border-white/20 shadow-xl">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="User" />
            </div>
            <div>
              <p className="text-lg font-bold uppercase tracking-wider">Akin Fayinminu</p>
              <p className="text-blue-200 text-sm font-semibold">House Owner - Panum Ad Villas</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION (Screenshot 5) */}
      <section className="bg-gray-100 py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center bg-white p-10 md:p-16 rounded shadow-lg border-l-8 border-brand-blue">
          <div className="md:w-2/3 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold text-brand-blue mb-4 tracking-tight uppercase">FIND A HOME OR BUILD WITH US</h2>
            <p className="text-gray-600 text-xl font-light">We deliver construction services in world-class standards. Every Job is a task that must be done within timelines!</p>
          </div>
          <div>
            <button className="group border-2 border-brand-blue text-brand-blue font-bold px-10 py-4 hover:bg-brand-blue hover:text-white transition duration-300 uppercase tracking-widest text-sm flex items-center shadow-xl">
              BECOME A CLIENT <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;