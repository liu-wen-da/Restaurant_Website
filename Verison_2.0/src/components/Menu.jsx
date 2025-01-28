import React from 'react';
import ModalImage from 'react-modal-image';
import Section from './Section';
import { menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu11, menu12, menu13, lunch } from '../assets';

const lunchSpecialsImages = [lunch];
const individualPortionsImages = [menu2];
const authenticChineseImages = [menu12, menu13];
const sharedDiningImages = [menu3, menu4, menu5, menu6, menu7, menu8]; 
const hotPotImages = [menu11];

const Menu = () => {
  return (
    <Section className="bg-black text-white pt-[2rem]" id="Menu">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl lg:text-6xl font-display mb-8 text-center text-golden">
            Culinary Selection
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore our exquisite menu offerings. From modern interpretations to traditional favorites, each dish is crafted with precision and care.
          </p>
        </div>

        {/* Sticky Navigation */}
        <div className="sticky top-20 z-10 bg-black/80 backdrop-blur-sm py-4 mb-12">
          <nav className="flex justify-center gap-4">
            {['Lunch Specials', 'Individual Portions', 'Authentic Chinese', 'Hot Pot', 'Shared Dining'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-6 py-2 rounded-full border border-golden/20 bg-black/10 hover:bg-golden/10 transition-all duration-300 
                          text-golden hover:text-white font-semibold text-sm relative
                          hover:shadow-[0_0_15px] hover:shadow-golden/30
                          transform hover:-translate-y-0.5
                          group"
              >
                {item}
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-golden 
                                transform scale-x-0 group-hover:scale-x-100 
                                transition-transform duration-300 origin-left" />
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
              <span className="block text-sm text-gray-400 mt-2 font-sans font-normal">
                Daily Curated Combos
                <span className="block mt-1 text-xs text-golden/80 italic">
                  Available Monday through Sunday, 11:00 AM – 3:30 PM
                </span>
              </span>
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
              <span className="block text-sm text-gray-400 mt-2 font-sans font-normal">
                Personalized Servings
                <span className="block mt-1 text-xs text-golden/80 italic">
                  Perfectly portioned for individual enjoyment
                </span>
              </span>
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
              <span className="block text-sm text-gray-400 mt-2 font-sans font-normal">
                Group Feast Experiences
                <span className="block mt-1 text-xs text-golden/80 italic">
                  Perfect for sharing with friends or family
                </span>
              </span>
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