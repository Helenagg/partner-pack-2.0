import Cover from "@/components/Cover/Cover";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div>
        <Cover urlCover='/assets/img/cover/conocenos.webp' />
      </div>
      <div className='container py-5'>
        <div class='lg:flex lg:gap-5'>
          <div class='lg:w-1/2'>
            <div className='relative h-96 lg:min-h-[400px]'>
              <Image
                src='/assets/img/cover/conocenos.webp'
                width={1980}
                height={980}
                alt='Conocenos'
              />
            </div>
            <div className='my-5 py-5 lg:py-0'>
              <div className='bg-primary p-5'>
                <h1>Por qué Partner Pack</h1>
                <p className='mb-4'>
                  Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum
                  et, tempor sit sit diam amet et eos labore. Clita erat ipsum
                  et lorem et sit, sed stet no labore lorem sit. Sanctus clita
                  duo justo et tempor magna dolore erat amet
                </p>
                <p className='mb-4'>
                  Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum
                  et, tempor sit sit diam amet et eos labore. Clita erat ipsum
                  et lorem et sit, sed stet no labore lorem sit. Sanctus clita
                  duo justo et tempor magna dolore erat amet
                </p>
                <p className='mb-4'>
                  Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum
                  et, tempor sit sit diam amet et eos labore. Clita erat ipsum
                  et lorem et sit, sed stet no labore lorem sit. Sanctus clita
                  duo justo et tempor magna dolore erat amet
                </p>
                <p className='mb-4'>
                  Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum
                  et, tempor sit sit diam amet et eos labore. Clita erat ipsum
                  et lorem et sit, sed stet no labore lorem sit. Sanctus clita
                  duo justo et tempor magna dolore erat amet
                </p>
                <a href='#' className='btn-white'>
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
