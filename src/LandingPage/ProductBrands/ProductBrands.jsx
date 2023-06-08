import React from 'react';

const ProductBrands = () => {
  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold">
            Trusted <span className="text-pink-500">Product Brands</span>
          </h2>
          <p className="text-gray-300 mt-2">
            Explore the top brands that we offer
          </p>
        </div>
        <div className="flex justify-center">
          <table className="table-fixed w-full">
            <tbody>
              <tr>
                <td className="p-6 border border-pink-400 shadow-md rounded-lg">
                  <div className="flex justify-center">
                    <img
                      className="w-24 h-24 mx-auto mb-4 rounded-full bg-glass"
                      src="https://images-platform.99static.com//GwVi89Xt01G4xqTobIbHX9z0VkI=/174x186:808x820/fit-in/500x500/99designs-contests-attachments/101/101558/attachment_101558319"
                      alt="Brand 1"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                   AOD
                  </h3>
                  <p className="text-gray-300 text-center">
                    High-quality products for your needs
                  </p>
                </td>
                <td className="p-6 border border-pink-400 shadow-md rounded-lg">
                  <div className="flex justify-center">
                    <img
                      className="w-24 h-24 mx-auto mb-4 rounded-full bg-glass"
                      src="https://marketplace.canva.com/EAFG7kfm3BI/1/0/1600w/canva-black-gold-elegant-illustration-fashion-brand-logo-iGxWBDSlpgs.jpg"
                      alt="Brand 2"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                    BRAND
                  </h3>
                  <p className="text-gray-300 text-center">
                    Innovative solutions for modern living
                  </p>
                </td>
              </tr>
              <tr>
                <td className="p-6 border border-pink-400 shadow-md rounded-lg">
                  <div className="flex justify-center">
                    <img
                      className="w-24 h-24 mx-auto mb-4 rounded-full bg-glass"
                      src="https://images-platform.99static.com//bQv5fXDnpWqV6i7BOoF8ZinXBOw=/118x88:1920x1890/fit-in/500x500/99designs-contests-attachments/114/114714/attachment_114714996"
                      alt="Brand 3"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                    ULK
                  </h3>
                  <p className="text-gray-300 text-center">
                    Trusted by professionals worldwide
                  </p>
                </td>
                <td className="p-6 border border-pink-400 shadow-md rounded-lg">
                  <div className="flex justify-center">
                    <img
                      className="w-24 h-24 mx-auto mb-4 rounded-full bg-glass"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ElPz_zvXB8Ir8e6ZUrc0yoadk3Kcpyrb7OtTM2M4lh4k9wRf4YuFMtF8W5lOxg-ixlE&usqp=CAU"
                      alt="Brand 4"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                    CHANEL
                  </h3>
                  <p className="text-gray-300 text-center">
                    Sustainable and eco-friendly products
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductBrands;
