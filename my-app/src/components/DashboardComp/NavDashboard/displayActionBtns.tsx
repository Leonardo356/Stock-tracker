import React, { ReactEventHandler } from "react";

interface DisplayActionBtnProps {
    svgUrl: string,
};

const DisplayActionBtn: React.FC<DisplayActionBtnProps> = ({ svgUrl }) => {

    let toggle = false;

    const actionBtnsOnFalse = (
        actionSvg: Element | null,
        actionBtnsContainer: Element | null,
        target: Element | null
    ) => {
        actionSvg?.classList.add('rotate-90');
        actionBtnsContainer?.classList.remove('scale-0');
        target?.classList.add('bg-babyBlue/30');
    };

    const actionBtnsOnTrue = (
        actionSvg: Element | null,
        actionBtnsContainer: Element | null,
        target: Element | null
    ) => {
        actionSvg?.classList.remove('rotate-90');
        actionBtnsContainer?.classList.add('scale-0');
        target?.classList.remove('bg-babyBlue/30');
    };

    const toggleActionBtns:ReactEventHandler = (e) => {
        let target = e.currentTarget as Element | null;
        let actionSvg = document.querySelector('.actionSvg');
        let actionBtnsContainer = document.querySelector('.actionBtnsContainer');

        !toggle
        ? actionBtnsOnFalse(actionSvg, actionBtnsContainer, target)
        : actionBtnsOnTrue(actionSvg, actionBtnsContainer, target);

        toggle = !toggle
    };

    return(
        <>
           <div 
           onClick={toggleActionBtns}
           className="
            w-full
            h-max
            cursor-pointer 
            p-[1rem] 
            gap-[1rem]
            text-[1.4rem]
            leading-none
            hover:bg-babyBlue/30
            flex
            ">
                <img 
                className="actionSvg" 
                src={svgUrl} 
                alt='actions svg' ></img>
                <div className="mt-[.2rem]">Actions</div>
            </div>
        </>
    );
};

export default DisplayActionBtn;

