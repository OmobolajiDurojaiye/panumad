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
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel Data - Targeted at Construction & Civil Engineering
  const slides = [
    {
      title: "STRUCTURAL ENGINEERING EXCELLENCE",
      subtitle: "LEADING CONSTRUCTION & DESIGN FIRM",
      image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070",
      btnText: "OUR SERVICES",
      link: "/about"
    },
    {
      title: "RELIABLE CONSTRUCTION SOLUTIONS",
      subtitle: "BUILT ON PROFESSIONALISM & PRECISION",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000",
      btnText: "EXPLORE PROJECTS",
      link: "/projects"
    },
    {
      title: "DURABLE & INNOVATIVE DESIGNS",
      subtitle: "BUILDING STRUCTURES THAT STAND THE TEST OF TIME",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
      btnText: "CONTACT US",
      link: "/contact"
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
        title="Home" 
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
                <Link to={slide.link} className="inline-flex group relative overflow-hidden bg-brand-lightBlue hover:bg-blue-600 text-white px-10 py-5 font-bold transition items-center shadow-2xl w-max">
                  <span className="relative z-10 uppercase tracking-widest">{slide.btnText}</span>
                  <ArrowRight className="ml-3 relative z-10 group-hover:translate-x-2 transition-transform" size={20} />
                  <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Link>
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
            <h2 className="text-3xl font-bold mb-2 tracking-tight">PANUM A.D. STRUCTURES</h2>
            <p className="text-blue-100 font-medium">Delivering durable, innovative, and high-quality projects that stand the test of time.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="border-2 border-white px-8 py-3 font-bold hover:bg-white hover:text-brand-lightBlue transition duration-300 uppercase text-sm inline-block text-center">
              CONNECT WITH US
            </Link>
            <Link to="/projects" className="bg-white text-brand-lightBlue px-8 py-3 font-bold hover:bg-gray-100 transition duration-300 uppercase text-sm shadow-lg inline-block text-center">
              VIEW ONGOING PROJECTS
            </Link>
          </div>
        </div>
        {/* Decorative Triangle */}
        <div className="absolute w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[25px] border-t-brand-lightBlue bottom-[-25px] left-24"></div>
      </section>

      {/* 3. WHY CHOOSE US SECTION */}
      <section className="pt-24 pb-20 px-6 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-brand-lightBlue mb-16 tracking-tight">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Reason 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-60 overflow-hidden">
                <img src="/project-images/1 (4).jpeg" alt="Hands-on approach" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-brand-blue text-lg mb-4 uppercase leading-tight">HANDS-ON APPROACH</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">Our leadership brings a hands-on approach to every project, ensuring strict supervision and adherence to engineering standards across all levels.</p>
              </div>
            </div>
            {/* Reason 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-60 overflow-hidden">
                <img src="/project-images/1 (5).jpeg" alt="Quality control" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-brand-blue text-lg mb-4 uppercase leading-tight">STRICT QUALITY CONTROL</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">We are committed to building structures that are not only functional but built to last, implementing vigorous quality assurance on all materials and processes.</p>
              </div>
            </div>
            {/* Reason 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-60 overflow-hidden">
                <img src="/project-images/1 (6).jpeg" alt="Reliability" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-brand-blue text-lg mb-4 uppercase leading-tight">RELIABILITY & EXCELLENCE</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Our goal is to consistently deliver value, reliability, and excellence to every client, guaranteeing satisfaction at every stage of project delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE CONSTRUCTION SERVICES (SEO RICH SECTION) */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-blue uppercase tracking-[0.15em] mb-4">OUR SERVICES</h2>
            <div className="w-24 h-1.5 bg-brand-lightBlue mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-8 border-t-4 border-brand-lightBlue hover:bg-white hover:shadow-xl transition duration-500">
              <Building2 className="text-brand-lightBlue w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Building Construction</h3>
              <p className="text-gray-600 leading-relaxed text-sm">We handle residential and commercial construction projects from foundation to completion with a focus on quality, durability, and timely delivery.</p>
            </div>
            <div className="bg-gray-50 p-8 border-t-4 border-brand-lightBlue hover:bg-white hover:shadow-xl transition duration-500">
              <HardHat className="text-brand-lightBlue w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Structural Engineering Design</h3>
              <p className="text-gray-600 leading-relaxed text-sm">We provide detailed structural designs, calculations, and drawings to ensure safety, stability, and compliance with engineering standards.</p>
            </div>
            <div className="bg-gray-50 p-8 border-t-4 border-brand-lightBlue hover:bg-white hover:shadow-xl transition duration-500">
              <Hammer className="text-brand-lightBlue w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Building Maintenance</h3>
              <p className="text-gray-600 leading-relaxed text-sm">We offer professional maintenance services to preserve the integrity and functionality of buildings over time.</p>
            </div>
            <div className="bg-gray-50 p-8 border-t-4 border-brand-lightBlue hover:bg-white hover:shadow-xl transition duration-500">
              <Building2 className="text-brand-lightBlue w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Renovation & Remodeling</h3>
              <p className="text-gray-600 leading-relaxed text-sm">We upgrade and transform existing structures to improve aesthetics, functionality, and value.</p>
            </div>
            <div className="bg-gray-50 p-8 border-t-4 border-brand-lightBlue hover:bg-white hover:shadow-xl transition duration-500">
              <CheckCircle2 className="text-brand-lightBlue w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Facility Management</h3>
              <p className="text-gray-600 leading-relaxed text-sm">We manage building operations, ensuring efficiency, maintenance, and long-term sustainability.</p>
            </div>
            <div className="bg-gray-50 p-8 border-t-4 border-brand-lightBlue hover:bg-white hover:shadow-xl transition duration-500">
              <Hammer className="text-brand-lightBlue w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Structural Repairs</h3>
              <p className="text-gray-600 leading-relaxed text-sm">We diagnose and fix structural defects such as cracks, settlement issues, and reinforcement failures.</p>
            </div>
            <div className="bg-gray-50 p-8 border-t-4 border-brand-lightBlue hover:bg-white hover:shadow-xl transition duration-500">
              <Building2 className="text-brand-lightBlue w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Painting & Finishing</h3>
              <p className="text-gray-600 leading-relaxed text-sm">High-quality finishing services that enhance durability and visual appeal.</p>
            </div>
            <div className="bg-gray-50 p-8 border-t-4 border-brand-lightBlue hover:bg-white hover:shadow-xl transition duration-500">
              <HardHat className="text-brand-lightBlue w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Electrical & Plumbing Works</h3>
              <p className="text-gray-600 leading-relaxed text-sm">Installation and maintenance of essential building services with professional standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VISION SECTION */}
      <section className="relative bg-black text-white py-24 px-6 md:px-10">
        <div className="absolute inset-0 bg-[url('/project-images/1 (4).jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-brand-lightBlue font-bold mb-6 flex items-center tracking-widest text-sm">
            <span className="w-8 h-8 rounded-full border border-brand-lightBlue flex items-center justify-center mr-3 font-serif">i</span> 
            OUR DRIVING FORCE.
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-10 tracking-tight leading-tight uppercase">OUR VISION & MISSION</h2>
          <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            <p><span className="font-bold text-white">Vision Statement:</span> To be a leading construction and structural engineering firm known for delivering durable, innovative, and high-quality projects that stand the test of time.</p>
            <p className="text-white font-normal border-l-4 border-brand-lightBlue pl-6 italic">To provide reliable construction, structural design, and maintenance solutions through professionalism, precision, and a commitment to excellence, ensuring client satisfaction at every stage of project delivery.</p>
          </div>
        </div>
      </section>

      {/* 6. OUR CONSTRUCTION PROJECTS */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-brand-lightBlue mb-4 tracking-tight uppercase">OUR PROJECTS</h2>
          <p className="text-gray-500 text-xl font-light mb-16 italic">Quality Control and Structural Integrity</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {[
              { title: "Foundation Works", desc: "Client consultancy role involving structural supervision, ensuring compliance with design specifications and reporting progress.", loc: "Abuja, FCT", img: "/project-images/1 (10).jpeg" },
              { title: "Structural Development", desc: "Full construction project from setting out to completion and handover, ensuring quality control and structural integrity.", loc: "Abuja, FCT", img: "/project-images/1 (11).jpeg" },
              { title: "Upcoming Luxury Development", desc: "Anticipated high-end residential structure currently undergoing engineering design, modeling, and strategic surveying phases.", loc: "Abuja, FCT", img: "/project-images/1 (12).jpeg" }
            ].map((estate, idx) => (
              <div key={idx} className="flex flex-col h-full bg-white group shadow-sm hover:shadow-2xl transition duration-500">
                <div className="w-full h-64 bg-gray-200 relative overflow-hidden">
                  <img src={estate.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt="Estate" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 pr-6">
                    <h3 className="text-white font-bold text-xl uppercase tracking-wider leading-tight">{estate.title}</h3>
                    <div className="w-10 h-1 bg-brand-lightBlue mt-2"></div>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-brand-blue font-bold text-sm tracking-widest mb-4 uppercase">{estate.loc}</p>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm flex-grow">{estate.desc}</p>
                  <Link to="/projects" className="bg-brand-lightBlue text-white px-8 py-3 font-bold text-xs tracking-widest hover:bg-brand-blue transition w-max inline-block text-center">MORE</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. REVIEWS SECTION */}
      <section className="bg-brand-blue text-white py-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-blue-200 font-medium tracking-widest text-xs uppercase mb-10">See what Clients say about Us</p>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold tracking-tight">CLIENT TESTIMONIALS</h3>
            <div className="flex space-x-4">
              <button className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-brand-blue transition"><ChevronLeft size={20}/></button>
              <button className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-brand-blue transition"><ChevronRight size={20}/></button>
            </div>
          </div>
          <div className="bg-white text-gray-700 p-12 italic relative rounded-sm shadow-2xl text-xl leading-relaxed">
            "Panum A.D. delivered our project with professionalism and attention to detail. Highly recommended."
            {/* Pointer */}
            <div className="absolute w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-white bottom-[-20px] left-10"></div>
          </div>
          <div className="mt-12 flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-white/10 p-6 rounded border border-white/20">
              <p className="italic text-sm text-blue-100">"Reliable and efficient — their supervision and structural input made a big difference."</p>
            </div>
            <div className="flex-1 bg-white/10 p-6 rounded border border-white/20">
              <p className="italic text-sm text-blue-100">"Quality work and excellent communication throughout the project."</p>
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
            <Link to="/contact" className="inline-flex group border-2 border-brand-blue text-brand-blue font-bold px-10 py-4 hover:bg-brand-blue hover:text-white transition duration-300 uppercase tracking-widest text-sm items-center shadow-xl w-max">
              BECOME A CLIENT <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;