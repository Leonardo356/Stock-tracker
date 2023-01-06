import React from "react";
import CapacitySection from "./CapacitySection";
import SalesSection from "./SalesSection";
import ExpensesSection from "./ExpensesSection";

const HomeContent: React.FC = () => {
    return(
        <>
          <div className="
          w-full
          h-full
          flex
          flex-col
          gap-[2rem]
          p-[1rem]
          text-navy-100
          text-[1.2rem]
          font-bold
          ">
            <CapacitySection />
            <ExpensesSection />
            <SalesSection />
          </div>
        </>
    );
};

export default HomeContent;