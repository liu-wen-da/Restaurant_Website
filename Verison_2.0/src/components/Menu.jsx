import React, { useState } from 'react';
import ModalImage from 'react-modal-image';
import Section from './Section'



const normalMenuImages = [
  '../src/assets/麻辣馆/1.png',
  '../src/assets/麻辣馆/2.png',
  '../src/assets/麻辣馆/3.png',
  '../src/assets/麻辣馆/4.png',
  '../src/assets/麻辣馆/5.png',
  '../src/assets/麻辣馆/6.png',
  '../src/assets/麻辣馆/7.png',
  '../src/assets/麻辣馆/8.png',
];

const authenticChineseImages = [
  '../src/assets/麻辣馆/12.jpg',
  '../src/assets/麻辣馆/13.jpg',
];

const hotPotImages = [
  '../src/assets/麻辣馆/11.jpg',
];

const Menu = () => {
  return (
    <Section className="pt-[2rem]">
      <div className="container mx-auto">
        
        {/* Normal Menu Section */}
        <div className="mb-[3rem]">
          <h1 className="h1 mb-8 text-center mt-20">Menu</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {normalMenuImages.map((src, index) => (
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

        {/* Authentic Chinese Section */}
        <div className="mb-[3rem]">
          <h2 className="h1 mb-8 text-center">Authentic Chinese</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-4">
            {authenticChineseImages.map((src, index) => (
              <div key={index} className="relative">
                <ModalImage
                  small={src}
                  large={src}
                  alt={`Authentic Chinese item ${index + 1}`}
                  className="w-full h-auto border-2 border-gray-300 cursor-pointer hover:border-gray-500 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Hot Pot Section */}
        <div className="mb-[3rem]">
          <h2 className="h1 mb-8 text-center">Hot Pot</h2>
          <div className="grid grid-cols-1 justify-center gap-4">
            {hotPotImages.map((src, index) => (
              <div key={index} className="relative">
                <ModalImage
                  small={src}
                  large={src}
                  alt={`Hot Pot item ${index + 1}`}
                  className="w-full h-auto max-w-xs border-2 border-gray-300 cursor-pointer hover:border-gray-500 transition-all"
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
