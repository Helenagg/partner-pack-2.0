import React from "react";
import Cover from "@/components/Cover/Cover";
import Informacion from "@/components/Home/Informacion";
import Productos from "@/components/Productos/Productos";
import Formulario from "@/components/Home/Formulario";
import HomeContacto from "@/components/Home/HomeContacto";
import ButtonInit from "@/components/ButtonInit/ButtonInit";
import Actualidad from "./actualidad/page";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <main className='mt-28' id='init'>
      <Cover urlCover='/assets/img/cover/banderas.webp' />
      <div className='container py-5 mx-auto flex flex-col justify-center rounded-lg w-full'>
        <div className='mx-4 p-10 rounded-lg text-center'>
          <h1 className='text-xl font-bold text-center mb-2'>Ven a visitarnos a la feria EMPACK MADRID</h1>
          <Link
            href='https://register.visitcloud.com/survey/0t7cmgfdt00un?actioncode=NTWO000063EFQ&partner-contact=3jf2r7qwqyk6q'
            className='text-secondary text-center'
            target='_blanc'
          >
            ¡Descarga nuestra invitación aquí!
          </Link>
          <Image
            src='/assets/img/cover/feria.webp'
            width={1200}
            height={628}
            alt='Feria'
            className='rounded-lg mt-4'
          />
        </div>
      </div>
      <Informacion />
      <Productos />
      <div className='container mx-auto px-5 py-8'>
        <div className='text-center mb-2'>
          <div className='flex justify-center'>
            <hr className='border-secondary-light mb-4 border-1 w-24 rounded-md' />
          </div>
          <Formulario />
        </div>
      </div>
      <HomeContacto />
      <ButtonInit />
    </main>
  );
};

export default Home;
