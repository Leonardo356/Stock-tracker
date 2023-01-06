import React from "react";
import SearchBar from "./SearchBar";
import HomeContent from "./HomeContent";

const HomePage: React.FC = () => {
    return(
        <>
          <div className="
          w-[80%]
          h-full
          flex
          flex-col
          p-[2rem]
          gap-[1rem]
          relative
          text-white
          bg-gray
          ">
            <SearchBar /> 
            <HomeContent />
          </div>
        </>
    );
};

export default HomePage;