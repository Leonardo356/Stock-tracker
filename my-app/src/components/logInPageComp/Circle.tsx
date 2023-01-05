import React from "react";

const CirclesContainer: React.FC = () => {
    return(
        <>
           <div className="
              absolute
              w-[55%]
              h-[60%]
              ">
                <Circle
                 translateX="-translate-x-[40%]"
                 translateY="translate-y-[40%]"
                 posX="left-0"
                 posY="bottom-0"
                 color="bg-blue"
                 width="w-[16vmax]"
                 height="h-[16vmax]"
                />

                 <Circle
                 translateX="translate-x-[40%]"
                 translateY="-translate-y-[40%]"
                 posX="right-0"
                 posY="top-0"
                 color="bg-green"
                 width="w-[19vmax]"
                 height="h-[19vmax]"
                />
            </div>
        </>
    );
};

interface CircleProps {
    translateX: string,
    translateY: string,
    posX: string,
    posY: string,
    color: string,
    width: string,
    height: string,
};

const Circle: React.FC<CircleProps> = ({
    translateX,
    translateY,
    posX,
    posY,
    color,
    width,
    height,
}) => {
    return(
        <>
           <div className={`
           absolute 
           rounded-full 
           shadow-sh3
           ${translateX}
           ${translateY}
           ${posX}
           ${posY}
           ${color}
           ${width}
           ${height}
           `}>
           </div>
        </>
    );
};

export default CirclesContainer;