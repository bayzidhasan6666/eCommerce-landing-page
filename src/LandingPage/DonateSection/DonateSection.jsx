import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

const DonateSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-10">
      <div className="px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl bg-gradient-to-r  from-purple-500 to-red-500 bg-clip-text text-transparent font-semibold">
            Donate and Support
          </h2>
          <p className="text-pink-400 mt-2">
            <Typewriter
              options={{
                strings: ["Make a difference in someone's life"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
        <div className="md:flex justify-center">
          <div
            className="md:w-1/2 p-6 shadow-md rounded-lg"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-semibold mb-2">Donate Now</h3>
            <p className="text-gray-500 mb-4">
              Your contribution can help improve lives
            </p>
            <div className="flex justify-center mb-6">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded">
                Donate
              </button>
            </div>
          </div>
          <div
            className="md:w-1/2 p-6 shadow-md rounded-lg mt-8 md:mt-0"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-semibold mb-2">
              How Your Donation Helps
            </h3>
            <ul className="list-disc list-inside text-gray-500">
              <li>Provide food, clean water, and healthcare</li>
              <li>Support education and skill development</li>
              <li>Empower communities for sustainable change</li>
              <li>Emergency relief and disaster response</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
