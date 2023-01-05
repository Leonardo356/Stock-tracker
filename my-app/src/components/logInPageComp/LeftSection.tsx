import React from "react";

const LeftSection: React.FC = () => {
    return(
        <>
            <div className="
             w-full 
             text-[6vmax] 
             h-full 
             text-white
             p-[1rem]
             leading-none
             flex
             flex-col
             ">
                <LeftSectionTitle />
                <LeftSectionParagraph />
            </div>
        </>
    );
};

const LeftSectionTitle: React.FC = () => {
    return(
        <>
          <h1 
          className="font-bold">
            <span 
            className="text-green">S</span>
            -trackr.
          </h1>
        </>
    );
};

const LeftSectionParagraph: React.FC = () => {
    return(
        <>
          <p 
           className="
           text-[1.25vmax] 
           w-full 
           flex 
           justify-center 
           mt-auto">
            The answer to all your storage tracking needs.
          </p>
        </>
    );
};

export default LeftSection;