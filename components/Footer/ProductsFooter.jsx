import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const ProductsFooter = () => {
  const productsData = [
    {
      name: "Embalaje Ecológico",
      slug: "ecologico",
    },
    {
      name: "Maquinaria",
      slug: "maquinaria",
    },
    {
      name: "Material de Embajale",
      slug: "embalaje",
    },
    // {
    //   name: "Nada",
    //   slug: "rellenoProteccion",
    // },
    // {
    //   name: "Nada",
    //   slug: "paletsCajas",
    // },
    // {
    //   name: "Nada",
    //   slug: "embalaje",
    // },
  ];

  return (
    <div className='flex flex-col w-full md:w-1/4 mx-4'>
      <h1 className='text-xl p-2 md:p-4'>Nuestros Productos</h1>
      <hr className='border-secondary-light m-0 md:m-2 border-1 w-3/4 md:w-24 rounded-md' />
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
