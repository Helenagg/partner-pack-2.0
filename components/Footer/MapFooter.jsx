import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const MapFooter = () => {
  const mapData = [
    {
      name: "Inicio",
      slug: "/",
    },
    {
      name: "Conócenos",
      slug: "/conocenos",
    },
    // {
    //   name: "Sostenibilidad",
    //   slug: "/sostenibilidad",
    // },
    {
      name: "Productos",
      slug: "/productos",
    },
    {
      name: "Actualidad",
      slug: "/actualidad",
    },
    {
      name: "Contacto",
      slug: "/contacto",
    },
  ];
  return (
    <div className='flex flex-col w-full md:w-1/4 mx-4'>
      <h1 className='text-xl p-2 md:p-4'>Mapa de la Web</h1>
      <hr className='border-secondary-light m-0 md:m-2 border-1 w-3/4 md:w-24 rounded-md' />
      {mapData &&
        mapData.map((element, index) => {
          return (
            <div key={index} className='flex flex-inline mt-3 text-sm'>
              <FaAngleRight className='mx-2' size={20} />
              <Link href={element.slug} className='cursor-pointer'>
                {element.name}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default MapFooter;
