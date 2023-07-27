import Cover from "@/components/Cover/Cover";
import React from "react";
import Sostenibilidad from "@/components/Sostenibilidad/Sostenibilidad";

const PageSostenibilidad = () => {
  return (
    <div>
      <div>
        <Cover urlCover='/assets/img/cover/sostenibilidad.webp' />
      </div>
      <Sostenibilidad />
    </div>
  );
};

export default PageSostenibilidad;