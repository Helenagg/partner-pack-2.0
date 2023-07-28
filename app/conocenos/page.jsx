import Cover from "@/components/Cover/Cover";
import React from "react";
import Conocenos from "@/components/Conocenos/Conocenos";
import Formulario from "@/components/Home/Formulario";
import HomeContacto from "@/components/Home/HomeContacto";

const PageConocenos = () => {
  return (
    <div>
      <div>
        <Cover urlCover='/assets/img/cover/conocenos.webp' />
      </div>
      <Conocenos />
      <div className='container mx-auto px-5 py-8 mt-60'>
        <div className='text-center mb-2'>
          <div className='flex justify-center'>
            <hr className='border-secondary-light mb-4 border-1 w-24 rounded-md' />
          </div>
          <Formulario />
        </div>
      </div>
      <HomeContacto />
    </div>
  );
};

export default PageConocenos;
