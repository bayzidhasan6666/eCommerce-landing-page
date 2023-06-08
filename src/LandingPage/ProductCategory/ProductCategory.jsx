import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

import {
  FaCamera,
  FaGlasses,
  FaMobileAlt,
  FaTshirt,
} from 'react-icons/fa';
import { BsWatch } from 'react-icons/bs';

const ProductCategory = () => {
  const categories = [
    {
      title: 'Phone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: <FaMobileAlt className="text-white text-2xl" />,
    },
    {
      title: 'Watch',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: <BsWatch className="text-white text-2xl" />,
    },
    {
      title: 'Glasses',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: <FaGlasses className="text-white text-2xl" />,
    },
    {
      title: 'Camera',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: <FaCamera className="text-white text-2xl" />,
    },
    {
      title: 'Watch',
      description:
        'Sed euismod nisl vel lectus tincidunt, id dapibus felis consequat.',
      icon: <FaTshirt className="text-white text-2xl" />,
    },
    {
      title: 'Sunglasses',
      description:
        'Proin auctor odio ac leo maximus, vel aliquet erat dignissim.',
      icon: <FaGlasses className="text-white text-2xl" />,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className="py-8">
      <div className=" mx-auto px-4 sm:px-6 ">
        <h1 className="text-4xl text-center mt-10 italic font-bold font-serif bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent mb-10">
          <Typewriter
            options={{
              delay: 90,
              strings: [`Product Category `],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
            }}
          />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#2c2b2b22] hover:border border-pink-500 transition-all rounded-lg shadow-md py-8 px-5 border-gradient-animation relative"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-12 h-12 mb-4 mx-auto">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold animate__animated animate__fadeIn">
                {category.title}
              </h3>
              <p className="mt-2 animate__animated animate__fadeIn">
                {category.description}
              </p>
              <div className="border-gradient"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
