import Cover from "@/components/Cover/Cover";
import React from "react";
import Conocenos from "@/components/Conocenos/Conocenos";

const pageConocenos = () => {
  return (
    <div>
      <div>
        <Cover urlCover='/assets/img/cover/conocenos.webp' />
      </div>
      <Conocenos />
    </div>
  );
};

export default pageConocenos;
