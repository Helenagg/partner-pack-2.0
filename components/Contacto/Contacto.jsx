import React from "react";
import Image from "next/image";

const Contacto = () => {
  const contactData = [
    {
      name: "Direccion",
      urlImage: "/assets/img/contacto/enfardadora_automatica.webp",
      content: `<p>Calle Hierro 71,</p><p>28850 Torrejón de Ardoz</p>`,
    },
    {
      name: "Teléfonos de contacto",
      urlImage: "/assets/img/contacto/enfardadora_automatica.webp",
      content: "<p>672 226 122</p><p>918 281 264</p>",
    },
    {
      name: "Email",
      urlImage: "/assets/img/contacto/enfardadora_automatica.webp",
      content: `<p className='text-sm'>administracion@partnerpack.es</p>`,
    },
  ];
  return (
    <div className='container mx-auto px-5 py-8'>
      <div className='text-center mb-6'>
        <h1 className='text-2xl font-bold'>Contacta con nosotros</h1>
        <div className='flex justify-center'>
          <hr className='border-secondary-light m-2 border-1 w-24 rounded-md' />
        </div>
      </div>
      <div className='flex flex-col md:flex-row'>
        {contactData &&
          contactData.map((element, index) => {
            return (
              <div
                key={index}
                className='flex flex-cols-1 w-full md:w-1/3 mx-2 mt-10 md:mt-0 relative items-center justify-center shadow-black'
              >
                <div className='max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300'>
                  <Image
                    src={element.urlImage}
                    width={1042}
                    height={1038}
                    alt={element.name}
                  />
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: element.content }}
                  className='absolute text-white font-bold text-center z-50 text-xl block justify-center'
                />
              </div>
            );
          })}
      </div>
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
      <div className='relative flex justify-center mt-[-200px] z-1'>
        <div className='relative flex flex-col sm:justify-center items-center bg-gray-100 w-96'>
          <div className='relative sm:max-w-sm w-full'>
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
    </div>
  );
};

export default Contacto;
