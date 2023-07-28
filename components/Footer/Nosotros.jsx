import React from 'react';
import Image from 'next/image';
import { AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';

const Nosotros = () => {
  return (
    <div className='flex flex-col w-1/4 mx-4'>
    <h1 className='text-xl p-4'>Nosotros</h1>
    <hr className='border-secondary-light m-2 border-1 w-24 rounded-md' />
    <div className='my-3'>
        <Image 
         src='/assets/img/logo.webp'
         width={100}
         height={47}
         className='h-12 mr-3' 
         alt='Logo'
        />
        <p className='mt-4 mb-2'>Síguenos en:</p>
        <div className='flex items-center'>
            <a
              href='https://api.whatsapp.com/send?phone=672226122'
              className='flex items-center px-4 border-l'
            >
              <AiOutlineFacebook size={30} />
            </a>
            <a
              href='https://api.whatsapp.com/send?phone=672226122'
              className='flex items-center px-4 border-l border-r'
            >
              <AiOutlineLinkedin size={30} />
            </a>
          </div>
    </div>
    </div>
  )
}

export default Nosotros