import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const CardProductos = (props) => {
  return (
    <div className='max-w-sm rounded-lg overflow-hidden shadow-lg'>
      <div className="relative">
      <Image
        src={props.urlCard}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className='w-full'
      />
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-50"></div>
      </div>
      <div className='px-6 py-4 bg-primary/50'>
        <div className='font-bold text-xk mb-2'>{props.name}</div>
        <Link
          href={`/productos/${props.slug}`}
          className='text-gray-700 text-base flex justify-center'
        >
          Ver Producto
          <AiOutlineArrowRight className='mx-4 mt-1' />
        </Link>
      </div>
    </div>
  );
};

export default CardProductos;
