import React from "react";
import CardProductos from "@/components/Card/CardProductos";
import HomeContacto from "@/components/Home/HomeContacto";

const pageEmbalaje = () => {
  const cardData = [
    {
      url: "/assets/img/embalaje/papel-geami-relleno-proteccion.webp",
      nameCaja: "Papel geami para relleno y protección",
      width: "2000",
      height: "2000",
      slug: "/contacto",
      textSlug: "Contacto",
      content: "",
    },
    {
      url: "/assets/img/embalaje/papel-geami.webp",
      nameCaja: "Papel geami para relleno y protección",
      width: "559",
      height: "439",
      slug: "/contacto",
      textSlug: "Contacto",
      content: "",
    },
    {
      url: "/assets/img/embalaje/cajas-envios.webp",
      nameCaja: "Cajas de cartón para todo tipo de envios",
      width: "568",
      height: "450",
      slug: "/contacto",
      textSlug: "Contacto",
      content: "",
    },
    {
      url: "/assets/img/embalaje/proteccion-monomaterial.webp",
      nameCaja: "Cajas de carton para protección monomaterial",
      width: "1250",
      height: "400",
      slug: "/contacto",
      textSlug: "Contacto",
      content: "",
    },
    {
      url: "/assets/img/embalaje/relleno-papel-envios.webp",
      nameCaja: "Rellenos de papel para envios",
      width: "568",
      height: "570",
      slug: "/contacto",
      textSlug: "Contacto",
      content: "",
    },
    {
      url: "/assets/img/embalaje/film-estirable.webp",
      nameCaja: "Film estirable varios colores y tamaños",
      width: "444",
      height: "249",
      slug: "/contacto",
      textSlug: "Contacto",
      content: "",
    },
    {
      url: "/assets/img/embalaje/kraft-paper-tape-mockup.webp",
      nameCaja: "Cinta de embalar de papel reciclado",
      width: "2000",
      height: "2000",
      slug: "/contacto",
      textSlug: "Contacto",
      content: "",
    },
    {
      url: "/assets/img/embalaje/bobinaburbujarellenoyproteccion.webp",
      nameCaja: "Bobina burbuja para relleno y protección",
      width: "225",
      height: "225",
      slug: "/contacto",
      textSlug: "Lo quiero",
      content: "",
    },
    {
      url: "/assets/img/embalaje/bolsaairerellenoyproteccion.webp",
      nameCaja: "Bolsa de aire para relleno y protección",
      width: "1000",
      height: "863",
      slug: "/contacto",
      textSlug: "Contacto",
      content: "",
    },
  ];

  return (
    <div className='container mt-28 mx-auto px-5 py-8'>
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
                  // content={element.content}
                  textSlug={element.textSlug}
                  slug={element.slug}
                />
              </div>
            );
          })}
      </div>
      <div className='text-center mt-2 mb-6'>
        <HomeContacto />
      </div>
    </div>
  );
};

export default pageEmbalaje;
