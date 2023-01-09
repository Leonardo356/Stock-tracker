import React, { useEffect, useState } from "react";

interface EditProps {
    color: string,
};

const UnitsEditSection: React.FC<EditProps> = ({ color }) => {

    const [colorBg, setColorBg] = useState<string>(''); 

    useEffect(() => {
        color === 'bg-white'
        ? setColorBg('hover:bg-black/20 bg-black/10 blackTextInp')
        : setColorBg('hover:bg-white/30 bg-alphaWhite');
     }, [color]);

     const closeEditSection: React.MouseEventHandler = (event) => {
        const unitsOnDOM = Array.from(document.querySelectorAll('.unitOnDOM'));
        const targetButton = event.currentTarget as HTMLElement;
      
        unitsOnDOM.forEach(unit => {
          if (unit.contains(targetButton)) {
            const editUnitsNameSection = unit.querySelector('.editUnitsNameSection');
            if (editUnitsNameSection) editUnitsNameSection.classList.add('hidden');
          };
        });
      };

    return(
        <>
          <div className="
          w-full
          h-max
          editUnitsNameSection
          flex
          flex-col
          hidden
          duration-[200ms]
          py-[1.5rem]
          gap-[1rem]
          ">
            <input
            name="editUnitName"
            placeholder="Enter unit name..."
            className={`
            ${colorBg}
            h-[3rem]
            rounded-[.5rem]
            `}
            />

            <div className="flex w-full gap-[1rem] items-center leading-[0px] font-normal h-[3rem]">
                <button className={`rounded-[.5rem] w-full ${colorBg} h-[2rem] px-[1rem]`}>Edit</button>
                <button
                onClick={closeEditSection} 
                className={`ml-auto rounded-[.5rem] ${colorBg} w-full h-[2rem] px-[1rem]`}>Cancel</button>
            </div>
          </div>
        </>
    );
};

export default UnitsEditSection;