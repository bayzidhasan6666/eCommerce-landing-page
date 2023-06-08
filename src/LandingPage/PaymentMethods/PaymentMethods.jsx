import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaCreditCard,
  FaPaypal,
  FaMoneyCheck,
  FaMobileAlt,
} from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

const PaymentMethods = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-10">
      <div className="mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h1 className="bg-gradient-to-r  from-purple-500 to-red-500 bg-clip-text text-transparent text-3xl font-bold">
            {' '}
            <Typewriter
              options={{
                strings: ['Available Payment Methods', 'Easy and secure payments'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-gray-600 mt-2">
            Choose your preferred payment option
          </p>
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center">
            <FaCreditCard className="text-5xl mb-4 text-pink-500" />
            <h3 className="text-xl font-semibold mb-2">Credit Card</h3>
            <p className="text-gray-500">Safe and secure transactions</p>
          </div>
          <div className="flex flex-col items-center">
            <FaPaypal className="text-5xl mb-4 text-pink-500" />
            <h3 className="text-xl font-semibold mb-2">PayPal</h3>
            <p className="text-gray-500">Quick and easy payments</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMoneyCheck className="text-5xl mb-4 text-pink-500" />
            <h3 className="text-xl font-semibold mb-2">Cash on Delivery</h3>
            <p className="text-gray-500">Pay when you receive the order</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMobileAlt className="text-5xl mb-4 text-pink-500" />
            <h3 className="text-xl font-semibold mb-2">Mobile Payments</h3>
            <p className="text-gray-500">Convenient and fast transactions</p>
          </div>
        </div>
        <div className="text-center mt-8" data-aos="fade-up">
          <h3 className="text-xl font-semibold mb-2">
            Experience seamless shopping with our secure payment options
          </h3>
          <h1 className="bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent text-xl">
            {' '}
            <Typewriter
              options={{
                strings: ['Shop with confidence', 'Easy and secure payments'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
