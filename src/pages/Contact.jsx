import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
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
      <SEO title="Contact Us" description="Get in touch with Panum A.D. Structures for structural engineering, residential construction, and renovation inquiries. We deliver tech-driven building solutions." />
      
      {/* 1. Page Hero Section */}
      <section className="relative h-[30vh] md:h-[40vh] w-full bg-brand-blue text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GET IN TOUCH</h1>
          <p className="text-sm md:text-base text-blue-200 font-light tracking-widest uppercase">We'd love to hear from you</p>
        </div>
      </section>

      {/* 2. Main Contact Content */}
      {/* 2. Main Contact Content */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Contact Information */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl font-bold text-brand-blue mb-4">Let's Build Something Together</h2>
              <div className="w-20 h-1.5 bg-brand-lightBlue mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                Ready to start your next project or have questions about our services? We're just a message away. Reach out through any of our channels below.
              </p>
            </div>

            {/* Info Cards - Interactive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* WhatsApp / Phone */}
              <a 
                href="https://wa.me/message/DSMZ66AI5ZHFF1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-green-500 hover:shadow-md transition-all group"
              >
                <div className="bg-green-50 p-4 rounded-full mr-4 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <MessageSquare size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">WhatsApp Us</h4>
                  <p className="text-gray-600 text-sm font-medium">+2348029617972</p>
                  <p className="text-green-600 text-xs mt-1 font-bold">Fastest Response →</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:panumadstruct@gmail.com" 
                className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-brand-blue hover:shadow-md transition-all group"
              >
                <div className="bg-blue-50 p-4 rounded-full mr-4 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Email Us</h4>
                  <p className="text-gray-600 text-sm font-medium break-all">panumadstruct@gmail.com</p>
                </div>
              </a>

              {/* Head Office */}
              <div className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all sm:col-span-2">
                <div className="bg-blue-50 p-4 rounded-full mr-4 text-brand-lightBlue">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Head Office</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    PANUM A.D. STRUCTURES, Abuja, FCT, Nigeria.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
               <p className="text-gray-400 text-sm flex items-center">
                 <Clock size={16} className="mr-2" />
                 Operating Hours: Mon - Sat (8:00 AM - 6:00 PM)
               </p>
            </div>
          </div>

          {/* Right Side: Beautiful WhatsApp Focus Section */}
          <div className="relative">
            {/* Decorative background pulse */}
            <div className="absolute -inset-4 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
               {/* Header of the card */}
               <div className="bg-green-600 p-8 text-white text-center">
                  <div className="inline-flex items-center justify-center p-4 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.078 11.969c0 2.112.551 4.173 1.597 6.011L0 24l6.193-1.624c1.78.97 3.793 1.481 5.845 1.483h.005c6.602 0 11.967-5.366 11.97-11.973a11.866 11.866 0 00-3.504-8.471"/></svg>
                  </div>
                  <h3 className="text-3xl font-black tracking-tight mb-2 uppercase">Chat on WhatsApp</h3>
                  <p className="text-green-100 font-medium">Instant Support & Project Inquiries</p>
               </div>
               
               {/* Body of the card */}
               <div className="p-10 text-center">
                  <div className="mb-8 space-y-4">
                    <div className="flex items-center justify-center space-x-3 text-gray-700 font-bold">
                       <CheckCircle2 size={20} className="text-green-500" />
                       <span>Real-time Consultation</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-gray-700 font-bold">
                       <CheckCircle2 size={20} className="text-green-500" />
                       <span>Share Files & Designs Instantly</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-gray-700 font-bold">
                       <CheckCircle2 size={20} className="text-green-500" />
                       <span>Direct access to engineering team</span>
                    </div>
                  </div>

                  <a 
                    href="https://wa.me/message/DSMZ66AI5ZHFF1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 text-white font-black py-5 rounded-xl shadow-xl hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-green-900/20 uppercase tracking-widest text-lg"
                  >
                    Start Chatting Now
                  </a>
                  
                  <p className="mt-8 text-gray-400 text-sm">
                    Typical response time: <span className="font-bold text-green-600">under 30 minutes</span>
                  </p>
               </div>
            </div>
            
            {/* Visual element: floating bubbles or similar */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-blue/10 rounded-full -z-10 blur-xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-lightBlue/10 rounded-full -z-10 blur-2xl"></div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default Contact;