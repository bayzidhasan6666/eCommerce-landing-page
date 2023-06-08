import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { FaQuoteLeft } from 'react-icons/fa';

SwiperCore.use([Autoplay, Navigation]);

const testimonials = [
  {
    id: 1,
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec lacinia turpis. Proin tincidunt pulvinar dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    author: 'John Doe',
    position: 'Software Engineer',
  },
  {
    id: 2,
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec lacinia turpis. Proin tincidunt pulvinar dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    author: 'Jane Smith',
    position: 'Graphic Designer',
  },
  {
    id: 3,
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec lacinia turpis. Proin tincidunt pulvinar dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    author: 'Bayzid Hasan',
    position: 'Web Developer',
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="my-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl text-center mt-10 italic font-bold font-serif bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent mb-10">
          What They Say About Us?
        </h1>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          navigation
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="p-6 border border-pink-400 transition-all rounded-lg shadow-md">
                <div className="text-gray-300 mb-4">
                  <FaQuoteLeft className="text-2xl mb-2" />
                  <p>{testimonial.quote}</p>
                </div>
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full mr-4"
                    src={`https://randomuser.me/api/portraits/${
                      testimonial.id % 2 === 0 ? 'women' : 'men'
                    }/${testimonial.id}.jpg`}
                    alt="User"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonial.author}
                    </h3>
                    <p className="text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
