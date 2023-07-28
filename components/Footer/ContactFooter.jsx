import React from "react";
import { SiGooglemaps } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import Link from "next/link";

const ContactFooter = () => {
  return (
    <div className='flex flex-col w-1/4 mx-4'>
      <h1 className='text-xl p-4'>Contacto</h1>
      <hr className='border-secondary-light m-2 border-1 w-24 rounded-md' />
      <div className='flex flex-inline mt-3 text-sm'>
        <Link
          href='https://goo.gl/maps/2V6zaA55KFXeTDTE6'
          className='flex cursor-pointer'
          target='_blank'
        >
          <SiGooglemaps className='text-white mx-2' size={20} />
          Calle Hierro, 71 <br />
          28850 – Torrejón de Ardoz (Madrid)
        </Link>
      </div>
      <div className='flex flex-inline mt-4 text-sm'>
        <Link
          href='mailto:administracion@partnerpack.es'
          className='flex cursor-pointer'
        >
          <HiOutlineMail className='text-white mx-2' size={20} />
          administracion@partnerpack.es
        </Link>
      </div>
      <div className='flex flex-inline mt-4 text-sm'>
        <Link href='tel:+34 672226122' className='flex cursor-pointer'>
          <FaMobileAlt className='text-white mx-2' size={20} />
          672 226 122
        </Link>
      </div>
      <div className='flex flex-inline mt-4 text-sm'>
        <Link href='tel:+34 918281264' className='flex cursor-pointer'>
          <AiOutlinePhone className='text-white mx-2 mb-4' size={20} />
          91 828 12 64
        </Link>
      </div>
    </div>
  );
};

export default ContactFooter;
