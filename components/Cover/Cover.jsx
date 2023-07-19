import React from "react";
import Image from "next/image";

const Cover = (props) => {
  return (
    <div className='relative after:absolute after:inset-0 after:z-0 after:block w-full h-[600px] flex flex-col justify-center'>
      <Image
        src='/assets/img/cover/banderas.webp'
        alt='Inicio'
        fill={true}
        priority={true}
        className='object-cover'
      />
      <div className='relative pb-10 lg:pb-14 xl:pb-20 flex flex-col lg:flex-row gap-3 items-center justify-between container mx-auto px-5 z-10 '>
        <div class='pt-2'>
          <a
            href=''
            class='btn-white rounded py-md-3 px-md-5 mx-2'
          >
            Productos
          </a>
          <a
            href=''
            class='rounded py-md-3 px-md-5 mx-2'
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cover;
