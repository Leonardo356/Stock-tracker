import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const LogInContainer: React.FC = () => {
    return(
        <>
           <div className="
              w-[55%]
              h-[60%]
              bg-white/30
              rounded-[1rem]
              shadow-sh1
              backdrop-blur-xl
              flex
              overflow-hidden
              ">
                <LeftSection />
                <RightSection />
            </div>
        </>
    );
};

export default LogInContainer;