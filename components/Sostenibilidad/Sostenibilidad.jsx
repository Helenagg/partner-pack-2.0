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
        <h1 className='text-secondary'>Sostenibilidad</h1>
      </div>
      <div className='flex flex-row'>
        {sostenibilidadData.map((element, index) => {
          return (
            <div key={index} className='flex flex-cols-1 md:w-1/3 mx-2'>
              <div className='mx-w-sm rounded overflow-hidden shadow-lg'>
                <Image
                  src={element.urlImage}
                  width={200}
                  height={200}
                  alt={element.name}
                />
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>{element.name}</div>
                  <div
                    className='text-secondary text-base'
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
