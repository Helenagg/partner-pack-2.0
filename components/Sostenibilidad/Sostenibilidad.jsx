import React from "react";
import Image from "next/image";

const Sostenibilidad = () => {
  const sostenibilidadData = [
    {
      name: "Reducir",
      urlImage: "/assets/img/sostenibilidad/reducir.webp",
      content: `Reducimos el consumo de materiales a la hora de proteger, agrupar o transportar el producto.<br/> Apostamos por materiales más técnicos y conseguimos ahorrar espacio, tiempo y consumo de material lo que se traduce en una reducción de costes.`,
    },
    {
      name: "Reusar",
      urlImage: "/assets/img/sostenibilidad/reusar.webp",
      content: `Existen múltiples soluciones de embalaje y manuntención enfocadas a ser reutilizables: sobres, cajas, contenedores, embalajes de tránsito y de protección, que gracias a la logística inversa, se pueden recuperar y darle desde un doble uso hasta ser un activo en la cadena de suministro de nuestra empresa.</br>`,
    },
    {
      name: "Reciclar",
      urlImage: "/assets/img/sostenibilidad/reciclar.webp",
      content: `Un 34% de los R.S.U. generados, proceden de envases y embalajes. </br>Unificar materiales materiales y hacer un uso responsable de los residuos es importante para conseguir una economía  circular.</br> Ofrecemos soluciones monomaterial para una mejor gestión del reciclaje.`,
    },
  ];
  return (
    <div className='container mx-auto px-5 py-8'>
      <div className='text-center mb-6'>
        <h1 className='text-2xl font-bold'>Embalaje Ecológico</h1>
        <div className='flex justify-center'>
          <hr className='border-secondary-light m-2 border-1 w-24 rounded-md' />
        </div>
      </div>
      <div className='relative after:absolute after:inset-0 after:z-0 after:block flex flex-col justify-center rounded-lg'>
        <div className='relative'>
          <Image
            src='/assets/img/ecologico/3r.webp'
            alt='3r'
            width={1877}
            height={800}
            className='rounded-lg'
          />
          <div className='absolute inset-0 bg-secondary opacity-30 rounded-lg'></div>
        </div>
        <div className='absolute text-xs md:text-base text-white font-bold w-full md:w-2/3 p-4'>
          <p>
            Te acompañamos en la toma de decisiones para la transición entre tus
            procesos de embalaje actuales y la transformación R-Evolucionaria
            hacia procesos de embalaje realmente sostenibles y circulares
          </p>
        </div>
      </div>
      <div className='mx-auto px-5 py-8 text-center'>
        <p className='font-bold'>Nuestros principios son:</p>
      </div>
      <div className='flex flex-col md:flex-row mt-4'>
        {sostenibilidadData.map((element, index) => {
          return (
            <div
              key={index}
              className='flex flex-cols-1 w-full md:w-1/3 mx-2 mt-10 md:mt-0'
            >
              <div className='mx-w-sm rounded overflow-hidden shadow-lg'>
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>{element.name}</div>
                  <div
                    className='text-secondary text-xs md:text-base'
                    dangerouslySetInnerHTML={{ __html: element.content }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sostenibilidad;
