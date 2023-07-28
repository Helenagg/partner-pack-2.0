import React from 'react';
import { FaAngleRight } from "react-icons/fa";

const MapFooter = () => {

    const mapData = [
        'Inicio',
        'Conócenos',
        'Sostenibilidad',
        'Productos',
        'Actualidad',
        'Contacto'
    ]
  return (
    <div className='flex flex-col w-1/4 mx-4'>
      <h1 className='text-xl p-4'>Mapa de la Web</h1>
      <hr className='border-primary-dark m-2 border-1 w-24 rounded-md' />
      {mapData && mapData.map((element, index) => {
        return (
            <div key={index} className='flex flex-inline mt-3 text-sm'>
              <FaAngleRight className='mx-2' size={20} />
              <p>{element}</p>
            </div>
        )
      })}
      </div>
      
  )
}

export default MapFooter