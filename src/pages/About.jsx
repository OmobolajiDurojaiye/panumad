// src/pages/About.jsx
import { Target, Eye, ShieldCheck, HardHat, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">
      
      {/* 1. Page Hero Section */}
      <section className="relative h-[40vh] w-full bg-gray-900 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ABOUT US</h1>
          <p className="text-lg md:text-xl text-brand-lightBlue font-semibold tracking-wider uppercase">Building the Future, Restoring the Past</p>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section className="py-20 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">WHO WE ARE</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Panum Ad Estates Limited is a leading real estate and construction company committed to delivering top-quality housing solutions in decent, life-enhancing environments. 
              </p>
              <p>
                Founded on the principles of integrity, innovation, and excellence, we do not aim at giving our clients just shelter; we deliver houses that redefine their ways of life. Through our revolutionary EPS technology and strategic partnerships with both federal and state governments, we are actively bridging the housing deficit across the nation.
              </p>
              <p>
                With over a decade of hands-on experience in the built environment, our portfolio spans across luxury residential estates, commercial complexes, and master-planned communities.
              </p>
            </div>
            <div className="mt-8 flex gap-6">
              <div className="border-l-4 border-brand-lightBlue pl-4">
                <p className="text-3xl font-bold text-brand-blue">15+</p>
                <p className="text-sm text-gray-500 font-semibold uppercase">Years Experience</p>
              </div>
              <div className="border-l-4 border-brand-lightBlue pl-4">
                <p className="text-3xl font-bold text-brand-blue">5k+</p>
                <p className="text-sm text-gray-500 font-semibold uppercase">Housing Units</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=600" alt="Construction site" className="rounded shadow-md h-64 w-full object-cover mt-8" />
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600" alt="Finished home" className="rounded shadow-md h-64 w-full object-cover" />
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Section */}
      <section className="bg-gray-50 py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white p-10 rounded shadow-sm border-t-4 border-brand-lightBlue hover:shadow-md transition">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <Eye className="text-brand-lightBlue w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-brand-blue mb-4">OUR VISION</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the foremost real estate development company in Africa, renowned for pioneering innovative building technologies, delivering unparalleled luxury, and creating sustainable communities where people thrive.
            </p>
          </div>
          {/* Mission */}
          <div className="bg-white p-10 rounded shadow-sm border-t-4 border-brand-blue hover:shadow-md transition">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <Target className="text-brand-blue w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-brand-blue mb-4">OUR MISSION</h3>
            <p className="text-gray-600 leading-relaxed">
              To consistently exceed client expectations by utilizing state-of-the-art construction methodologies, maintaining the highest standards of safety and quality, and fostering a culture of excellence among our workforce.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 px-4 md:px-10 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">OUR CORE VALUES</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">The foundational principles that guide our behavior, decisions, and how we deliver value to our clients.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Integrity", desc: "We conduct our business with the highest ethical standards." },
              { icon: Award, title: "Excellence", desc: "We strive for perfection in every brick we lay." },
              { icon: HardHat, title: "Safety First", desc: "The wellbeing of our workers and clients is non-negotiable." },
              { icon: Clock, title: "Timely Delivery", desc: "Every job is a task that must be done within timelines." }
            ].map((value, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 border border-gray-800 hover:border-brand-lightBlue transition duration-300">
                <value.icon className="w-12 h-12 text-brand-lightBlue mb-4" />
                <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                <p className="text-sm text-gray-400 text-center">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CEO Message */}
      <section className="py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-gray-50 p-8 md:p-12 rounded shadow-sm">
          <div className="md:w-1/3">
            <div className="w-full aspect-square bg-gray-300 rounded overflow-hidden border-4 border-white shadow-lg">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" alt="CEO" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-brand-blue mb-2">MESSAGE FROM THE MD/CEO</h2>
            <h4 className="text-brand-lightBlue font-semibold mb-6">Engr. Eric Eliezer</h4>
            <div className="space-y-4 text-gray-600 italic">
              <p>
                "Welcome to Panum Ad Estates. When we started this journey, our goal was simple: to eradicate the housing deficit in Nigeria by providing homes that aren't just structurally sound, but are sanctuaries for the families that live in them.
              </p>
              <p>
                Today, through our revolutionary EPS technology and unwavering commitment to quality, we are doing exactly that. We believe that everyone deserves a decent home in a life-enhancing environment. Our promise to you is continuous innovation, transparent dealings, and timely delivery. Thank you for trusting us to build your dreams."
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;