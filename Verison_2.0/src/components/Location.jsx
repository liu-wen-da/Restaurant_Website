import React from 'react';
import Section from './Section';




const mapContainerStyle = {
  width: '100%',
  height: '100%',
  minHeight: '300px',
};

const center = {
  lat: 46.7150211,
  lng: -117.0031635,
};

const Location = () => {
  return (
    <Section className="pt-[2rem]">
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
        </div>
        
      </div>
    </Section>
  );
};

export default Location;
