// src/pages/Contact.jsx
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full overflow-x-hidden bg-gray-50">
      
      {/* 1. Page Hero Section */}
      <section className="relative h-[30vh] md:h-[40vh] w-full bg-brand-blue text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GET IN TOUCH</h1>
          <p className="text-sm md:text-base text-blue-200 font-light tracking-widest uppercase">We'd love to hear from you</p>
        </div>
      </section>

      {/* 2. Main Contact Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          
          {/* Left Side: Contact Information (Takes up 2/5 of grid) */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-2">Contact Details</h2>
              <div className="w-16 h-1 bg-brand-lightBlue mb-6"></div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have a question about our estates, need assistance with your property, or want to partner with us on a new project, our team is ready to answer all your questions.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start bg-white p-6 rounded shadow-sm border border-gray-100 hover:border-brand-lightBlue transition">
                <div className="bg-blue-50 p-3 rounded-full mr-4 text-brand-lightBlue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Head Office</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    PANUM AD ESTATES<br />
                    Jabi-Airport Road By Pass,<br />
                    Nbora District, Abuja, Nigeria.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start bg-white p-6 rounded shadow-sm border border-gray-100 hover:border-brand-lightBlue transition">
                <div className="bg-blue-50 p-3 rounded-full mr-4 text-brand-lightBlue">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Phone Numbers</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    08033143867, 02092902691<br />
                    08056284206, 08035880393
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start bg-white p-6 rounded shadow-sm border border-gray-100 hover:border-brand-lightBlue transition">
                <div className="bg-blue-50 p-3 rounded-full mr-4 text-brand-lightBlue">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Email Address</h4>
                  <p className="text-gray-600 text-sm">info@panumad.com</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start bg-white p-6 rounded shadow-sm border border-gray-100 hover:border-brand-lightBlue transition">
                <div className="bg-blue-50 p-3 rounded-full mr-4 text-brand-lightBlue">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Business Hours</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form (Takes up 3/5 of grid) */}
          <div className="md:col-span-3">
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl border-t-4 border-brand-blue relative">
              {/* "Say Hi" decorative icon matching the footer inspiration */}
              <div className="absolute -top-6 right-8 bg-brand-lightBlue text-white p-3 rounded-full shadow-lg">
                <MessageSquare size={24} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition"
                      placeholder="John Doe"
                    />
                  </div>
                  {/* Phone Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="subject">Subject / Project of Interest</label>
                  <select 
                    id="subject" 
                    className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition text-gray-600"
                  >
                    <option>General Inquiry</option>
                    <option>Mount Pleasant Estate</option>
                    <option>Panum Ad Villas</option>
                    <option>Polystyrene City (EPS Tech)</option>
                    <option>Partnership/Investment</option>
                  </select>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-brand-blue text-white font-bold text-lg px-6 py-4 rounded hover:bg-brand-lightBlue transition shadow-lg flex items-center justify-center group"
                >
                  SEND MESSAGE 
                  <Send size={20} className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>

      {/* 3. Full Width Map Section */}
      <section className="w-full h-96 bg-gray-300 relative">
        {/* Using a Google Maps embed centered on Abuja */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.165419488313!2d7.408796114786793!3d9.04870189350711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7498c0b62d85%3A0x8dfb0fde4ba85b1a!2sJabi%20Airport%20Bypass!5e0!3m2!1sen!2sng!4v1683220000000!5m2!1sen!2sng" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Panum Ad Estates Location Map"
        ></iframe>
        
        {/* "Open in Google Maps" overlay matching footer */}
        <div className="absolute bottom-6 right-6 bg-black text-white px-4 py-2 text-sm rounded shadow-lg flex items-center hover:bg-gray-800 transition cursor-pointer z-10">
           <MapPin size={16} className="mr-2"/> Open in Google Maps
        </div>
      </section>

    </div>
  );
};

export default Contact;