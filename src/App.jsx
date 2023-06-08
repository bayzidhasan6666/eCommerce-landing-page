import React from 'react';
import Navbar from './LandingPage/Navbar/Navbar';
import Banner from './LandingPage/Banner/Banner';
import ProductCategory from './LandingPage/ProductCategory/ProductCategory';
import OurProducts from './LandingPage/OurProducts/OurProducts';
import MostWanted from './LandingPage/MostWanted/MostWanted';
import Testimonials from './LandingPage/Testimonials/Testimonials';
import Footer from './LandingPage/Footer/Footer';
import Newsletter from './LandingPage/Newsletter/Newsletter';
import LatestBlog from './LandingPage/LatestBlog/LatestBlog';
import ProductBrands from './LandingPage/ProductBrands/ProductBrands';
import CustomerCare from './LandingPage/CustomerCare/CustomerCare';
import PaymentMethods from './LandingPage/PaymentMethods/PaymentMethods';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen space-y-10">
      <Navbar></Navbar>
      <Banner></Banner>
      <ProductCategory></ProductCategory>
      <OurProducts></OurProducts>
      <MostWanted></MostWanted>
      <ProductBrands></ProductBrands>
      <LatestBlog></LatestBlog>
      <Newsletter></Newsletter>
      <CustomerCare></CustomerCare>
      <PaymentMethods></PaymentMethods>
      <Testimonials></Testimonials>

      <Footer></Footer>
    </div>
  );
};

export default App;
