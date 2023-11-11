import React from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const Productos = () => {
  const url = [
    {
      name: "Embalaje Ecológico",
      url: "/assets/img/productos/ecologico2.webp",
      slug: "ecologico",
    },
    {
      name: "Maquinaria",
      url: "/assets/img/productos/maquinaria.webp",
      slug: "maquinaria",
    },
    {
      name: "Material de Embalaje",
      url: "/assets/img/productos/material_embalaje.webp",
      slug: "embalaje",
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
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-4 w-full text-center'>
            {url.map((element, index) => {
              return (
                <div
                  className='relative max-w-sm mt-4 flex rounded-lg transform transition ease-in-out shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] duration-1000 delay-[var(--delay)]'
                  style={{ "--delay": index * 0.1 + "s" }}
                  key={index}
                >
                  <div className='relative rounded-lg'>
                    <Image
                      src={element.url}
                      alt={element.name}
                      width={765}
                      height={791}
                      className='w-full rounded-lg h-full'
                    />
                    <div className='absolute top-0 left-0 w-full h-full rounded-lg bg-secondary opacity-60'></div>
                  </div>
                  {/* <div className=''> */}
                  <div className='absolute bg-secondary rounded-lg flex flex-col justify-center inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                    <div className='font-bold text-white text-xl mb-2'>
                      {element.name}
                    </div>
                    <Link
                      href={`/productos/${element.slug}`}
                      className='text-white text-sm flex justify-center'
                    >
                      Si quieres más información pincha aquí
                      <AiOutlineArrowRight className='mx-4 mt-1' />
                    </Link>
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
