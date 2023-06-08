import React, { useEffect } from 'react';
import { AiOutlineMail, AiOutlineArrowRight } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Newsletter = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section className="shadow-xl bg-[#030a18] py-10" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center  rounded-lg p-6 shadow-md">
            <div className="mr-6">
              <AiOutlineMail className="text-4xl text-purple-500" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent mb-2">
                Join Our Newsletter
              </h2>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter and get updates directly to your
                inbox.
              </p>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="border-b border-gray-300 mr-4 px-4 py-2 focus:outline-none focus:border-pink-500"
                />
                <button className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-all">
                  Subscribe
                  <AiOutlineArrowRight className="inline ml-1 text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
