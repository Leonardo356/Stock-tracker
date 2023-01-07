import React from "react";

const SalesSection: React.FC = () => {
    return(
        <>
          <div className="
          w-full
          h-max
          flex
          flex-col
          gap-[1rem]
          ">
            <div className="mb-[1rem]">Sales:</div>

            <Sales
            name="Day"
            amount="200"
            />
            <Sales
            name="Month"
            amount="400"
            />
            <Sales
            name="Year"
            amount="1000"
            />
          </div>
        </>
    );
};

interface SalesProps {
  name: string,
  amount: string,
};

const Sales: React.FC<SalesProps> = ({ name, amount }) => {
  return(
    <>
      <div className="
      w-[40rem]
      h-[4rem]
      bg-white
      rounded-[1rem]
      shadow-sh2
      flex
      items-center
      px-[1rem]
      ">
        <div className="mr-auto">{name}</div>
        <div>{amount} Ron</div>
      </div>
    </>
  );
};

export default SalesSection;