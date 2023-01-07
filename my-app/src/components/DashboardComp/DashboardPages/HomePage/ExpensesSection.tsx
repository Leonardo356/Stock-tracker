import React from "react";

const ExpensesSection: React.FC = () => {
    return(
        <>
          <div className="
          w-full
          h-max
          flex
          flex-col
          gap-[1rem]
          ">
            <div className="mb-[1rem]">Expenses:</div>
            <Expenses
            name="Day"
            amount="200"
            />
            <Expenses
            name="Month"
            amount="400"
            />
            <Expenses
            name="Year"
            amount="1000"
            />
          </div>
        </>
    );
};

interface ExpensesProps {
  name: string,
  amount: string,
};

const Expenses: React.FC<ExpensesProps> = ({ name, amount }) => {
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

export default ExpensesSection;