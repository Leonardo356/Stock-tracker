import React from "react";
import SearchBarStorage from "./searchBarStorage";
import StorageItems from "./storageItems";

const StoragePage: React.FC = () => {
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
           bg-gray">
             <SearchBarStorage />
             <StorageItems />
          </div>
        </>
    );
};

export default StoragePage;