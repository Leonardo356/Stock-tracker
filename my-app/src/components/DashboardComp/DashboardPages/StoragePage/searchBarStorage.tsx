import React from "react";

const SearchBarStorage: React.FC = () => {
    return(
        <>
           <div className="
           w-full
           h-max
           rounded-[1rem]
           shadow-sh2
           bg-white
           flex
           py-[.5rem]
           px-[1rem]
           gap-[1rem]
           ">
             <div className="w-max h-max"><SearchIcon /></div>
             <div className="w-full h-[3rem]"><SearchInput /></div>
           </div>
        </>
    );
};

const SearchIcon: React.FC = () => {
    return(
        <>
           <div className="
             w-[3rem]
             h-[3rem] 
             rounded-[1rem]
             bg-navy-100
             flex
             justify-center
             items-center
             ">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </div>
        </>
    );
};

const SearchInput: React.FC = () => {
    return(
        <>
            <input
            className="w-full h-full text-[1.2rem] blackTextInp"
            placeholder="Search items in storage..."
            />
        </>
    );
};

export default SearchBarStorage;