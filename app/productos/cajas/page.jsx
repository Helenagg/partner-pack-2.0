import Cover from "@/components/Cover/Cover";
import React from "react";
import CardProductos from "@/components/Card/CardProductos";

const pageCajas = () => {
  const cardData = [
    {
      url: "/assets/img/cajas/caja-carton-movil.webp",
      nameCaja: "Caja carton",
      width: "1024",
      height: "576",
      slug: "/productos/cajas/cajas-carton",
      textSlug: "Ver Producto"
    },
    {
      url: "/assets/img/cajas/caja-portatil.webp",
      nameCaja: "Caja carton",
      width: "1024",
      height: "576",
      slug: "/productos/cajas/cajas-carton",
      textSlug: "Ver Producto"
    },
    {
      url: "/assets/img/cajas/cajas-exposicion.webp",
      nameCaja: "Caja carton",
      width: "742",
      height: "576",
      slug: "/productos/cajas/cajas-carton",
      textSlug: "Ver Producto"
    },
    {
      url: "/assets/img/cajas/caja-carton-movil.webp",
      nameCaja: "Caja carton",
      width: "1023",
      height: "576",
      slug: "/productos/cajas/cajas-carton",
      textSlug: "Ver Producto"
    },
    {
      url: "/assets/img/cajas/caja-portatil.webp",
      nameCaja: "Caja carton",
      width: "1024",
      height: "576",
      slug: "/productos/cajas/cajas-carton",
      textSlug: "Ver Producto"
    },
    {
      url: "/assets/img/cajas/cajas-exposicion.webp",
      nameCaja: "Caja carton",
      width: "709",
      height: "576",
      slug: "/productos/cajas/cajas-carton",
      textSlug: "Ver Producto"
    },
  ];
  return (
    <div className="mt-28">
      <Cover urlCover='/assets/img/cover/cajas.webp' />
      <div className='container mx-auto px-5 py-8'>
        <div className='text-center mb-6'>
          <h1 className='text-2xl font-bold'>Cajas</h1>
          <div className='flex justify-center'>
            <hr className='border-secondary-light m-2 border-1 w-24 rounded-md' />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          {cardData &&
            cardData.map((element, index) => {
              return (
                <div key={index} className='text-center mx-3 my-3'>
                  <CardProductos
                    urlCard={element.url}
                    alt={element.nameCaja}
                    name={element.nameCaja}
                    width={element.width}
                    height={element.height}
                    slug={element.slug}
                    textSlug={element.textSlug}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default pageCajas;
