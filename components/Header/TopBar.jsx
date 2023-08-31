import Link from "next/link";
import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const TopBar = () => {
  return (
    <nav className='bg-primary text-white' id='menu'>
      <div className='flex flex-inline justify-between items-center mx-auto max-w-screen-xl p-4'>
        <div className='flex flex-inline font-bold'>
          <Link href='tel:+34 918281264' className='flex flex-inline'>
            <AiOutlinePhone className='h-6' />
            &nbsp;91 828 12 64&nbsp;&nbsp;
          </Link>
          <Link
            href='https://api.whatsapp.com/send?phone=672226122'
            className='flex items-center'
          >
            <AiOutlineWhatsApp />
            &nbsp;672 226 122
          </Link>
        </div>
        <div className='flex items-center'>
          <Link
            href='https://api.whatsapp.com/send?phone=672226122'
            className='flex items-center px-4 border-l'
          >
            <AiOutlineFacebook size={30} />
          </Link>
          <Link
            href='https://api.whatsapp.com/send?phone=672226122'
            className='flex items-center px-4 border-l'
          >
            <AiOutlineLinkedin size={30} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
