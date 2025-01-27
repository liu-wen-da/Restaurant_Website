import Section from './Section';
import { chowmein } from "../assets"; // Assuming you have an image to display

const Information = () => {
  return (
    <Section className="bg-black text-white" id="About">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-16">
        <div className="lg:w-1/2 text-center lg:text-left lg:mr-12">
          <h2 className="text-lg text-gray-400 mb-2 font-serif">About Us</h2>
          <h1 className="text-4xl lg:text-6xl font-bold text-golden mb-6 font-display">Iron Wok</h1>
          <p className="text-base lg:text-lg mb-16 font-serif">
            Iron Wok is a family-owned Chinese restaurant that has been serving both Americanized and authentic Chinese cuisine for the past seven years. We strive to stay deeply connected to our roots and the community we serve, embracing simplicity, a sense of humor, and a genuine love for honest food, good company, and shared experiences.
          </p>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-16">
          <img src={chowmein} alt="noddles" className="w-full h-auto" />
        </div>
      </div>
    </Section>
  );
};

export default Information;