import React from "react";

const CapacitySection: React.FC = () => {
    return(
        <>
          <div className="
          w-full
          h-max
          flex
          flex-col
          gap-[1rem]
          ">
            <div>Capacity:</div>
            <UnitsContainer />
            <CapacityBar />
          </div>
        </>
    );
};

const UnitsContainer: React.FC = () => {
   return(
     <>
        <div className="flex gap-[2rem] w-full h-max">
          <Unit 
          bgColor="bg-gradient-to-r from-navy-100 to-navy-200"
          textColor="text-white" 
          unitName="Storage"
          />
          <Unit 
          bgColor="bg-white"
          textColor="text-navy-100" 
          unitName="Store1"
          />
          <Unit 
          bgColor="bg-white"
          textColor="text-navy-100" 
          unitName="Store2"
          />
        </div>
     </>
   );
};

interface UnitProps {
   bgColor: string,
   textColor: string,
   unitName: string,
};

const Unit: React.FC<UnitProps> = ({ bgColor, textColor, unitName }) => {
     return(
        <>
           <div className={`
           w-[20rem]
           h-[15rem]
           ${bgColor}
           ${textColor}
           rounded-[1rem]
           shadow-sh2
           p-[1rem]
           flex
           flex-col
           `}>
             <div className="text-[2vmax]">{unitName}</div>
             <div className="mt-auto w-full flex">
                <p>Items in:</p>
                <p className="ml-auto">30</p>
             </div>
           </div>
        </>
     );
};

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
         bg-white
         overflow-hidden
         leading-none
         ">
          <div className="w-[30%] left-0 absolute bg-navy-100 h-full"></div>
          <p className="text-black z-[200]">
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
            shadow-sh2
            ">
               Buy more
            </button>
         </div>
       </div>
     </>
   );
};

export default CapacitySection;