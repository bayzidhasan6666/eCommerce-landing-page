import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import productsData from '/public/products.json';
import Swal from 'sweetalert2';
import Typewriter from 'typewriter-effect';

const OurProducts = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();

    setProducts(productsData);
  }, []);

  const visibleProducts = showAllProducts ? products : products.slice(0, 6);

  const toggleShowAllProducts = () => {
    setShowAllProducts(!showAllProducts);
  };

  const handleAddToCart = (productName) => {
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart',
      text: `Successfully added ${productName} to cart.`,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
  };

  return (
    <div className="py-8">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl text-center mt-10 italic font-bold font-serif bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent mb-10">
          <Typewriter
            options={{
              delay: 90,
              strings: [`Our Products`],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
            }}
          />
        </h1>
        <div
          className="grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className=" border border-pink-400 p-6 rounded-lg shadow-md"
              data-aos="fade-right"
            >
              {product.image ? (
                <img
                  data-aos="fade-left"
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-4"
                />
              ) : (
                <img
                  src="https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1200&format=pjpg&exif=1&iptc=1"
                  className="w-full h-40 object-cover mb-4"
                />
              )}

              <h3 className="text-lg font-semibold ">{product.name}</h3>
              <p className=" mb-2">{product.category}</p>
              <p className="text-pink-400 mb-2">{product.price}</p>
              <button
                className="bg-gradient-to-r from-purple-400  to-pink-500 text-white px-4 py-2 rounded-md"
                onClick={() => handleAddToCart(product.name)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        {!showAllProducts && (
          <button
            className=" bg-purple-400 flex mx-auto mt-8 text-white px-4 py-2 rounded-md"
            onClick={toggleShowAllProducts}
          >
            See More
          </button>
        )}
        {showAllProducts && (
          <button
            className=" bg-pink-400 flex mx-auto mt-8 text-white px-4 py-2 rounded-md"
            onClick={toggleShowAllProducts}
          >
            See Less
          </button>
        )}
      </div>
    </div>
  );
};

export default OurProducts;
