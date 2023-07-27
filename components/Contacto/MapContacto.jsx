import React from 'react'

const MapContacto = () => {
  return (
    <div className='mt-16 h-[500px]'>
        <div className='relative h-full'>
          <iframe
            className='relative w-full h-full'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.1453754588006!2d-3.4581270843503598!3d40.44991926154375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4237a6150ebf51%3A0x3dc75441393696d0!2sC.%20Hierro%2C%2071%2C%2028850%20Torrej%C3%B3n%20de%20Ardoz%2C%20Madrid!5e0!3m2!1ses!2ses!4v1656579129751!5m2!1ses!2ses'
            frameborder='0'
            style={{ border: "0" }}
            allowFullScreen=''
            aria-hidden='false'
            tabindex='0'
          ></iframe>
        </div>
      </div>
  )
}

export default MapContacto