import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const CardProductos = (props) => {
  return (
    <div className='max-w-sm rounded-lg overflow-hidden shadow-lg shadow-slate-700'>
      <div className='relative'>
        <div className='aspect-w-16 aspect-h-9'>
          <Image
            src={props.urlCard}
            alt={props.alt}
            width={props.width}
            height={props.height}
            className='w-full h-64'
          />
        </div>

        <div className='absolute top-0 left-0 w-full h-full bg-primary opacity-10'></div>
      </div>
      <div className='px-6 py-4 bg-primary/50'>
        <div className='font-bold text-lg mb-2'>{props.name}</div>
        <div className=''>
          <p className='text-sm mb-2'>{props.content}</p>
        </div>
        <Link
          href={props.slug}
          className='text-gray-700 font-bold text-base flex justify-center'
        >
          {props.textSlug}
          <AiOutlineArrowRight className='mx-1 mt-1' />
        </Link>
      </div>
    </div>
  );
};

export default CardProductos;
