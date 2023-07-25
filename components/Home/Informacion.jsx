import Link from 'next/link'
import React from 'react';

const Informacion = () => {
  return (
    <div className='container mx-auto px-5 py-8'>
      <div className='text-center mb-6'>
        <h1 className='text-2xl font-bold'></h1>
        <div className='flex justify-center'>
          <hr className='border-secondary-light m-2 border-1 w-24 rounded-md' />
        </div>
        <div className='container py-5'>
            <div className='flex flex-cols-1 md:flex-row gap-0 mb-3 lg:mb-0'>
                <div className='flex lg:flex-cols-6 lg:my-5 lg:py-5'>
                    <div className="bg-primary p-5 opacity-50">
                        <h1 className='text-lg font-bold mb-4'>¿ Quieres más información ?</h1>
                        <p className=''>Si quieres saber más sobre nosotros o nuestros productos...<br/>
                        Llámanos sin compromiso, te atenderemos encantados                        
                        </p>
                        <Link
                            href={'/contacto'}
                            className='btn-white mt-4 mx-44'
                        >
                            Contacto
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>

  )
}

export default Informacion