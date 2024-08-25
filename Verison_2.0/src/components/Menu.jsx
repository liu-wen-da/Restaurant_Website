import React, { useState } from 'react';
import ModalImage from 'react-modal-image';
import Section from './Section'


const images = [
    '../src/assets/麻辣馆/1.jpg',
    '../src/assets/麻辣馆/1.jpg',
    '../src/assets/麻辣馆/1.jpg',
    '../src/assets/麻辣馆/1.jpg',
  // Add paths to your menu images here
];

const Menu = () => {
    return (
      <Section className="pt-[2rem]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div key={index} className="relative">
                <ModalImage
                  small={src}
                  large={src}
                  alt={`Menu item ${index + 1}`}
                  className="w-full h-auto border-2 border-gray-300 cursor-pointer hover:border-gray-500 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
    );
  };

export default Menu;
