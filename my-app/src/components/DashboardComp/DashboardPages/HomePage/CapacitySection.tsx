import React from "react";
import CapacityBar from "./homePadeComp/capacityComp/CapacityBar";
import UnitsContainer from "./homePadeComp/capacityComp/Units";

const CapacitySection: React.FC = () => {
    return(
        <>
          <div className="
          w-full
          h-max
          flex
          flex-col
          gap-[1rem]
          ">
            <div>Capacity:</div>
            <UnitsContainer />
            <CapacityBar />
          </div>
        </>
    );
};

export default CapacitySection;