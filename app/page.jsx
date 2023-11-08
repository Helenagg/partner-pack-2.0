import React from "react";
import Cover from "@/components/Cover/Cover";
import Informacion from "@/components/Home/Informacion";
import Productos from "@/components/Productos/Productos";
import Formulario from "@/components/Home/Formulario";
import HomeContacto from "@/components/Home/HomeContacto";
import ButtonInit from "@/components/ButtonInit/ButtonInit";

const Home = () => {
  return (
    <main className='mt-28' id="init">
      <Cover urlCover='/assets/img/cover/banderas.webp' />
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
