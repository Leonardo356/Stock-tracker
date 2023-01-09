import React from "react";

interface SubmitBtnProps {
    name: string,
};

const SubmitBtn: React.FC<SubmitBtnProps> = ({ 
    name
 }) => {
    return(
        <>
          <button className="
          w-max
          h-[3rem]
          bg-navy-100
          font-normal
          p-[1rem]
          rounded-[.5rem]
          leading-[0px]
          text-white
          opacity-[0.8]
          hover:opacity-[1]
          duration-[100ms]
          ">
            {name}
          </button>
        </>
    );
};

export default SubmitBtn;