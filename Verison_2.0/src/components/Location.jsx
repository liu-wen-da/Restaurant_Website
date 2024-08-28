import React from 'react';
import Section from './Section';
import mapImage from '/src/assets/staticmap.png';



const Location = () => {
  return (
    <Section className="pt-[2rem]" id="Contact">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Address and Hours of Operation */}
        <div className="space-y-6">
          <h1 className="h1 mb-6">Our Location</h1>
          <div>
            <h1 className="text-xl font-semibold mb-2">Address</h1>
            <p>2010 S Main St, Moscow ID, 83843</p> 
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-2">Hours of Operation</h1>
            <ul>
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
            <h1 className="text-xl font-semibold mb-2">Contact</h1>
            <p>Phone: (208) 874-8007</p>
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
