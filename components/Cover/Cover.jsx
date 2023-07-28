import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cover = (props) => {
  return (
    <div className='relative after:absolute after:inset-0 after:z-0 after:block w-full h-[600px] flex flex-col justify-center'>
      <Image
        src={props.urlCover}
        alt='Inicio'
        fill={true}
        priority={true}
        className='object-cover w-full h-full'
      />
      
        <div className='absolute bottom-6 left-6 flex flex-col md:flex-row items-start gap-4 p-4'>
          <Link
            href='/productos'
            className='btn-white'
          >
            Productos
          </Link>
          <Link
            href='/contacto'
            className='btn-white'
          >
            Contacto
          </Link>
        </div>
     
    </div>
  );
};

export default Cover;
