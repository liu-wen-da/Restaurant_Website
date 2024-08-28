import React, { useState } from 'react';
import ModalImage from 'react-modal-image';
import Section from './Section'



const normalMenuImages = [
  '../src/assets/menu/1.png',
  '../src/assets/menu/2.png',
  '../src/assets/menu/3.png',
  '../src/assets/menu/4.png',
  '../src/assets/menu/5.png',
  '../src/assets/menu/6.png',
  '../src/assets/menu/7.png',
  '../src/assets/menu/8.png',
];

const authenticChineseImages = [
  '../src/assets/menu/12.jpg',
  '../src/assets/menu/13.jpg',
];

const hotPotImages = [
  '../src/assets/menu/11.jpg',
];

const Menu = () => {
  return (
    <Section className="pt-[2rem]" id="Menu">
      <div className="container mx-auto">
        <h1 className="h1 mb-8 text-center mt-20">Menu's</h1>
        <p className="body-1 text-n-2 mb-4 text-center"> We offer three different menu options: Americanized Chinese, Authentic Chinese, and Hot Pot.
            As we don't offer delivery services, but you can order for pick-up by calling us at (208) 874-8007.
        </p>
        {/* Normal Menu Section */}
        <div className="mb-[3rem]">
          <h1 className="h1 mb-8 text-center mt-20">Americanized chinese</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {normalMenuImages.map((src, index) => (
              <div key={index} className="relative">
                <ModalImage
                  small={src}
                  large={src}
                  alt={`Menu ${index + 1}`}
                  className="w-full h-auto border-2 border-gray-300 cursor-pointer hover:border-gray-500 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Authentic Chinese Section */}
        <div className="mb-[3rem]">
          <h2 className="h1 mb-8 text-center">Authentic Chinese menu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-4">
            {authenticChineseImages.map((src, index) => (
              <div key={index} className="relative">
                <ModalImage
                  small={src}
                  large={src}
                  alt={`Authentic Chinese ${index + 1}`}
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
                  alt={`Hot Pot`}
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
