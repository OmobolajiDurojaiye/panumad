// src/pages/Home.jsx
import { PlayCircle, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] w-full bg-gray-900 text-white flex items-center justify-center">
        {/* Placeholder for Hero Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">FEDERAL GOVERNMENT PARTNERS WITH PANUM AD</h1>
          <p className="text-xl md:text-2xl mb-8">STRONG PARTNERSHIP WITH STAKEHOLDERS</p>
          <button className="bg-brand-lightBlue hover:bg-blue-500 text-white px-8 py-3 rounded-sm font-semibold transition flex items-center mx-auto">
            PHOTO SPEAKS <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </section>

      {/* 2. Blue Banner Section */}
      <section className="bg-brand-lightBlue text-white py-12 px-4 md:px-10 w-full relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold mb-2">PANUM AD ESTATES!</h2>
            <p className="text-blue-100">Reducing housing deficit with revolutionary technology</p>
          </div>
          <div className="flex space-x-4 mt-6 md:mt-0">
            <button className="border-2 border-white px-6 py-2 font-semibold hover:bg-white hover:text-brand-lightBlue transition">
              CONNECT WITH US
            </button>
            <button className="bg-white text-brand-lightBlue px-6 py-2 font-semibold hover:bg-gray-100 transition">
              VIEW ONGOING PROJECTS
            </button>
          </div>
        </div>
        {/* Triangle pointer bottom */}
        <div className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-brand-lightBlue bottom-[-20px] left-20"></div>
      </section>

      {/* 3. What's New Section */}
      <section className="py-20 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-brand-lightBlue mb-12">What's New?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-bold text-brand-blue mb-4">RENEWED HOPE CITY GROUND-BREAKING CEREMONY</h3>
              <div className="w-full h-48 bg-gray-300 rounded mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" alt="News 1" className="w-full h-full object-cover"/>
              </div>
              <p className="text-gray-600 text-sm">Panum Ad partners with The Federal Ministry of Housing to deliver Mr president's renewed Hope City. <a href="#" className="text-brand-lightBlue">Click here</a></p>
            </div>
            {/* News Card 2 */}
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-bold text-brand-blue mb-4">GOVERNOR'S VISIT TO PANUM AD HEADQUARTERS</h3>
              <div className="w-full h-48 bg-gray-300 rounded mb-4 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&q=80&w=800" alt="News 2" className="w-full h-full object-cover"/>
              </div>
              <p className="text-gray-600 text-sm">The State Governor paid a working visit to the Abuja headquarters office of Panum Ad. <a href="#" className="text-brand-lightBlue">Click here</a></p>
            </div>
            {/* Video Placeholder */}
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-bold text-brand-blue mb-4">LEARN ABOUT OUR TECHNOLOGY</h3>
              <div className="w-full h-48 bg-black relative flex items-center justify-center rounded">
                <PlayCircle className="text-red-600 absolute z-10 w-16 h-16 cursor-pointer hover:scale-110 transition"/>
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-50" alt="Video cover"/>
              </div>
              <p className="text-gray-600 text-sm mt-4">Click here to read more about our Building Technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vision Section */}
      <section className="bg-black text-white py-20 px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-lightBlue font-bold mb-4 flex items-center"><span className="w-6 h-6 rounded-full border border-brand-lightBlue flex items-center justify-center mr-2">i</span> Passion Drives Us.</p>
          <h2 className="text-3xl font-light mb-6">VISION DRIVEN BY PASSION</h2>
          <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>At Panum Ad International Estates Limited, we have a passion to deliver top-quality houses in decent, life-enhancing environments.</p>
            <p>We do not aim at giving our clients just shelter; we deliver houses that re-define their ways of life.</p>
            <p>We seek to put luxury into life, right where our people live.</p>
          </div>
        </div>
      </section>

      {/* 5. Real Estates Section */}
      <section className="py-20 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-brand-lightBlue mb-2">OUR REAL ESTATES</h2>
          <p className="text-gray-500 mb-12">Luxurious, Safe and Exceptional Homes</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "MOUNT PLEASANT ESTATE", desc: "Targets development of 3,000 housing units. Redefined standards offering residents top-quality houses." },
              { title: "PANUM AD VILLAS", desc: "300 houses built under partnership. Features asphalted roads, street lights, safe and secure area." },
              { title: "POLYSTYRENE CITY", desc: "Located in Abuja, targeted at reducing housing deficits. Providing great lifestyle and exceptional houses." }
            ].map((estate, idx) => (
              <div key={idx} className="flex flex-col h-full">
                <div className="w-full h-56 bg-gray-200 relative mb-4">
                  <img src={`https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover" alt="Estate" />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-bold">{estate.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{estate.desc}</p>
                <button className="bg-brand-lightBlue text-white px-6 py-2 w-max text-sm hover:bg-blue-700">MORE</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Video Tour Banner */}
      <section className="relative h-[60vh] w-full bg-gray-800 flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Tour" />
        <div className="relative z-10 flex flex-col items-center">
          <PlayCircle size={80} className="text-white font-light opacity-80 cursor-pointer hover:scale-105 transition mb-4"/>
          <p className="text-white font-semibold tracking-widest text-sm uppercase">Tour Mount Pleasant Estate</p>
        </div>
      </section>

      {/* 7. Reviews Section */}
      <section className="bg-brand-blue text-white py-20 px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-sm text-blue-200 mb-8">See what Clients and Residents say about Us</p>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">RESIDENTS AND CLIENT'S REVIEW</h3>
            <div className="flex space-x-2">
              <ChevronLeft className="cursor-pointer hover:text-gray-300"/>
              <ChevronRight className="cursor-pointer hover:text-gray-300"/>
            </div>
          </div>
          <div className="bg-white text-gray-600 p-8 italic relative rounded-sm shadow-lg">
            "Panum Ad Builds more than just houses but homes and safe havens. Estates are so secured and the Amenities are soul rendering"
            {/* Pointer */}
            <div className="absolute w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-white bottom-[-15px] left-8"></div>
          </div>
          <div className="mt-8 flex items-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="User" />
            </div>
            <p className="text-sm font-semibold uppercase">Akin Fayinminu - Resident</p>
          </div>
        </div>
      </section>

      {/* 8. Call To Action */}
      <section className="bg-gray-200 py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-brand-blue mb-2">FIND A HOME OR BUILD WITH US</h2>
            <p className="text-gray-600">We deliver services in world-class standards. Every Job is a task that must be done within timelines!</p>
          </div>
          <div>
            <button className="border-2 border-brand-blue text-brand-blue font-bold px-8 py-3 hover:bg-brand-blue hover:text-white transition">
              BECOME A CLIENT
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;