import React from "react";

const LogInPage: React.FC = () => {
    return(
        <>
           <div className="
           w-screen
           h-screen
           bg-gradient-to-bl
           from-navy-100
           to-navy-200
           flex
           justify-center
           items-center
           ">

              <div className="
              absolute
              w-[55%]
              h-[60%]
              ">

              <div className="
              w-[16vmax] 
              h-[16vmax] 
              left-0
              bottom-0
              -translate-x-[40%]
              translate-y-[40%]
              absolute 
              rounded-full 
              bg-blue
              shadow-sh3
              "></div>

              <div className="
              w-[19vmax] 
              h-[19vmax] 
              top-0
              right-0
              translate-x-[40%]
              -translate-y-[40%]
              absolute 
              rounded-full
              bg-green
              shadow-sh3
              "></div>


              </div>

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
                    <h1 className="font-bold"><span className="text-green">S</span>-trackr.</h1>
                    <p className="text-[1.25vmax] w-full flex justify-center mt-auto">The answer to all your storage tracking needs.</p>
                 </div>
                 <div className="w-full bg-white/10 h-full"></div>
              </div>
           </div>
        </>
    );
};

export default LogInPage;