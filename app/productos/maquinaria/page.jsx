import React from "react";
import CardProductos from "@/components/Card/CardProductos";
import HomeContacto from "@/components/Home/HomeContacto";

const pageEmbalaje = () => {
  const cardData = [
    {
      url: "/assets/img/maquinaria/copaletizador.webp",
      nameCaja: "Copaletizador",
      width: "2048",
      height: "1365",
      slug: "/contacto",
      textSlug: "Contacto",
      content:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    // {
    //   url: "/assets/img/maquinaria/robot-copalletizer.webp",
    //   nameCaja: "Robot copalletizer",
    //   width: "480",
    //   height: "270",
    //   slug: "/contacto",
    //   textSlug: "Contacto",
    //   content:
    //     "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    // },
    // {
    //   url: "/assets/img/maquinaria/programa-copaletizador.webp",
    //   nameCaja: "Programa Copaletizador",
    //   width: "2048",
    //   height: "1365",
    //   slug: "/contacto",
    //   textSlug: "Contacto",
    //   content:
    //     "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    // },
    {
      url: "/assets/img/maquinaria/formadora-de-cajas.webp",
      nameCaja: "Formadora de cajas",
      width: "742",
      height: "576",
      slug: "/contacto",
      textSlug: "Contacto",
      content:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    // {
    //   url: "/assets/img/maquinaria/maschinen-stretchfolie.webp",
    //   nameCaja: "Stretchfolie",
    //   width: "626",
    //   height: "388",
    //   slug: "/contacto",
    //   textSlug: "Contacto",
    //   content:
    //     "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    // },
    // {
    //   url: "/assets/img/maquinaria/pinza-film.webp",
    //   nameCaja: "Pinza film",
    //   width: "516",
    //   height: "344",
    //   slug: "/contacto",
    //   textSlug: "Contacto",
    //   content:
    //     "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    // },
    {
      url: "/assets/img/maquinaria/precintadora.webp",
      nameCaja: "Precintadora",
      width: "2064",
      height: "1376",
      slug: "/contacto",
      textSlug: "Contacto",
      content:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      url: "/assets/img/maquinaria/enfardadora.automatica.webp",
      nameCaja: "Enfardadora automática",
      width: "2064",
      height: "1376",
      slug: "/contacto",
      textSlug: "Contacto",
      content:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },

    // {
    //   url: "/assets/img/maquinaria/prueba-de-film.webp",
    //   nameCaja: "Prueba de film",
    //   width: "275",
    //   height: "183",
    //   slug: "/contacto",
    //   textSlug: "Contacto",
    //   content:
    //     "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    // },
    {
      url: "/assets/img/maquinaria/enfardadora-semiautomatica.webp",
      nameCaja: "Enfardadora semiautomática",
      width: "2064",
      height: "1375",
      slug: "/contacto",
      textSlug: "Contacto",
      content:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      url: "/assets/img/maquinaria/retractiladora.webp",
      nameCaja: "Retractiladora",
      width: "450",
      height: "450",
      slug: "/contacto",
      textSlug: "Contacto",
      content:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
  ];

  return (
    <div className='container mt-28 mx-auto px-5 py-8'>
      <div className='text-center mb-6'>
        <h1 className='text-2xl font-bold'>Maquinaria</h1>
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
      <HomeContacto />
    </div>
  );
};

export default pageEmbalaje;
