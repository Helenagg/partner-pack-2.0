import React from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

const Productos = () => {

    const tablets = {
        front: ["F","r","a","n","c","o"," ","A",".","M","a","r","c","u","z","z","i"," "],
        back: ["D","e","v","e","l","o","p","e","r"," ","B","a","c","k","e","n","d"," "],
      }
  return (
    <div className='container mx-auto px-5 py-8'>
      <div className='text-center mb-6'>
        <h1 className='text-2xl font-bold'>Productos</h1>
        <div className='flex justify-center'>
          <hr className='border-secondary-light m-2 border-1 w-24 rounded-md' />
        </div>
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
          <Image
            src='/assets/img/contacto/enfardadora_automatica.webp'
            alt=''
            width={1042}
            height={1038}
            className='w-full'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>Cajas</div>

            <a className='text-gray-700 text-base flex justify-center'>
              Ver Producto
              <AiOutlineArrowRight className='mx-4 mt-1' />
            </a>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default Productos;
