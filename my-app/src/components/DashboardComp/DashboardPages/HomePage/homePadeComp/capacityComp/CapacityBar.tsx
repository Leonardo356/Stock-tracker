import React from "react";

const CapacityBar: React.FC = () => {
    return(
      <>
        <div className="
        w-full 
        h-max
        flex
        p-[1rem]
        gap-[1rem]
        ">
          <div className="
          w-full 
          h-[3rem] 
          flex
          shadow-sh2
          rounded-[1rem]
          justify-center
          items-center
          relative
          bg-blue
          overflow-hidden
          leading-[0px]
          ">
           <div className="w-[30%] left-0 absolute bg-navy-100 h-full"></div>
           <p className="text-white z-[200]">
             Capacity:  <span>90</span> / 100
           </p>
          </div>
 
          <div className="w-max">
             <button className="
             w-[10rem] 
             h-[3rem]
             bg-navy-100
             rounded-[1rem]
             text-white
             leading-[0px]
             shadow-sh2
             ">
                Buy more
             </button>
          </div>
        </div>
      </>
    );
};

export default CapacityBar;