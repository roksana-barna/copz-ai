import React from 'react';
import './Banner.css'
const Banner = () => {
  return (
    <div>
      <div className="bg-black text-gradient mt-8  text-white p-8 text-center">
        <h1 className="lg:text-4xl md:text-3xl sm:text-3xl  font-semibold mb-2">Unleash the Power of Copywriting AI</h1>
        <h1 className="lg:text-4xl sm:text-3xl font-bold mb-2" style={{ background: 'linear-gradient(800deg, #FFFF00, #800080, #0000FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          and Create content faster
        </h1>
        <p className='mb-3 font-thin text-xs mt-5'>AI Copywriting is revolutionizing the way  is created. AI can create content <br /> for blogs, articles, websites, social media and more.</p>
        <a
          href="#"
          className=" border-gradient inline-block text-xs px-4 py-2 font-thin text-white border-2 mt-4 border-transparent border-red-300 rounded-lg transition duration-300 hover:border-gradient"
        >
          Start Writing for Free
        </a>
      </div>
    </div>
  );
};

export default Banner;