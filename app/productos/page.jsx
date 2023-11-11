import React from 'react';
import Productos from '@/components/Productos/Productos';
import Formulario from '@/components/Home/Formulario';

const PageProductos = () => {
  return (
    <div className='mt-28'>
        <Productos />
        <div className='container mx-auto px-5 py-8'>
        <div className='text-center mb-2'>
          <div className='flex justify-center'>
            <hr className='border-secondary-light mb-4 border-1 w-24 rounded-md' />
          </div>
          <Formulario />
        </div>
      </div>
    </div>
  )
}

export default PageProductos