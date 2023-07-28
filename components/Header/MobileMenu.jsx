"use client";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='block space-y-4 md:flex md:space-y-0 md:space-x-4'>
        <button
          data-modal-target='extralarge-modal'
          data-modal-toggle='extralarge-modal'
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-dropdown'
          aria-expanded='false'
          onClick={handleClick}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-5 h-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>

        {isOpen ? (
          <>
            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
              <div className='relative w-full h-full my-6 mx-auto max-w-3xl'>
                {/*content*/}
                <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                  {/*header*/}
                  <div className='flex items-start justify-between p-5 mt-4 border-b border-solid border-slate-200 rounded-t'>
                    <Link href='/' className='cursor-pointer'>
                      <Image
                        src='/assets/img/logo.webp'
                        width={100}
                        height={47}
                        className='h-12 mr-3'
                        alt='Logo'
                      />
                    </Link>
                    <button
                      className='p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                      onClick={() => setIsOpen(false)}
                    >
                      <GrClose className='text-gray-900' />
                    </button>
                  </div>
                  {/*body*/}
                  <div className='relative p-6 flex-auto'>
                    <div className='w-full text-center text-xl font-bold'>
                      <Link
                        href='/'
                        className='block px-3 py-2 text-gray-900 rounded-md focus:outline-none hover:text-primary'
                      >
                        Inicio
                      </Link>
                      <Link
                        href='/conocenos'
                        className='block px-3 py-2 text-gray-900 rounded-md focus:outline-none hover:border-b-2 hover:border-primary'
                      >
                        Conócenos
                      </Link>
                      <Link
                        href='/sostenibilidad'
                        className='block px-3 py-2 text-gray-900 rounded-md focus:outline-none hover:border-b-4 hover:border-primary'
                      >
                        Sostenibilidad
                      </Link>
                      <Link
                        href='#'
                        className='block px-3 py-2 text-gray-900 rounded-md focus:outline-none hover:border-b-4 hover:border-primary'
                      >
                        Productos
                      </Link>
                      <ul>
                        <li className='text-sm text-primary hover:text-gray-900 hover:border-b-2 hover:border-primary'>
                          <Link
                          href='/productos/cajas'
                          >
                          Cajas y Palets
                          </Link>
                        </li>
                        <li className='text-sm text-primary hover:text-gray-900 hover:border-b-2 hover:border-primary'>
                        <Link
                          href='/productos/cajas'
                          >
                          Cajas y Palets
                          </Link>
                        </li>
                        <li className='text-sm text-primary hover:text-gray-900 hover:border-b-2 hover:border-primary'>
                        <Link
                          href='/productos/cajas'
                          >
                          Cajas y Palets
                          </Link>
                        </li>
                        <li className='text-sm text-primary hover:text-gray-900 hover:border-b-2 hover:border-primary'>
                        <Link
                          href='/productos/cajas'
                          >
                          Cajas y Palets
                          </Link>
                        </li>
                        <li className='text-sm text-primary hover:text-gray-900 hover:border-b-2 hover:border-primary'>
                        <Link
                          href='/productos/cajas'
                          >
                          Cajas y Palets
                          </Link>
                        </li>
                        <li className='text-sm text-primary hover:text-gray-900 hover:border-b-2 hover:border-primary'>
                        <Link
                          href='/productos/cajas'
                          >
                          Cajas y Palets
                          </Link>
                        </li>
                      </ul>
                      <Link
                        href='#'
                        className='block px-3 py-2 text-gray-900 rounded-md focus:outline-none hover:border-b-4 hover:border-primary'
                      >
                        Actualidad
                      </Link>
                      <Link
                        href='/contacto'
                        className='block px-3 py-2 text-gray-900 rounded-md focus:outline-none hover:border-b-4 hover:border-primary'
                      >
                        Contacto
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default MobileMenu;
