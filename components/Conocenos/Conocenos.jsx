import React from "react";
import Image from "next/image";

const Conocenos = () => {
  return (
    <>
      <div className='container mx-auto px-5 py-8 mt-2'>
        <div className='text-center mb-6'>
          <h1 className="text-secondary">Conoce Partner Pack</h1>
        </div>
        <div className='lg:flex'>
          <div className='w-full flex flex-col md:w-2/3 md:relative rounded-lg'>
            <Image
              src='/assets/img/cover/conocenos.webp'
              width={1980}
              height={980}
              alt='Conocenos'
              className='w-full order-last mt-6 md:mt-0 rounded-lg'
            />
            <div className='order-first md:absolute md:left-40 top-6 md:top-10 bg-primary p-5 md:transform md:translate-x-2/3 rounded-lg'>
              <h1>Por qué Partner Pack</h1>
              <p className='mb-4'>
                Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum
                et, tempor sit sit diam amet et eos labore. Clita erat ipsum et
                lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor magna dolore erat amet
              </p>
              <p className='mb-4'>
                Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum
                et, tempor sit sit diam amet et eos labore. Clita erat ipsum et
                lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor magna dolore erat amet
              </p>
              <p className='mb-4'>
                Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum
                et, tempor sit sit diam amet et eos labore. Clita erat ipsum et
                lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor magna dolore erat amet
              </p>
              <p className='mb-4'>
                Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum
                et, tempor sit sit diam amet et eos labore. Clita erat ipsum et
                lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor magna dolore erat amet
              </p>
              <div className="mt-2">
              <a href='#' className='btn-white mt-4'>
                Contáctanos
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conocenos;
