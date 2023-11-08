import React from "react";
import Image from "next/image";
import Link from "next/link";

const Actualidad = () => {
  return (
    <div className='mt-28'>
      <div className='text-center mb-6'>
        <h1 className='text-2xl font-bold'>Actualidad</h1>
        <div className='flex justify-center'>
          <hr className='border-secondary-light m-2 border-1 w-24 rounded-md' />
        </div>
      </div>
      <div className='container py-5 mx-auto flex flex-col justify-center rounded-lg w-full'>
        <div className='mx-4 p-10 rounded-lg'>
        <h1 className='text-xl font-bold'>Ven a visitarnos a la feria</h1>
        <Link 
            href='https://register.visitcloud.com/survey/0t7cmgfdt00un?actioncode=NTWO000063EFQ&partner-contact=3jf2r7qwqyk6q'
            className="text-secondary"
            target="_blanc"
        >¡Descarga nuestra invitación aquí!</Link>
          <Image
            src='/assets/img/cover/feria.webp'
            width={1200}
            height={628}
            alt='Feria'
            className='rounded-lg mt-4'
          />
        </div>
      </div>
    </div>
  );
};

export default Actualidad;
