import React from "react";
import CardProductos from "@/components/Card/CardProductos";

const pageEmbalaje = () => {
  const cardData = [
    {
      url: "/assets/img/cajas/caja-carton-movil.webp",
      nameCaja: "Caja carton",
      width: "1024",
      height: "576",
      slug: "/contacto",
      textSlug: "Contacto",
      content:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      url: "/assets/img/cajas/caja-portatil.webp",
      nameCaja: "Caja carton",
      width: "1024",
      height: "576",
      slug: "/contacto",
      textSlug: "Contacto",
      content:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      url: "/assets/img/cajas/cajas-exposicion.webp",
      nameCaja: "Caja carton",
      width: "742",
      height: "576",
      slug: "/contacto",
      textSlug: "Contacto",
      content:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      url: "/assets/img/cajas/caja-carton-movil.webp",
      nameCaja: "Caja carton",
      width: "1023",
      height: "576",
      slug: "/contacto",
      textSlug: "Contacto",
      content:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      url: "/assets/img/cajas/caja-portatil.webp",
      nameCaja: "Caja carton",
      width: "1024",
      height: "576",
      slug: "/contacto",
      textSlug: "Contacto",
      content:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      url: "/assets/img/cajas/cajas-exposicion.webp",
      nameCaja: "Caja carton",
      width: "709",
      height: "576",
      slug: "/contacto",
      textSlug: "Contacto",
      content:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
  ];

  return (
    <div className='container mx-auto px-5 py-8'>
      <div className='text-center mb-6'>
        <h1 className='text-2xl font-bold'>Material de Embalaje</h1>
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
                  content={element.content}
                  textSlug={element.textSlug}
                  slug={element.slug}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default pageEmbalaje;
