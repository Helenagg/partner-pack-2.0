
import React  from "react";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import DropdownMenu from "./DropdownMenu";
import MobileMenu from "./MobileMenu";
import SearchTrigger from "./SearchTrigger";

const Header = () => {
  
  return (
    <header className=''>
      <nav className='bg-primary text-white'>
        <div className='flex flex-inline justify-between items-center mx-auto max-w-screen-xl p-4'>
          <div className='flex flex-inline font-bold'>
            <a href='tel:+34 918281264' className='flex flex-inline'>
              <AiOutlinePhone className='h-6' />
              &nbsp;91 828 12 64&nbsp;&nbsp;
            </a>
            <a
              href='https://api.whatsapp.com/send?phone=672226122'
              className='flex items-center'
            >
              <AiOutlineWhatsApp />
              &nbsp;672 226 122
            </a>
          </div>
          <div className='flex items-center'>
            <a
              href='https://api.whatsapp.com/send?phone=672226122'
              className='flex items-center px-4 border-l'
            >
              <AiOutlineFacebook size={30} />
            </a>
            <a
              href='https://api.whatsapp.com/send?phone=672226122'
              className='flex items-center px-4 border-l'
            >
              <AiOutlineLinkedin size={30} />
            </a>
          </div>
        </div>
      </nav>

      <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a href='#' className='flex items-center'>
            <img
              src='./assets/img/logo.jpg'
              className='h-12 mr-3'
              alt='Flowbite Logo'
            />
          </a>
          {/* Mobile Menu */}
          <MobileMenu />
          
        
          {/* Menu */}
          <div
            className='hidden w-full md:block md:w-auto'
            id='navbar-dropdown'
          >
            <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li className="">
                <a
                  href='#'
                  className='block py-2 pl-3 pr-4 text-primary bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'
                  aria-current='page'
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Conócenos
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Sostenibilidad
                </a>
              </li>
              <li>
                {/* <button
                  id='dropdownNavbarLink'
                  data-dropdown-toggle='dropdownNavbar'
                  className='flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
                >
                 Productos{" "}
                  <svg
                    className='w-2.5 h-2.5 ml-2.5'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m1 1 4 4 4-4'
                    />
                  </svg>
                </button> */}
                {/* <!-- Dropdown menu --> */}
                <DropdownMenu />
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Actualidad
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
