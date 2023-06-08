import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MostWanted = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div
      className="md:flex items-center justify-between gap-20 h-64 border border-pink-400 rounded-lg p-8"
      data-aos="fade-up"
    >
      <div className="w-96">
        <div>
          <img
            className="w-52 h-52 rounded-lg"
            src="https://burst.shopifycdn.com/photos/mens-fashion-watch.jpg?width=1200&format=pjpg&exif=1&iptc=1"
            alt=""
          />
        </div>
      </div>
      <div className="rounded-md p-4 uppercase">
        <h1 className="text-lg font-semibold">Introducing</h1>
        <h1 className="text-2xl font-semibold">Hero 4</h1>
        <p className="text-gray-500">This is your life</p>
        <button className="px-3 py-1 border border-gray-300 rounded-md mt-4 hover:bg-gray-100 transition-all">
          Buy Now
        </button>
      </div>
      <div>
        <div>
          <h1 className="text-2xl font-semibold mb-2">Password Required</h1>
          <p className="text-gray-500">If you've got it, enter it below</p>
        </div>
        <div className="mt-4">
          <input
            type="password"
            placeholder="Password"
            className="w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="submit"
            value="Watch Video"
            className="ml-4 px-6 py-2 bg-pink-500 text-white rounded-md cursor-pointer hover:bg-pink-600 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default MostWanted;
