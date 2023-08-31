import Link from "next/link";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ButtonInit = () => {
  return (
    <div className='fixed bottom-4 right-4'>
      <Link href='#menu'>
        <button className='rounded border border-primary p-3 bg-white'>
          <AiOutlineArrowUp className='text-primary' size={18} />
        </button>
      </Link>
    </div>
  );
};

export default ButtonInit;
