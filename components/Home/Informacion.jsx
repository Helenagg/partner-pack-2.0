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
            <div className='my-0 md:my-20 p-0 md:py-5 rounded-lg z-20'>
              <div className='rounded-lg relative'>
                <Image
                  src='/assets/img/informacion/film.webp'
                  alt='Papel Film'
                  width={1600}
                  height={786}
                  className='rounded-lg max-w-full max-h-full'
                />
                <div className='absolute rounded-lg top-0 left-0 w-full h-full bg-primary/50 flex flex-col items-center justify-center'>
                  <h1 className='text-sm md:text-xl font-bold text-white mb-0 md:mb-4'>
                    ¿ Quieres más información ?
                  </h1>
                  <p className='p-0 md:p-2 text-xs md:text-base text-white'>
                    PartnerPack ofrece mucho más que sistemas, maquinaria,
                    finales de línea y consumibles de embalaje. Ofrece
                    soluciones. Cuánto más describas tu necesidad o proceso,
                    mejor podremos adaptar la solución.
                    <br />
                    Por favor, no dejes de preguntarnos, estaremos encantados de
                    hablar contigo.
                  </p>
                  <Link href={"/contacto"} className='btn-white mt-0 md:mt-4'>
                    Contacto
                  </Link>
                </div>
              </div>
            </div>
            <div className='flex flex-row lg:flex-cols-6 min-h-[400px] mt-1 md:-ml-10'>
              <div className='relative h-full'>
                <Image
                  src='/assets/img/informacion/cajas.webp'
                  alt='Papel Film'
                  width={1024}
                  height={1365}
                  className='rounded-lg object-cover max-w-full max-h-full'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row mb-3 md:mb-0'>
            <div className='flex flex-row lg:flex-cols-6 min-h-[400px] mt-1 md:-mr-10'>
              <div className='relative h-full'>
                <Image
                  src='/assets/img/informacion/embaladora.webp'
                  alt='Papel Film'
                  width={1024}
                  height={1365}
                  className='rounded-lg object-cover max-w-full max-h-full'
                />
              </div>
            </div>
            <div className='my-0 md:my-10 p-0 md:py-5 rounded-lg z-20'>
              <div className='rounded-lg relative'>
                <Image
                  src='/assets/img/informacion/empaquetadora.webp'
                  alt='Papel Film'
                  width={1600}
                  height={786}
                  className='rounded-lg max-w-full max-h-full'
                />
                <div className='absolute rounded-lg top-0 left-0 w-full h-full bg-primary/50 flex flex-col items-center justify-center'>
                  <h1 className='text-sm md:text-xl font-bold text-white mb-0 md:mb-4'>
                    R-Evoluciona
                  </h1>
                  <p className='p-0 md:p-2 text-xs md:text-base text-white'>
                    Con la optimización de los procesos productivos mediante
                    automatización y mejora de las soluciones y materiales
                    aplicados al desarrollo de la actividad, se consigue la
                    mejora de costes, conocimiento real de los mismos y una
                    diferenciación del producto de cara al consumidor final.
                  </p>
                  <Link href={"/sostenibilidad"} className='btn-white mt-4'>
                    Infórmate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informacion;
