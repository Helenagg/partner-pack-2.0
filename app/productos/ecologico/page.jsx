import React from "react";
import CardProductos from "@/components/Card/CardProductos";
import Cover from "@/components/Cover/Cover";
import Sostenibilidad from "@/components/Sostenibilidad/Sostenibilidad";
import Formulario from "@/components/Home/Formulario";

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
    <div className='container mt-28'>
      <div>
        <Cover urlCover='/assets/img/ecologico/packaging-tape-recyclable-box.webp' />
      </div>

      <Sostenibilidad />
      <div className='flex justify-center'>
        <hr className='border-secondary-light m-2 border-1 w-24 rounded-md' />
      </div>
      <div className='text-center mt-2 mb-6 mx-auto px-5 py-8'>
        <Formulario />
      </div>
    </div>
  );
};

export default pageEmbalaje;
