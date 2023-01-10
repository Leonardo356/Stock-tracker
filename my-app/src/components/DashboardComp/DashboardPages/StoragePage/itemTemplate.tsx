import React from "react";

interface ItemTemplateProps {
    itemName: string,
    itemPrice: string,
    itemTVA: string,
    itemQTY: string,
    itemUM: string,
    itemID: string
}

const ItemTemplate: React.FC<ItemTemplateProps> = ({
    itemName,
    itemPrice,
    itemTVA,
    itemQTY,
    itemUM,
    itemID,
}) => {
    return(
        <>
          <div className="
          w-full
          h-max
          bg-white
          shadow-sh
          rounded-[1rem]
          font-normal
          p-[1rem]
          relative
          gap-[.5rem]
          text-[1.2rem]
          flex
          flex-col
          ">

            <EditItemButton />

            <ItemName
            itemName={itemName}
            />

           <div className="
           w-full
           h-max
           flex
           gap-[1rem]
           leading-none
           ">

              <ItemPrice
              itemPrice={itemPrice}
              />

              <ItemTVA
              itemTVA={itemTVA}
              />

              <ItemQuantity
              itemQuantity={itemQTY}
              itemUM={itemUM}
              />

              <ItemID
              itemID={itemID}
              />
           </div>

           <EditPrice />

          </div>
        </>
    );
};

interface ItemNameProps {
    itemName: string;
};

const ItemName: React.FC<ItemNameProps> = ({ itemName }) => {
    return(
        <>
          <h1 className="font-bold mb-[.5rem] text-[1.4rem]">{itemName}</h1>
        </>
    );
};

interface ItemPriceProps {
    itemPrice: string,
}

const ItemPrice: React.FC<ItemPriceProps> = ({ itemPrice}) => {
    return(
        <>
            <h1 className="w-full flex justify-center bg-black/5 rounded-[.5rem] h-max py-[.5rem]">
              Price:&nbsp;<span>{itemPrice}</span>&nbsp;Ron
           </h1>
        </>
    );
};

interface ItemTVAProps {
    itemTVA: string,
}

const ItemTVA: React.FC<ItemTVAProps> = ({ itemTVA }) => {
    return(
        <>
            <h1 className="w-full flex justify-center bg-black/5 rounded-[.5rem] h-max py-[.5rem]">
             TVA:&nbsp;<span>{itemTVA}&nbsp;%</span>
           </h1>
        </>
    );
};

interface ItemQuantityProps {
    itemQuantity: string,
    itemUM: string,
}

const ItemQuantity: React.FC<ItemQuantityProps> = ({ itemQuantity, itemUM }) => {
    return(
        <>
           <h1 className="w-full flex justify-center bg-black/5 rounded-[.5rem] h-max py-[.5rem]">
              Quantity:&nbsp;<span>{itemQuantity}</span>&nbsp;<span>{itemUM}</span>
           </h1>
        </>
    );
};

interface ItemIDProps {
    itemID: string,
}

const ItemID: React.FC<ItemIDProps> = ({ itemID }) => {
    return(
        <>
           <h1 className="w-full flex justify-center bg-black/5 rounded-[.5rem] h-max py-[.5rem]">
              ID:&nbsp;<span>{itemID}</span>
           </h1>
        </>
    );
};

const EditItemButton: React.FC = () => {
    return(
        <>
          <button 
          className="
          top-[.5rem] 
          p-[.5rem] 
          hover:bg-black/5 
          right-[.5rem] 
          rounded-[.5rem]
          absolute">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
             <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
            </svg>
          </button>
        </>
    );
};

const EditPrice: React.FC = () => {
    return(
        <>
          <div className="flex h-max bg-black/5 px-[1rem] h-[3rem] leading-[0px] items-center rounded-[.5rem] gap-[1rem] mt-[1rem]">
            <h2>Edit item price:</h2>
            <input
            placeholder="Price in Ron"
            className="
            blackTextInp
            bg-black/5
            h-[2rem]
            rounded-[.5rem]
            "
            type='number'
            />
            
            <button className=" ml-auto h-[2rem] w-[10rem] bg-white/90 hover:bg-black/5 rounded-[.5rem]">Save</button>
            <button className="h-[2rem] w-[10rem] bg-white/90 hover:bg-black/5 rounded-[.5rem]">Cancel</button>
          </div>
        </>
    );
};

export default ItemTemplate;