import React from "react";
import Image from "next/image";
import FormContacto from "./FormContacto";
import MapContacto from "./MapContacto";
import Link from "next/link";

const Contacto = () => {
  const contactData = [
    {
      name: "Direccion",
      urlImage: "/assets/img/contacto/direccion_partner.webp",
      link: "https://goo.gl/maps/2V6zaA55KFXeTDTE6",
      content: `<p>Calle Hierro 71,</p><p>28850 Torrejón de Ardoz</p>`,
    },
    {
      name: "Teléfonos de contacto",
      urlImage: "/assets/img/contacto/telefono_partner.webp",
      link: "tel:+34 672226122",
      content: "<p>672 226 122</p><p>918 281 264</p>",
    },
    {
      name: "Email",
      urlImage: "/assets/img/contacto/email_partner.webp",
      link: "mailto:administracion@partnerpack.es",
      content: `<p className='text-sm'>administracion@partnerpack.es</p>`,
    },
  ];
  return (
    <div className='container mx-auto px-5 py-8'>
      <div className='text-center mb-6'>
        <h1 className='text-2xl font-bold'>Contacta con nosotros</h1>
        <div className='flex justify-center'>
          <hr className='border-secondary-light m-2 border-1 w-24 rounded-md' />
        </div>
      </div>
      <div className='flex flex-col md:flex-row'>
        {contactData &&
          contactData.map((element, index) => {
            return (
              <div
                key={index}
                className='flex flex-cols-1 w-full h-full md:w-1/3 mx-2 mt-10 md:mt-0 relative items-center justify-center shadow-black'
              >
                <div className='max-w-sm  rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300'>
                  <div className='relative h-60'>
                    <Image
                      src={element.urlImage}
                      width={1042}
                      height={1038}
                      alt={element.name}
                    />
                <div className='absolute top-0 left-0 w-full h-full bg-secondary opacity-70'></div>
                  </div>
                </div>
                <Link
                  href={element.link}
                  target='_blank'
                  className='absolute text-white font-bold text-center z-50 text-xl block justify-center'
                >
                  <div dangerouslySetInnerHTML={{ __html: element.content }} />
                </Link>
              </div>
            );
          })}
      </div>
      <MapContacto />
      <FormContacto />
    </div>
  );
};

export default Contacto;
