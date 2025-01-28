import React from 'react';
import ModalImage from 'react-modal-image';
import Section from './Section';
import { menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu11, menu12, menu13 } from '../assets';

const lunchSpecialsImages = [menu1];
const individualPortionsImages = [menu2];
const authenticChineseImages = [menu12, menu13];
const sharedDiningImages = [menu3, menu4, menu5, menu6, menu7, menu8]; 
const hotPotImages = [menu11];

const Menu = () => {
  return (
    <Section className="bg-gradient-to-b from-black to-[#0a0a0a] text-white pt-[2rem]" id="Menu">
      <div className="container mx-auto px-4">

        {/* Main Header */}
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-center mt-20 bg-gradient-to-r from-golden via-yellow-600 to-golden bg-clip-text text-transparent">
            Culinary Selection
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore our exquisite menu offerings. From modern interpretations to traditional favorites, each dish is crafted with precision and care.
          </p>
        </div>

        {/* Sticky Navigation */}
        <div className="sticky top-20 z-10 bg-black/80 backdrop-blur-sm py-4 mb-12">
          <nav className="flex justify-center gap-8">
            {['Lunch Specials', 'Individual Portions', 'Authentic Chinese', 'Hot Pot', 'Shared Dining'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-golden hover:text-white transition-colors duration-300 text-lg font-semibold relative
                           after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] 
                           after:bg-golden hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Lunch Specials Section */}
        <section className="mb-20 relative" id="lunch-specials">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-golden" />
            <h2 className="text-3xl lg:text-4xl font-display text-golden text-center px-4">
              Lunch Specials
              <span className="block text-sm text-gray-400 mt-2 font-sans font-normal">Daily Curated Combos</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-golden" />
          </div>
          <div className="grid grid-cols-1 justify-items-center">
            {lunchSpecialsImages.map((src, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl hover:shadow-2xl transition-shadow duration-300 w-full max-w-2xl">
                <ModalImage
                  small={src}
                  large={src}
                  alt={`Lunch Special ${index + 1}`}
                  className="w-full h-64 object-cover cursor-pointer"
                  hideDownload
                  hideZoom
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="bg-golden text-black px-6 py-2 rounded-full font-bold text-lg">
                    Enlarge Menu
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Individual Portions Section */}
        <section className="mb-20 relative" id="individual-portions">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-golden" />
            <h2 className="text-3xl lg:text-4xl font-display text-golden text-center px-4">
              Individual Portions
              <span className="block text-sm text-gray-400 mt-2 font-sans font-normal">Personalized Servings</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-golden" />
          </div>
          <div className="grid grid-cols-1 justify-items-center">
          {individualPortionsImages.map((src, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl hover:shadow-2xl transition-shadow duration-300 w-full max-w-2xl">
                <ModalImage
                  small={src}
                  large={src}
                  alt={`Individual Portion ${index + 1}`}
                  className="w-full h-64 object-cover cursor-pointer"
                  hideDownload
                  hideZoom
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="bg-golden text-black px-6 py-2 rounded-full font-bold text-lg">
                    Enlarge Menu
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Shared Dining Section */}
        <section className="mb-20 relative" id="shared-dining">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-golden" />
            <h2 className="text-3xl lg:text-4xl font-display text-golden text-center px-4">
              Shared Dining
              <span className="block text-sm text-gray-400 mt-2 font-sans font-normal">Group Feast Experiences</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-golden" />
          </div>
          <div className="grid grid-cols-2 gap-8 justify-items-center">
            {sharedDiningImages.map((src, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl hover:shadow-2xl transition-shadow duration-300 w-full max-w-2xl">
              <ModalImage
                small={src}
                large={src}
                alt={`Lunch Special ${index + 1}`}
                className="w-full h-64 object-cover cursor-pointer"
                hideDownload
                hideZoom
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="bg-golden text-black px-6 py-2 rounded-full font-bold text-lg">
                    Enlarge Menu
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Authentic Chinese Section */}
        <section className="mb-20 relative" id="authentic-chinese">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-golden" />
            <h2 className="text-3xl lg:text-4xl font-display text-golden text-center px-4">
              Authentic Chinese
              <span className="block text-sm text-gray-400 mt-2 font-sans font-normal">Traditional Delicacies</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-golden" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {authenticChineseImages.map((src, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl hover:shadow-2xl transition-shadow duration-300">
                <ModalImage
                  small={src}
                  large={src}
                  alt={`Authentic Dish ${index + 1}`}
                  className="w-full h-96 object-cover cursor-pointer"
                  hideDownload
                  hideZoom
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="bg-golden text-black px-6 py-2 rounded-full font-bold text-lg">
                    Enlarge Menu
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hot Pot Section */}
        <section className="mb-20 relative" id="hot-pot">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-golden" />
            <h2 className="text-3xl lg:text-4xl font-display text-golden text-center px-4">
              Hot Pot
              <span className="block text-sm text-gray-400 mt-2 font-sans font-normal">Signature Broths & Ingredients</span>
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-golden" />
          </div>
          <div className="grid grid-cols-1 gap-8">
            {hotPotImages.map((src, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl hover:shadow-2xl transition-shadow duration-300">
                <ModalImage
                  small={src}
                  large={src}
                  alt={`Hot Pot Menu ${index + 1}`}
                  className="w-full h-[500px] object-cover cursor-pointer"
                  hideDownload
                  hideZoom
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="bg-golden text-black px-6 py-2 rounded-full font-bold text-lg">
                    Enlarge Menu
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </Section>
  );
};

export default Menu;