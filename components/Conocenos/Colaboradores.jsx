import React from "react";
import Image from "next/image";

const Colaboradores = () => {
  const colaboradoresData = [
    {
      name: "IBERHIPAC",
      logo: "/assets/img/colaboradores/iberhipac.webp",
    },
    {
      name: "INSER ROBÓTICA",
      logo: "/assets/img/colaboradores/inserRobotica.webp",
    },
    {
      name: "NEVSTA",
      logo: "/assets/img/colaboradores/nevsta.webp",
    },
    {
        name: "MOVITEC",
        logo: "/assets/img/colaboradores/movitec.webp",
      },
      {
        name: "MERELLO",
        logo: "/assets/img/colaboradores/merello.webp",
      },
  ];

  return (
    <div className='container mx-auto mt-2 px-5 py-8'>
      <div className='text-center mb-6'>
        <h1 className='text-2xl font-bold'>Empresas Colaboradoras</h1>
        <div className='flex justify-center'>
          <hr className='border-secondary-light m-2 border-1 w-24 rounded-md' />
        </div>
      </div>
      <div className='text-primary rounded-lg bg-white shadow-lg p-4'>
        <p className='text-left'>
          Apostamos por las soluciones de calidad y proximidad. Tenemos la
          suerte de colaborar con grandes empresas multinacionales cuyas plantas
          de fabricación están situadas en España y Portugal. Con ello apostamos
          por marcas y empresas de proximidad, con repercusión local y
          multinacional, sin descuidar que nuestras soluciones sean productos y
          máquinas de primer nivel. Así también contribuimos a reducir la huella
          de carbono al minimizar los kilómetros de transporte desde sus plantas
          hasta el cliente final. PartnerPack es agente colaborador y
          distribuidor de las siguientes marcas:
        </p>
        <div className='flex flex-col md:flex-row mt-4'>
          {colaboradoresData &&
            colaboradoresData.map((element, index) => {
              return (
                <div
                  key={index}
                  className='flex flex-cols-1 w-full md:w-1/3 mx-2 mt-10 md:mt-0'
                >
                  <div className='mx-w-sm rounded overflow-hidden shadow-lg w-40'>
                    <Image
                      src={element.logo}
                      width={100}
                      height={100}
                      alt={element.name}
                      className='ml-4'
                    />
                    <div className='px-6 py-4'>
                      <dic className='font-bold text-lg mb-2'>
                        {element.name}
                      </dic>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Colaboradores;
