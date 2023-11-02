import React from "react";
import Image from "next/image";
import Link from "next/link";

const Conocenos = () => {
  return (
    <>
      <div className='container mx-auto px-5 py-8'>
        <div className='text-center mb-6'>
          <h1 className='text-2xl font-bold'>Conoce Partner Pack</h1>
          <div className="flex justify-center">
            <hr className="border-secondary-light m-2 border-1 w-24 rounded-md" />
          </div>
        </div>
        <div className='lg:flex'>
          <div className='w-full flex flex-col md:w-2/3 md:relative rounded-lg'>
            <Image
              src='/assets/img/cover/conocenos.webp'
              width={1980}
              height={980}
              alt='Conocenos'
              className='w-full order-last mt-6 md:mt-0 rounded-lg'
            />
            <div className='order-first md:absolute md:left-40 top-6 md:top-10 bg-primary/70 p-5 md:transform md:translate-x-2/3 rounded-lg'>
              <h1 className="text-bold text-2xl text-white">Por qué Partner Pack</h1>
              <p className='my-4 text-lg text-white'>¿Quieres retarnos?</p>
              <p className='my-4 text-white'>
                Somos una empresa jóven y dinámica, formada por profesionales
                con muchos años de experiencia en proyectos de embalaje. Ponemos
                el foco en la aportación de soluciones a la medida de las
                necesidades de nuestros clientes. Como distribuidor, nuestro
                principal valor añadido siempre es el servicio. (Los pilares
                principales de la empresa son: 1º SERVICIO, 2º SERVICIO, 3º
                SERVICIO y por último, pero no por ello menos importante, 4º
                SERVICIO.) Vivimos y trabajamos cada problemática como si fuera
                propia, nos ponemos en los zapatos del cliente y miramos por sus
                intereses para conseguir los objetivos que nos marquen. Dichos
                objetivos suelen ser aumento de productividad, mejora de
                estabilidad de cargas, reducción de la huella de carbono,
                reducción de costes… Nos encantan los retos así que, por favor,
                ¡retanos! (Me prestas tus zapatos y luego los devuelvo).
              </p>
              <div className='mt-2'>
              <Link href='/contacto' className='btn-white mx-40 mt-6'>
                Contacto
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conocenos;
