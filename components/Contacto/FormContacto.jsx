import React from 'react'

const FormContacto = () => {
  return (
    <div className='relative flex justify-center mt-[-200px] z-1'>
        <div className='relative rounded-3xl flex flex-col sm:justify-center items-center bg-gray-100 w-96'>
          <div className='relative sm:max-w-sm w-full rounded-lg'>
            <div className='card bg-secondary-light shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6'></div>
            <div className='card bg-primary-dark shadow-lg w-full h-full rounded-3xl absolute transform rotate-6'></div>
            <div className='relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md'>
              <label
                for=''
                className='block mt-3 text-sm text-gray-700 text-center font-semibold'
              >
                <h2 className='text-xl'>Contacta con nosotros</h2>
              </label>
              <div className='mt-7'>
                <input
                  type='text'
                  placeholder='Empresa'
                  className='text-xs p-2 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0'
                />
              </div>
              <div className='mt-7'>
                <input
                  type='email'
                  placeholder='Email'
                  className='text-xs p-2 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0'
                />
              </div>
              <div className='mt-7'>
                <input
                  type='text'
                  placeholder='Asunto'
                  className='text-xs p-2 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0'
                />
              </div>
              <div className='mt-7'>
                <textarea
                  type='text'
                  placeholder='Mensaje'
                  className='text-xs p-4 mt-1 block w-full border-none bg-gray-100 h-20 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0'
                />
              </div>
              <div className='flex mt-7 items-center text-center'>
                <hr className='border-gray-300 border-1 w-full rounded-md' />
                <button className='mr-2 ml-2 bg-primary border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105'>
                  {" "}
                  Enviar{" "}
                </button>
                <hr className='border-gray-300 border-1 w-full rounded-md' />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FormContacto