import React from "react";
import Image from "next/image";
import Formulario from "@/components/Home/Formulario";

const pageCajascarton = () => {
  return (
    <div className='container mx-auto px-5 py-8'>
      <div className='text-center mb-6'>
        <h1 className='text-2xl font-bold'>Contacta con nosotros</h1>
        <div className='flex justify-center'>
          <hr className='border-secondary-light m-2 border-1 w-24 rounded-md' />
        </div>
        <div className='flex flex-col md:flex-row mt-2 md:mt-4'>
          <div className='order-first md:w-2/4 my-4'>
            <div className='grid gap-4'>
              <div>
                <Image
                  className='h-auto max-w-full rounded-lg'
                  src='/assets/img/cajas/caja-carton-movil.webp'
                  alt='Caja'
                  width={1024}
                  height={576}
                />
              </div>
              <div className='grid grid-cols-5 gap-4'>
                <div>
                  <Image
                    className='h-auto max-w-full rounded-lg'
                    src='/assets/img/cajas/caja-portatil.webp'
                    alt='Caja'
                    width={1024}
                    height={576}
                  />
                </div>
                <div>
                  <Image
                    className='h-auto max-w-full rounded-lg'
                    src='/assets/img/cajas/cajas-exposicion.webp'
                    alt='Caja'
                    width={1024}
                    height={576}
                  />
                </div>
                <div>
                  <Image
                    className='h-auto max-w-full rounded-lg'
                    src='/assets/img/cajas/caja-carton-movil.webp'
                    alt='Caja'
                    width={1024}
                    height={576}
                  />
                </div>
                <div>
                  <Image
                    className='h-auto max-w-full rounded-lg'
                    src='/assets/img/cajas/caja-portatil.webp'
                    alt='Caja'
                    width={1024}
                    height={576}
                  />
                </div>
                <div>
                  <Image
                    className='h-auto max-w-full rounded-lg'
                    src='/assets/img/cajas/cajas-exposicion.webp'
                    alt='Caja'
                    width={1024}
                    height={576}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='order-last md:w-2/4 ml-4'>
            <h1 className='text-2xl font-semibold text-left mx-4'>
              Cajas de Carton
            </h1>
            <p className='mt-2 mx-4 text-left'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <Formulario />
        </div>
      </div>
    </div>
  );
};

export default pageCajascarton;
