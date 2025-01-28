import React from 'react';
import Section from './Section';
import mapImage from '/src/assets/staticmap.png';

const Location = () => {
  return (
    <Section className="bg-black text-white py-16 lg:py-24" id="Contact" crosses>
      <div className="container mx-auto px-4">
        {/* Header with decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-golden" />
          <h1 className="text-4xl lg:text-5xl font-display text-golden px-4 text-center">
            Visit Us
            <span className="block text-sm text-golden/80 mt-2 font-sans font-normal tracking-wide">
              Tradition Meets Convenience
            </span>
          </h1>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-golden" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Information */}
          <div className="space-y-8 font-sans">
            <div className="pb-8 border-b border-golden/20">
              <h2 className="text-xl lg:text-2xl text-golden mb-4 font-display">
                Address
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                2010 S Main St<br />
                Moscow ID, 83843
              </p>
            </div>

            <div className="pb-8 border-b border-golden/20">
              <h2 className="text-xl lg:text-2xl text-golden mb-4 font-display">
                Hours
              </h2>
              <ul className="space-y-3 text-gray-300">
                {['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map((day) => (
                  <li key={day} className="flex justify-between text-lg">
                    <span>{day}:</span>
                    <span>11:00 AM – 9:00 PM</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl lg:text-2xl text-golden mb-4 font-display">
                Contact
              </h2>
              <p className="text-lg text-gray-300 hover:text-golden transition-colors">
                <a href="tel:208-874-8007">(208) 874-8007</a>
              </p>
            </div>
          </div>

          {/* Enhanced Map Container */}
          <div className="relative group h-[400px] lg:h-[550px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-golden/20 hover:border-golden/40 transition-all duration-300">
              <img 
                src={mapImage} 
                alt="Iron Wok location map" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-golden text-sm">
                <span>Free parking available</span>
                <span className="hover:text-white transition-colors">
                  Get Directions →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Location;