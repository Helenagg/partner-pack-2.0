import React from "react";
import Image from "next/image";
import FormContacto from "../Contacto/FormContacto";

const Formulario = () => {
  return (
    <div className='container mx-auto px-5 py-8'>
      <div className='text-center mb-6'>
        <div className='flex justify-center'>
          <hr className='border-secondary-light mb-4 border-1 w-24 rounded-md' />
        </div>
        <div className="relative after:absolute after:inset-0 after:z-0 after:block rounded-lg w-full h-[550px] flex flex-col justify-center">
            <Image 
            src='/assets/img/cover/formulario.webp'
            alt='Imagen Cover'
            fill={true}
            priority={true}
            className='object-cover w-full h-full rounded-lg'
            />
            <div className="absolute bottom-8 right-6 flex items-start">
                <FormContacto />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
