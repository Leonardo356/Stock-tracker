import React, { useState } from "react";

interface EditBtnProps {
    hoverColor: string,
 };
 
 const EditUnitBtn: React.FC<EditBtnProps> = ({ hoverColor }) => {

    const [displayInstruction, setDisplayInstruction] = useState<string>('opacity-[0]');

    const mouseOverBtn: React.MouseEventHandler = (e) => {
       e.type === 'mouseover'
       ? setDisplayInstruction('opacity-[1]')
       : setDisplayInstruction('opacity-[0]');
    };

    const editOnClick: React.MouseEventHandler = (event) => {
      const unitsOnDOM = Array.from(document.querySelectorAll('.unitOnDOM'));
      const targetButton = event.currentTarget as HTMLElement;
    
      unitsOnDOM.forEach(unit => {
        if (unit.contains(targetButton)) {
          const editUnitsNameSection = unit.querySelector('.editUnitsNameSection');
          if (editUnitsNameSection) editUnitsNameSection.classList.remove('hidden');
        };
      });
    };

    return(
      <>
        <div 
        onClick={editOnClick}
        onMouseOver={mouseOverBtn}
        onMouseLeave={mouseOverBtn}
        className={`
        absolute
        top-[.5rem]
        right-[.5rem]
        w-max
        h-max
        p-[.5rem]
        rounded-[.5rem]
        ${hoverColor}
        `}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
          </svg>
         <div className={`${displayInstruction} duration-[200ms]`}><EditInstructions /></div>
        </div>
      </>
    );
};
 
 const EditInstructions: React.FC = () => {
   return(
     <div className="
          absolute
          pointer-events-none
          bottom-[3rem]
          rounded-[.5rem]
          left-[50%]
          -translate-x-[50%]
          bg-white
          w-max
          h-max
          px-[1rem]
          shadow-sh2
          text-black
          font-normal
          ">
            <div className="
            border-transparent 
            absolute 
            top-[100%] 
            left-[50%] 
            -translate-x-[50%] 
            border-[10px] 
            w-[1rem] 
            h-[1rem] 
            border-t-white"
            ></div>
             <p>Edit unit name</p>
          </div>
   );
};

export default EditUnitBtn;