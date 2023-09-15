import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const ProductsFooter = () => {
  const productsData = [
    {
      name: "Ecoembalaje",
      slug: "ecoembalaje",
    },
    {
      name: "Maquinaria",
      slug: "maquinaria",
    },
    {
      name: "Film Estirable",
      slug: "filmEstirable",
    },
    {
      name: "Relleno y Protección",
      slug: "rellenoProteccion",
    },
    {
      name: "Palets y Cajas de Plástico",
      slug: "paletsCajas",
    },
    {
      name: "Material de Embajale",
      slug: "embalaje",
    },
  ];

  return (
    <div className='flex flex-col w-1/4 mx-4'>
      <h1 className='text-xl p-4'>Nuestros Productos</h1>
      <hr className='border-secondary-light m-2 border-1 w-24 rounded-md' />
      {productsData &&
        productsData.map((element, index) => {
          return (
            <div key={index} className='flex flex-inline mt-3 text-sm'>
              <FaAngleRight className='mx-2' size={20} />
              <Link
                href={`/productos/${element.slug}`}
                className='cursor-pointer'
              >
                {element.name}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default ProductsFooter;
