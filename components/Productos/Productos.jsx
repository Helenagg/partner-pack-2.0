import React from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

const Productos = () => {

  const url = [
    {
      name: "cajas",
      url: "/assets/img/contacto/enfardadora_automatica.webp",
    },
    {
      name: "cajas",
      url: "/assets/img/contacto/enfardadora_automatica.webp",
    },
    {
      name: "cajas",
      url: "/assets/img/contacto/enfardadora_automatica.webp",
    },
  ];

  return (
    <div className='container mx-auto px-5 py-8'>
      <div className='text-center mb-6'>
        <h1 className='text-2xl font-bold'>Productos</h1>
        <div className='flex justify-center'>
          <hr className='border-secondary-light m-2 border-1 w-24 rounded-md' />
        </div>
        <div className='flex-grow w-full flex items-center justify-center flex-col group cursor-pointer'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-1 my-4 w-full text-center'>
            {url.map((element, index) => {
              return (
                <div
                  className='relative max-w-sm mt-4 rounded-lg transform transition ease-in-out shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000 delay-[var(--delay)]'
                  style={{ "--delay": index * 0.1 + "s" }}
                  key={index}
                >
                  <div>
                    <Image
                      src={element.url}
                      alt={element.name}
                      width={1042}
                      height={1038}
                      className='w-full rounded-lg'
                    />
                  </div>
                  {/* <div className=''> */}
                  <div className='absolute bg-white rounded-lg inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                    <div className='font-bold mb-2'>Cajas</div>

                    <a className='text-gray-700 text-base flex justify-center'>
                      Ver Producto
                      <AiOutlineArrowRight className='mx-4 mt-1' />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
