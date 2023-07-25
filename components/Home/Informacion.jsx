import Link from "next/link";
import React from "react";
import Image from "next/image";

const Informacion = () => {
  return (
    <div className='container mx-auto px-5 py-8'>
      <div className='text-center mb-6'>
        <h1 className='text-2xl font-bold'></h1>
        <div className='flex justify-center'>
          <hr className='border-secondary-light m-2 border-1 w-24 rounded-md' />
        </div>
        <div className='container py-5'>
          <div className='flex flex-col md:flex-row mb-3 md:mb-0'>
            <div className='my-0 md:my-5 lg:py-5 rounded-lg '>
              <div id='1' className='rounded-lg relative'>
                <Image
                  src='/assets/img/informacion/papel-film.webp'
                  alt='Papel Film'
                  width={1024}
                  height={938}
                  className='rounded-lg'
                />
                <div id='2' className='absolute rounded-lg top-0 left-0 w-full h-full bg-primary/50 flex flex-col items-center justify-center'>
                <h1 className='text-xl font-bold  text-white mb-4'>
                  ¿ Quieres más información ?
                </h1>
                <p className=' text-white'>
                  Si quieres saber más sobre nosotros o nuestros productos...
                  <br />
                  Llámanos sin compromiso, te atenderemos encantados
                </p>
                <Link href={"/contacto"} className='btn-white mt-4'>
                  Contacto
                </Link>
              </div>
              </div>
  
            </div>
            <div className='flex flex-row lg:flex-cols-6 min-h-[400px] -ml-8'>
              <div className='relative h-full'>
                <Image
                  src='/assets/img/informacion/cajas.webp'
                  alt='Papel Film'
                  width={1024}
                  height={938}
                  className='rounded-lg object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informacion;
