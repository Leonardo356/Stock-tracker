import React from "react";

interface ActionBtnsProps {
    iconUrl: string,
    navBtnName: string,
};

const ActionBtns: React.FC<ActionBtnsProps> = ({ iconUrl, navBtnName }) => {
    return(
        <>
           <div className={`
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