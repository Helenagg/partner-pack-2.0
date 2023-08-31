import React from "react";
import Image from "next/image";
import DropdownMenu from "./DropdownMenu";
import MobileMenu from "./MobileMenu";
import TopBar from "./TopBar";
import Link from "next/link";

const Header = () => {
  return (
    <header className=''>
      <TopBar />
      <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed w-full z-50 hover:top-0 animate-sticky'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link href='/' className='flex items-center'>
            <Image
              src='/assets/img/logo.webp'
              width={100}
              height={47}
              className='h-12 mr-3'
              alt='Logo'
            />
          </Link>
          {/* Mobile Menu */}
          <div className='md:hidden'>
            <MobileMenu />
          </div>
          {/* Menu */}
          <div
            className='hidden w-full md:block md:w-auto'
            id='navbar-dropdown'
          >
            <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li className=''>
                <Link
                  href='/'
                  className='block text-gray-900 rounded md:pb-2 hover:border-b-4 hover:border-primary active:text-primary'
                  aria-current='page'
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href='/conocenos'
                  className='block text-gray-900 rounded md:pb-2 hover:border-b-4 hover:border-primary active:text-primary'
                >
                  Conócenos
                </Link>
              </li>
              <li>
                <Link
                  href='/sostenibilidad'
                  className='block text-gray-900 rounded md:pb-2 hover:border-b-4 hover:border-primary active:text-primary'
                >
                  Sostenibilidad
                </Link>
              </li>
              <li>
                <DropdownMenu />
              </li>
              <li>
                <Link
                  href='#'
                  className='block text-gray-900 rounded md:pb-2 hover:border-b-4 hover:border-primary active:text-primary'
                >
                  Actualidad
                </Link>
              </li>
              <li>
                <Link
                  href='/contacto'
                  className='block text-gray-900 rounded md:pb-2 hover:border-b-4 hover:border-primary active:text-primary'
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
