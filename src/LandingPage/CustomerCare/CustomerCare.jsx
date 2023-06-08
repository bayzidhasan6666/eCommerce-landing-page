import React from 'react';
import Typewriter from 'typewriter-effect';
const CustomerCare = () => {
  return (
    <section className="py-10 ">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl text-center mt-10 italic font-bold font-serif bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent mb-10">
            <Typewriter
              options={{
                delay: 90,
                strings: [`Customer Care`],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
              }}
            />
          </h1>
          <p className="text-purple-400 mt-2">We are here to assist you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className=" p-6  border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-400">
              If you have any questions or need assistance, feel free to contact
              our customer support team.
            </p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Email</h4>
              <p className="text-gray-400">support@example.com</p>
              <h4 className="text-lg font-semibold mt-4 mb-2">Phone</h4>
              <p className="text-gray-400">+1 123 456 7890</p>
              <h4 className="text-lg font-semibold mt-4 mb-2">Live Chat</h4>
              <p className="text-gray-400">
                Chat with our support team in real-time on our website.
              </p>
            </div>
          </div>
          <div className=" p-6  border-gray-300 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-400">
              Browse through our FAQs to find answers to common questions and
              learn more about our services.
            </p>
            <div className="mt-4">
              <ul className="list-disc list-inside">
                <li className="text-gray-400">How can I track my order?</li>
                <li className="text-gray-400 mt-2">
                  What is your return policy?
                </li>
                <li className="text-gray-400 mt-2">
                  How do I create an account?
                </li>
                <li className="text-gray-400 mt-2">
                  What payment methods do you accept?
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerCare;
