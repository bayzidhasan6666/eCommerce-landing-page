import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

const LatestBlog = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section className=" py-10">
      <div className=" mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-4xl font-semibold">
            Latest <span className="text-pink-500">Blog</span>
          </h2>
          <p className="text-gray-300 mt-2">
            Stay updated with our latest articles and news
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="border border-pink-400 rounded-lg p-6 shadow-md"
            data-aos="fade-up"
          >
            <div className="mb-4">
              <img
                className="w-full h-48 object-cover rounded-lg"
                src="https://media.istockphoto.com/id/1371081916/photo/content-wording-on-wooden-cubes-with-speech-bubbles.webp?b=1&s=170667a&w=0&k=20&c=_QWN8OOQbyV2vLi6p1wceOhhRgDvZyhHaEav0CGFw1M="
                alt="Blog Post 1"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Content</h3>
            <p className="text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum urna non nibh consectetur.
            </p>
            <a
              href="#"
              className="text-pink-500 hover:underline hover:text-pink-600 transition-all"
            >
              Read More
            </a>
          </div>
          <div
            className="border border-pink-400 rounded-lg p-6 shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="mb-4">
              <img
                className="w-full h-48 object-cover rounded-lg"
                src="https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.webp?b=1&s=170667a&w=0&k=20&c=cae8s_ncw2axGBVrD5vJR6DBqmVbQkKfAP1ecKUvQzQ="
                alt="About Us"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <p className="text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum urna non nibh consectetur.
            </p>
            <a
              href="#"
              className="text-pink-500 hover:underline hover:text-pink-600 transition-all"
            >
              Read More
            </a>
          </div>
          <div
            className="border border-pink-400 rounded-lg p-6 shadow-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="mb-4">
              <img
                className="w-full h-48 object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
                alt="Blog Post 3"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Read More</h3>
            <p className="text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum urna non nibh consectetur.
            </p>
            <a
              href="#"
              className="text-pink-500 hover:underline hover:text-pink-600 transition-all"
            >
              Read More
            </a>
          </div>
        </div>
        <div
          className="text-center mt-8"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h1 className="text-2xl bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent font-semibold">
            {' '}
            <Typewriter
              options={{
                strings: [
                  'Stay Informed',
                  'Get Inspired',
                  'Expand Your Knowledge',
                ],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 50,
              }}
            />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
