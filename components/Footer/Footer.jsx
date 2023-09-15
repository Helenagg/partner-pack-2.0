import React from "react";
import ContactFooter from "./ContactFooter";
import ProductsFooter from "./ProductsFooter";
import MapFooter from "./MapFooter";
import Nosotros from "./Nosotros";

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-slate-900 to-primary text-white'>
      <div className='flex flex-col md:flex-row gap-4'>
        <ContactFooter />
        <ProductsFooter />
        <MapFooter />
        <Nosotros />
      </div>
    </div>
  );
};

export default Footer;
