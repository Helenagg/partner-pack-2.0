import Link from "next/link";
import React from "react";

const DropdownMenu = ({ isOpen, closeMenu }) => {
  const handleOptionClick = () => {
    closeMenu();
  };

  return (
    <>
      <button
        id='dropdownNavbarLink'
        data-dropdown-toggle='dropdownNavbar'
        className='relative flex items-center justify-between w-full text-gray-900 rounded md:pb-2 hover:border-b-4 hover:border-primary active:text-primary'
        onClick={handleOptionClick}
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
      </button>
      {isOpen ? (
        <div
          id='dropdownNavbar'
          className='absolute bg-white z-10 rounded-lg shadown w-44 text-primary'
        >
          <ul
            className='py-2 text-sm text-primary dark:text-gray-400'
            aria-labelledby='dropdownLargeButton'
          >
            <li>
              <Link
                href='/productos/ecologico'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                onClick={handleOptionClick}
              >
                Embalaje Ecológico
              </Link>
            </li>
            <li>
              <Link
                href='/productos/maquinaria'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                onClick={handleOptionClick}
              >
                Maquinaria
              </Link>
            </li>
            <li>
              <Link
                href='/productos/embalaje'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                onClick={handleOptionClick}
              >
                Material de Embalaje
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default DropdownMenu;
