// src/pages/About.jsx
import { Target, Eye, ShieldCheck, HardHat, Award, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <SEO title="About Us" description="Learn more about Panum A.D. Structures and our history of excellence in construction." />
      
      {/* 1. Page Hero Section */}
      <section className="relative h-[40vh] w-full bg-gray-900 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ABOUT US</h1>
          <p className="text-lg md:text-xl text-brand-lightBlue font-semibold tracking-wider uppercase">Building the Future, Restoring the Past</p>
        </div>
      </section>

      {/* 2. Who We Are Section */}
      <section id="who-we-are" className="py-20 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-brand-blue mb-6 tracking-tight uppercase">WHO WE ARE</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                <span className="font-bold text-brand-blue">Panum A.D. Structures</span> is a construction and structural engineering company that combines strength, precision, and innovative thinking to deliver durable and high-quality building solutions.
              </p>
              <p>
                We are a technical, engineering-driven firm focused on delivering excellence through rigorous quality control and professional integrity. Our expertise spans residential and commercial sectors, where we translate complex engineering concepts into reliable, life-long structures.
              </p>
            </div>
            <div className="mt-8 flex gap-6">
              <div className="border-l-4 border-brand-lightBlue pl-4">
                <p className="text-3xl font-bold text-brand-blue">5+</p>
                <p className="text-sm text-gray-500 font-semibold uppercase">Years Experience</p>
              </div>
              <div className="border-l-4 border-brand-lightBlue pl-4">
                <p className="text-3xl font-bold text-brand-blue">10+</p>
                <p className="text-sm text-gray-500 font-semibold uppercase">Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img src="/project-images/1 (2).jpeg" alt="Construction site" className="rounded shadow-md h-64 w-full object-cover mt-8" />
            <img src="/project-images/1 (3).jpeg" alt="Finished home" className="rounded shadow-md h-64 w-full object-cover" />
          </div>
        </div>
      </section>

      {/* 2.5. The Brand Concept Section */}
      <section className="py-20 px-4 md:px-10 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight uppercase">THE BRAND CONCEPT</h2>
            <p className="text-blue-200 tracking-widest text-sm font-bold uppercase">Foundation | Strength | Innovation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/20 p-10 rounded-lg backdrop-blur-sm border border-white/20 hover:border-white transition duration-300">
              <h3 className="text-3xl font-bold text-white mb-6 border-b border-white/20 pb-4 uppercase tracking-wider">Panum</h3>
              <p className="text-xl leading-relaxed text-blue-50/90">
                Represents our core values: <span className="text-white font-black underline decoration-blue-400 decoration-2 underline-offset-4">Foundation, Core, Precision, and Stability.</span>
              </p>
              <p className="mt-4 text-white font-medium">
                A solid foundation is the bedrock of every great structure. We prioritize the fundamentals to ensure every project starts with absolute precision.
              </p>
            </div>
            
            <div className="bg-white/20 p-10 rounded-lg backdrop-blur-sm border border-white/20 hover:border-white transition duration-300">
              <h3 className="text-3xl font-bold text-white mb-6 border-b border-white/20 pb-4 uppercase tracking-wider">A.D.</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-2 underline decoration-white decoration-2 underline-offset-8">Adamantium</h4>
                  <p className="text-white font-medium">Strength, durability, and indestructibility. We build structures that stand the test of time and weather.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-2 underline decoration-white decoration-2 underline-offset-8">Divergent</h4>
                  <p className="text-white font-medium">Innovation, unique thinking, and modern solutions. We approach every challenge with a fresh perspective.</p>
                </div>
              </div>
            </div>
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
            <h3 className="text-2xl font-bold text-brand-blue mb-4 uppercase tracking-tight">OUR VISION</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a leading construction and structural engineering firm known for delivering durable, innovative, and high-quality projects that stand the test of time and redefine excellence in the industry.
            </p>
          </div>
          {/* Mission */}
          <div className="bg-white p-10 rounded shadow-sm border-t-4 border-brand-blue hover:shadow-md transition">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <Target className="text-brand-blue w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-brand-blue mb-4 uppercase tracking-tight">OUR MISSION</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide reliable construction, structural design, and maintenance solutions through professionalism, precision, and a commitment to innovation, ensuring client satisfaction and structural integrity at every stage.
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
      <section id="ceo-message" className="py-20 px-4 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center bg-gray-50 p-10 md:p-16 rounded shadow-sm border-t-4 border-brand-blue">
            <h2 className="text-3xl font-bold text-brand-blue mb-2 uppercase">Meet the CEO</h2>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Bldr. Olehi Eliezer, MNIOB</h3>
            <div className="w-16 h-1 bg-brand-lightBlue mt-2 mb-8"></div>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed md:px-8">
              <p>
                "I am a professional builder and structural engineering designer with a strong passion for delivering safe, durable, and well-executed construction projects. As the CEO of Panum A.D. Structures, I bring a hands-on approach to every project, ensuring strict supervision, quality control, and adherence to engineering standards. With experience in both design and site execution, I am committed to building structures that are not only functional but built to last. My goal is to consistently deliver value, reliability, and excellence to every client."
              </p>
            </div>
        </div>
      </section>

    </div>
  );
};

export default About;