import React from 'react';
import Section from './Section';
import mapImage from '/src/assets/staticmap.png';

const Location = () => {
  return (
    <Section className="bg-black text-white pt-[2rem]" id="Contact">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Address and Hours of Operation */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-golden mb-6 font-display">Our Location</h1>
          <div>
            <h2 className="text-xl font-semibold mb-2 font-display">Address</h2>
            <p className="text-base lg:text-lg font-serif">2010 S Main St, Moscow ID, 83843</p> 
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 font-display">Hours of Operation</h2>
            <ul className="text-base lg:text-lg font-serif">
              <li>Monday: 11:00 AM - 9:00 PM</li>
              <li>Tuesday: 11:00 AM - 9:00 PM</li>
              <li>Wednesday: 11:00 AM - 9:00 PM</li>
              <li>Thursday: 11:00 AM - 9:00 PM</li>
              <li>Friday: 11:00 AM - 9:00 PM</li>
              <li>Saturday: 11:00 AM - 9:00 PM</li>
              <li>Sunday: 11:00 AM - 9:00 PM</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 font-display">Contact</h2>
            <p className="text-base lg:text-lg font-serif">Phone: (208) 874-8007</p>
          </div>
        </div>
        
        {/* Static Map */}
        <div className="h-[300px] md:h-full">
          <img src={mapImage} alt="Map" className="w-full h-full object-cover" />
        </div>
        
      </div>
    </Section>
  );
};

export default Location;