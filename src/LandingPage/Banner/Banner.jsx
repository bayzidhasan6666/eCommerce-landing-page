import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Typewriter from 'typewriter-effect';


const Banner = () => {
  const slides = [
    {
      title: 'Brand New Products',
      description:
        'We help our clients succeed by creating brand identities, digital experiences, and print materials.We help our clients succeed by creating brand identities',
      image:
        'https://img.freepik.com/premium-photo/purple-smartphone-with-gift-box-shopping-bag-shopping-banner-icon-ecommerce-business-icon-online-shopping-concept-3d-illustration_56104-2112.jpg',
    },
    {
      title: 'Special Offers',
      description:
        'Check out our exclusive offers and save big on your favorite products.Check out our exclusive offers and save big on your favorite products',
      image:
        'https://img.freepik.com/free-psd/online-store-icon-isolated-3d-render-illustration_47987-8145.jpg?w=900&t=st=1686038661~exp=1686039261~hmac=0d19f0eb8d939cc45f69b4f26fdf0046f07b48e7e7dd68736a0a734276609691',
    },
    {
      title: 'New Collection',
      description:
        'Stay fashionable with our latest collection of clothing and accessories.Stay fashionable with our latest collection of clothing and accessories',
      image:
        'https://img.freepik.com/free-photo/smartphone-with-discount-promotion-online-shopping-concept-banner-cartoon-3d-rendering_56104-1342.jpg?w=900&t=st=1686038694~exp=1686039294~hmac=955f8698cbbfb16b6f2a991615b07381c2e580ddb79d8d79220eab3a474a1a7f',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      selectedItem={currentSlide}
      onChange={(slide) => setCurrentSlide(slide)}
      className="h-screen"
    >
      {slides.map((slide, index) => (
        <div key={index} className=" ">
          <div className="w-full ">
            <img
              className="rounded-lg w-96 h-screen"
              src={slide.image}
              alt=""
            />
          </div>
          <div className="w-1/2 text-center absolute top-60 right-40 lg:right-80">
            <div className="space-y-2">
              <p className="px-2 text-[9px] font-semibold uppercase bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-fit rounded-lg text-white">
                {slide.title}
              </p>
              <h1 className="text-4xl text-black lg:text-5xl font-sans font-bold  lg:w-full">
                <Typewriter
                  options={{
                    delay: 90,
                    strings: [`${slide.title}`],
                    autoStart: true,
                    loop: true,
                    pauseFor: 2000,
                  }}
                />
              </h1>
              <p className="text-sm  text-black ">{slide.description}</p>
            </div>
            <div className="mt-4">
              <button className="px-4 py-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-2xl text-sm font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
