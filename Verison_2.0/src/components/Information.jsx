import { useState, useEffect } from 'react';
import Section from './Section';
import { chowmein } from "../assets";



const Information = () => {

  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnnouncement(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Section className="bg-black text-white py-16 lg:py-24 relative" id="About" crosses>

      {/* Announcement Modal */}
      {showAnnouncement && (
        <div className="fixed inset-0 z-50 bg-black-900/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowAnnouncement(false)}>
          <div className="relative bg-red-800 border-2 border-golden rounded-2xl max-w-2xl w-full p-8 mx-4 shadow-xl shadow-red-900/50"
            onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              onClick={() => setShowAnnouncement(false)}
              className="absolute top-4 right-4 text-golden hover:text-red-100 transition-colors text-2xl">
              ✕
            </button>
            
            {/* Announcement Content */}
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-golden" />
                <h2 className="text-2xl lg:text-3xl font-display text-golden px-4">
                  🧧 Chinese New Year, New Home!
                  <span className="block text-sm text-red-200 mt-2 font-sans">
                    
                  </span>
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-golden" />
              </div>

              <p className="text-red-50 leading-relaxed font-sans mb-4">
                As we welcome the Year of the Snake, we're excited to announce our new location in 
                <span className="text-golden block mt-2 text-lg font-medium">
                  Downtown Pullman! 
                  <span className="text-red-200 block text-sm mt-1">(Just 20 minutes away)</span>
                </span>
              </p>

              <div className="bg-red-900/30 p-4 rounded-lg border border-golden/20">
                <p className="text-sm text-golden/80 italic">
                  🐍 Anticipated pening: Q4 2024 (or possibly earlier!)
                </p>
                <p className="text-sm text-red-200 mt-2">
                  Current location remains open until new venue is ready
                </p>
              </div>

              <div className="mt-6 border-t border-golden/20 pt-6">
                <button 
                  onClick={() => setShowAnnouncement(false)}
                  className="px-8 py-2 rounded-full bg-golden hover:bg-red-900 border-2 border-golden text-red-900 hover:text-golden 
                    transition-all duration-300 hover:scale-105 font-bold">
                  Continue to Site →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-golden" />
              <h1 className="text-3xl lg:text-4xl font-display text-golden px-4 text-center">
                Our Story
                <span className="block text-sm text-golden/80 mt-2 font-sans font-normal tracking-wide">
                  Tradition & Passion
                </span>
              </h1>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-golden" />
            </div>

            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-sans mb-8 lg:mb-10 max-w-3xl mx-auto lg:mx-0">
              For seven generations, <span className="text-golden">Iron Wok</span> has been the heartbeat of authentic Chinese cuisine, 
              blending time-honored traditions with contemporary flair. As a family-owned establishment, 
              we take pride in crafting both classic dishes and modern interpretations, all while 
              maintaining our deep connection to culinary heritage.
            </p>

            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-sans border-l-4 border-golden/30 pl-6 italic">
              Our philosophy is simple: exceptional ingredients, masterful technique, and 
              genuine hospitality. Every dish tells a story. 
              <span className="block mt-2 not-italic text-golden/80">
                Join us in creating new memories around our table.
              </span>
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 relative group">
            <div className="relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <img 
                src={chowmein} 
                alt="Handcrafted noodles" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-4 left-4 text-golden font-sans text-sm">
                Crafted with Precision, Served with Pride
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Information;