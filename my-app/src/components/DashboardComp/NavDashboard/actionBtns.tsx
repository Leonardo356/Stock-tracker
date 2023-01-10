import React, { ReactEventHandler } from "react";
import { DisplayActionWindow } from "../../../functions/functions";

interface ActionBtnsProps {
    iconUrl: string,
    navBtnName: string,
};

const ActionBtns: React.FC<ActionBtnsProps> = ({ iconUrl, navBtnName }) => {

    const displayFunction: ReactEventHandler = () => {
        navBtnName === 'Create store'
        ? DisplayActionWindow('createStorePageContainer', 'createStoreWindowContainer')
        : navBtnName === 'Add items'
        ? DisplayActionWindow('createItemPageContainer', 'createItemWindowContainer')
        : alert('no function yet')
    };

    return(
        <>
           <div 
           onClick={displayFunction}
           className={`
           w-full
           h-max
           flex
           leading-none
           items-center
           gap-[1rem]
           text-[1.4rem]
           p-[1rem]
           hover:bg-babyBlue/30
           cursor-pointer
           `}>
            <img src={iconUrl} alt='navigation button svg' ></img>
            <p className="mt-[.2rem]">{navBtnName}</p>
           </div>
        </>
    );
};

export default ActionBtns;