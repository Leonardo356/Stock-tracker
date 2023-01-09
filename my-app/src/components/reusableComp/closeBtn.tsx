import React, { MouseEventHandler, ReactEventHandler, useState } from "react";
import { CloseActionWindow } from "../../functions/functions";

interface CloseBtnProps {
    actionClass: string,
};

const CloseBtn: React.FC<CloseBtnProps> = ({ actionClass }) => {

    const [rotate, setRotate] = useState<string[]>(['rotate-[45deg]', '-rotate-[45deg]']);

    const hoverEffect: ReactEventHandler = (e) => {
        let evType = e.type;

        evType === 'mouseover'
        ? setRotate(['rotate-[0deg]', 'rotate-[0deg]'])
        : setRotate(['rotate-[45deg]', '-rotate-[45deg]'])
    };

    const CloseFunction: MouseEventHandler = (e) => {
        actionClass === 'createStore' 
        ? CloseActionWindow(e, 'createStorePageContainer', 'createStoreWindowContainer')
        : alert('no function yet')
    };

    return(
        <>
           <div
           onClick={CloseFunction}
           onMouseOver={hoverEffect}
           onMouseLeave={hoverEffect} 
           className="
           w-[1.5rem]
           h-[1.5rem]
           flex
           justify-center
           items-center
           absolute
           top-[1rem]
           right-[1rem]
           cursor-pointer
           ">
             <div className={`w-[1.5rem] pointer-events-none duration-[200ms] h-[.1rem] absolute ${rotate[0]} bg-black`}></div>
             <div className={`w-[1.5rem] pointer-events-none duration-[200ms] h-[.1rem] absolute ${rotate[1]} bg-black`}></div>
           </div>
        </>
    );
};

export default CloseBtn;