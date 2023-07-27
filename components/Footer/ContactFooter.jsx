import React from "react";
import { SiGooglemaps } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";

const ContactFooter = () => {
  return (
    <div className='flex flex-col w-1/4 mx-4'>
      <h1 className='text-xl p-4'>Contacto</h1>
      <hr className='border-secondary-light m-2 border-1 w-24 rounded-md' />
      <div className='flex flex-inline mt-3 text-sm'>
        <SiGooglemaps className='text-white mx-2' size={20} />
        <p>
          Calle Hierro, 71 <br />
          28850 – Torrejón de Ardoz (Madrid)
        </p>
      </div>
      <div className='flex flex-inline mt-4 text-sm'>
        <HiOutlineMail className='text-white mx-2' size={20} />
        <p>administracion@partnerpack.es</p>
      </div>
      <div className='flex flex-inline mt-4 text-sm'>
        <FaMobileAlt className='text-white mx-2' size={20} />
        <p>672 226 122</p>
      </div>
      <div className='flex flex-inline mt-4 text-sm'>
        <AiOutlinePhone className='text-white mx-2 mb-4' size={20} />
        <p>91 828 12 64</p>
      </div>
    </div>
  );
};

export default ContactFooter;
