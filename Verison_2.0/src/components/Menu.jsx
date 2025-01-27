import React from 'react';
import ModalImage from 'react-modal-image';
import Section from './Section';
import { menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu11, menu12, menu13 } from '../assets';

const normalMenuImages = [
  menu1,
  menu2,
  menu3,
  menu4,
  menu5,
  menu6,
  menu7,
  menu8
];

const authenticChineseImages = [
  menu12, 
  menu13
];

const hotPotImages = [
  menu11
];

const Menu = () => {
  return (
    <Section className="bg-black text-white pt-[2rem]" id="Menu">
      <div className="container mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold text-golden mb-8 text-center mt-20 font-display">Menu's</h1>
        <p className="text-base lg:text-lg text-gray-400 mb-12 text-center font-serif">
          We offer three different menu options: Americanized Chinese, Authentic Chinese, and Hot Pot.
          As we don't offer delivery services, you can order for pick-up by calling us at (208) 874-8007.
        </p>
        
        {/* Lunch Section */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-golden mb-8 text-center font-display">Lunch</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {normalMenuImages.map((src, index) => (
              <div key={index} className="relative group">
                <ModalImage
                  small={src}
                  large={src}
                  alt={`Lunch Menu ${index + 1}`}
                  className="w-full h-48 object-cover border-2 border-gray-300 cursor-pointer transition-all group-hover:opacity-75"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dinner Section */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-golden mb-8 text-center font-display">Dinner</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {authenticChineseImages.map((src, index) => (
              <div key={index} className="relative group">
                <ModalImage
                  small={src}
                  large={src}
                  alt={`Dinner Menu ${index + 1}`}
                  className="w-full h-48 object-cover border-2 border-gray-300 cursor-pointer transition-all group-hover:opacity-75"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Hot Pot Section */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-golden mb-8 text-center font-display">Hot Pot</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {hotPotImages.map((src, index) => (
              <div key={index} className="relative group">
                <ModalImage
                  small={src}
                  large={src}
                  alt={`Hot Pot ${index + 1}`}
                  className="w-full h-48 object-cover border-2 border-gray-300 cursor-pointer transition-all group-hover:opacity-75"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Menu;