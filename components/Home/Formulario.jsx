import React from "react";
import Image from "next/image";
import FormContacto from "../Contacto/FormContacto";

const Formulario = () => {
  return (
    <div className='relative after:absolute after:inset-0 after:z-0 after:block rounded-lg w-full h-[550px] flex flex-col justify-center shadow-lg shadow-secondary-light'>
      <Image
        src='/assets/img/cover/formulario.webp'
        alt='Imagen Cover'
        fill={true}
        priority={true}
        className='object-cover w-full h-full rounded-lg'
      />
      <div className='absolute bottom-8 right-[-48px] md:right-6 flex items-center md:items-start'>
        <FormContacto />
      </div>
    </div>
  );
};

export default Formulario;
