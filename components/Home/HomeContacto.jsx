import Link from "next/link";
import React from "react";
import Image from "next/image";

const HomeContacto = () => {
  return (
    <div className='container mx-auto px-5 py-8'>
      <div className='text-center mb-6'>
        <div className='flex justify-center'>
          <hr className='border-secondary-light mb-4 border-1 w-24 rounded-md' />
        </div>
        <div className='relative after:absolute after:inset-0 after:z-0 after:block rounded-lg w-full h-[450px] bg-primary/70 flex flex-col justify-center shadow-lg shadow-secondary-light'>
          <div className='flex flex-wrap justify-center h-full'>
            <div className='w-full md:w-1/3 z-20 flex flex-col justify-center'>
              <h1 className='text-3xl text-dark-primary md:text-white font-bold mb-2'>
                ¿ No encuentras lo que buscas ?
              </h1>
              <p className='text-dark-primary md:text-white text-xl mb-4'>
                ¡Planteanos tu reto y encontraremos tu solución!
                <br />
                Pincha aquí
              </p>
              <Link href='/contacto' className='btn-white mx-12 mt-6'>
                Contacto
              </Link>
            </div>
            <div className='w-2/3 z-10 md:relative'>
              <Image
                src='/assets/img/cover/home-contacto.webp'
                alt='Contacto Home'
                fill={true}
                priority={true}
                className='w-full h-full rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContacto;
