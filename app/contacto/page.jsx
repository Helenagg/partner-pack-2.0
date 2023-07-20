import Cover from "@/components/Cover/Cover";
import React from "react";
import Contacto from "@/components/Contacto/Contacto";

const PageContacto = () => {
  return (
    <div>
      <div>
        <Cover urlCover='/assets/img/cover/contacto.webp' />
      </div>
      <Contacto />
    </div>
  );
};

export default PageContacto;
