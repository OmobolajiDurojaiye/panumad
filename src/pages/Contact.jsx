import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    const formData = new FormData(e.target);
    // TODO: Replace with your actual Web3Forms access key
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");
    
    // Send email to client
    formData.append("subject", `New Website Inquiry from ${formData.get('name') || 'Guest'}`);
    formData.append("from_name", "Panum A.D. Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((res) => res.json());

      if (res.success) {
        setFormStatus('Message sent successfully! We will get back to you soon.');
        e.target.reset();
      } else {
        setFormStatus('Failed to send. Please ensure your access key is correct.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.');
    }
  };
  return (
    <div className="w-full overflow-x-hidden bg-gray-50">
      <SEO title="Contact Us" description="Get in touch with Panum A.D. Structures for structural engineering, residential construction, and renovation inquiries in Abuja." />
      
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
                    PANUM A.D. STRUCTURES<br />
                    Abuja, FCT, Nigeria.
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
                    08029617972
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
                  <p className="text-gray-600 text-sm">panumadstruct@gmail.com</p>
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
                    Monday - Saturday: 8:00 AM - 6:00 PM<br />
                    Sunday: By Appointment
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
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
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
                      name="phone"
                      required
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
                    name="email"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="subject">Subject / Project of Interest</label>
                  <select 
                    id="subject" 
                    name="subject_of_interest"
                    className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition text-gray-600"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Building Construction">Building Construction</option>
                    <option value="Structural Design">Structural Design</option>
                    <option value="Maintenance & Renovation">Maintenance & Renovation</option>
                    <option value="Partnership/Investment">Partnership/Investment</option>
                  </select>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows="5" 
                    className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                {/* Form Status Message */}
                {formStatus && (
                  <div className={`p-4 rounded ${formStatus.includes('success') ? 'bg-green-50 text-green-700 border border-green-200' : formStatus === 'Sending...' ? 'bg-blue-50 text-brand-blue border border-blue-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    <p className="font-semibold text-sm">{formStatus}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={formStatus === 'Sending...'}
                  className="w-full bg-brand-blue text-white font-bold text-lg px-6 py-4 rounded hover:bg-brand-lightBlue transition shadow-lg flex items-center justify-center group disabled:opacity-70"
                >
                  {formStatus === 'Sending...' ? 'SENDING...' : 'SEND MESSAGE'}
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