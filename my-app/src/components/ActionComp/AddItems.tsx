import React, { useEffect, useState } from "react";
import { CloseActionWindow, GetFullDate } from "../../functions/functions";
import CloseBtn from "../reusableComp/closeBtn";
import SubmitBtn from "../reusableComp/SubmitBtn";
import { getDatabase, ref, onValue, set} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createStore } from 'state-pool';
import { uid } from "uid";
import { toast } from "react-toastify";

const destinationStore = createStore();
destinationStore.setState('destination', '');

const itemNameStore = createStore();
itemNameStore.setState('itemName', '');

const itemPriceStore = createStore();
itemPriceStore.setState('itemPrice', '');

const itemTVAStore = createStore();
itemTVAStore.setState('itemTVA', '');

const itemQuantityStore = createStore();
itemQuantityStore.setState('itemQuantity', '');

const itemUMStore = createStore();
itemUMStore.setState('itemUM', '');

const db = getDatabase();
const auth = getAuth(); 

const AddItems: React.FC = () => {

    return(
        <> 
          <div
          onClick={(e) => CloseActionWindow(e, 'createItemPageContainer', 'createItemWindowContainer')} 
          className="
          w-screen
          h-screen
          backdrop-blur-sm
          backdrop-grayscale
          hidden
          createItemPageContainer
          absolute
          top-0
          left-0
          z-[9000]
          flex
          justify-center
          items-center
           ">
            <AddItemsWidowContainer />
           </div>
        </>
    );
};

const AddItemsWidowContainer: React.FC = () => {
    return(
        <>
          <div className="
           w-max
           h-max
           bg-navy-100
           scale-[0]
           createItemWindowContainer
           shadow-sh2
           rounded-[1rem]
           duration-[200ms]
           rotate-[2deg]
           ">
            <AddItemsWindow />
           </div>
        </>
    );
};

const AddItemsWindow: React.FC = () => {
    return(
        <>
           <div className="
           w-full
           h-full
           bg-white
           rounded-[1rem]
           -rotate-[2deg]
           shadow-sh2
           flex
           flex-col
           py-[1rem]
           px-[2rem]
           text-[1.3rem]
           font-bold
           gap-[2rem]
           ">
            <CloseBtn
            actionClass="CreateItem" 
            />

           <h1 className="w-full text-center">
            Add Item
           </h1>

            <ItemDestinationSection />

            <ItemNameInput />

            <PriceContainer />

            <ItemQuantiyContainer />

            <AddItemButton />
           </div>
        </>
    );
};

interface StoresData {
    storage: {
     storageName: string,
    }
     stores: {
       key: {
         storeName: {
           name: 'string',
         },
         date: string,
         uidd: string,
       },
     },
};
 
 interface StoreDataArr {
     storeName: {
       name: 'string',
     },
     date: string,
     uidd: string,
 }

const ItemDestinationSection: React.FC = () => {

   const [storesData, setStoresData] = useState<StoreDataArr[]>([]);
   const [storageName, setStorageName] = useState<string>('Storage')
 
   useEffect(() => {
     let storesDataArr: StoreDataArr[] = [];
     onAuthStateChanged(auth, (user) => {
     if(user!) {
       const dataRef = ref(db, `users/${user!.uid}`);
       onValue(dataRef, (snapshot) => {
         storesDataArr = [];
         const data: StoresData | null = snapshot.val();
         if(data!?.stores) Object.values(data.stores).map(stores => storesDataArr.push(stores));
         if(data!?.storage) setStorageName(data.storage.storageName);
         storesDataArr.sort((a, b) => Number(a.date) - Number(b.date));
         setStoresData(storesDataArr);
       });
     };
   });
   }, []);

    return(
        <> 
          <form>
            <fieldset>
              <legend className=" mb-[1rem] font-normal">Select item destination:</legend>
                <div className="flex flex-col gap-[.5rem]">
                  <RadioBtnDestinationItem
                  inputValue="storage"
                  value={storageName} 
                  id='Storage3564'
                  />

                 {
                    storesData.map((values, index) => (
                        <RadioBtnDestinationItem 
                        key={index}
                        inputValue={values.uidd}
                        value={values.storeName.name} 
                        id={values.uidd}
                        />
                    ))
                 }
                </div>   
            </fieldset>
          </form>
        </>
    );
};

interface RadionBtnProps {
    inputValue: string,
    value: string,
    id: string,
}

const RadioBtnDestinationItem: React.FC<RadionBtnProps> = ({ value, id, inputValue }) => {

    // eslint-disable-next-line
    const [destination, setDestination] = destinationStore.useState('destination');

    return(
        <>
            <div className="flex gap-[.5rem]">
             <input
             onChange={(e) => setDestination(e.target.value)}
             type='radio'
             name='radioDestinationItem' 
             value={inputValue}
             id={id}
             className='ml-[1rem]'
             />
            <label htmlFor={id}>{value}</label>
            </div>
        </>
    );
};

const ItemNameInput: React.FC = () => {

    // eslint-disable-next-line
    const [itemName, setItemName] = itemNameStore.useState('itemName');

    return(
        <>
          <input
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item name"
          name="add item input"
          type='text'
          className="
          h-[3rem]
          storeNameInput
          w-full
          font-normal
          blackTextInp
          border-b-[1px]
          "
          />
        </>
    );
};

const PriceContainer: React.FC = () => {
    return(
        <>
           <div className="
           flex
           w-full
           "
           >
             <ItemPriceInput />
             <ItemTVAInput />
           </div>
        </>
    );
};

const ItemPriceInput: React.FC = () => {

    // eslint-disable-next-line
    const [itemPrice, setItemPrice] = itemPriceStore.useState('itemPrice');

    return(
        <>
          <input
          onChange={(e) => setItemPrice(e.target.value)}
          placeholder="Item price in Ron"
          name="add price input"
          type='number'
          className="
          h-[3rem]
          w-full
          font-normal
          blackTextInp
          border-b-[1px]
          "
          />
        </>
    );
};

const ItemTVAInput: React.FC = () => {

    // eslint-disable-next-line
    const [itemTVA, setItemTVA] = itemTVAStore.useState('itemTVA');

    return(
        <>
          <input
          onChange={(e) => setItemTVA(e.target.value)}
          placeholder="TVA%"
          name="add TVA input"
          type='number'
          className="
          h-[3rem]
          w-[20%]
          font-normal
          blackTextInp
          border-b-[1px]
          "
          />
        </>
    );
};

const ItemQuantiyContainer: React.FC = () => {
    return(
        <>
           <div className="
           flex
           w-full
           ">
            <ItemQuatityInput />
            <ItemQuatityUMInput />
           </div>
        </>
    );
};

const ItemQuatityInput: React.FC = () => {

     // eslint-disable-next-line
     const [itemQuantity, setItemQuantity] = itemQuantityStore.useState('itemQuantity');

    return(
        <>
          <input
          onChange={(e) => setItemQuantity(e.target.value)}
          placeholder="Item quantity"
          name="add quantity input"
          type='number'
          className="
          h-[3rem]
          w-full
          font-normal
          blackTextInp
          border-b-[1px]
          "
          />
        </>
    );
};

const ItemQuatityUMInput: React.FC = () => {

    // eslint-disable-next-line
    const [itemUM, setItemUM] = itemUMStore.useState('itemUM');

    return(
        <>
          <select
          onChange={(e) => setItemUM(e.target.value)}
          defaultValue={"default"} 
          className="
          font-normal 
          border-b-[1px] 
          w-[20%] 
          h-[3rem]">
            <option disabled value='default'>U.M.</option>
            <option value='BUC' >BUC</option>
            <option value='KG' >KG</option>
            <option value='L' >L</option>
          </select>
        </>
    );
};

const AddItemButton: React.FC = () => {

    // eslint-disable-next-line
    const [destination, setDestination] = destinationStore.useState('destination');
    // eslint-disable-next-line
    const [itemName, setItemName] = itemNameStore.useState('itemName');
    // eslint-disable-next-line
    const [itemPrice, setItemPrice] = itemPriceStore.useState('itemPrice');
    // eslint-disable-next-line
    const [itemTVA, setItemTVA] = itemTVAStore.useState('itemTVA');
    // eslint-disable-next-line
    const [itemQuantity, setItemQuantity] = itemQuantityStore.useState('itemQuantity');
    // eslint-disable-next-line
    const [itemUM, setItemUM] = itemUMStore.useState('itemUM');

    const addItemsToData = () => {
        const user = auth.currentUser;
        let itemUid = uid();
        const itemData = {
            destinationID: destination,
            itemName: itemName,
            itemPrice: itemPrice,
            itemTVA: itemTVA,
            itemQuantity: itemQuantity,
            itemUM: itemUM,
            date: GetFullDate(),
            uidd: itemUid,
        };

        set(ref(db, `users/${user?.uid}/items/${itemUid}`), itemData);
        toast.success('Item successfully added');
    };

    const addItemsToDataEvent = () => {
        destination === ''
        ? toast.error('Select item destination')
        : itemName === ''
        ? toast.error('Enter item name')
        : itemName.length < 3
        ? toast.error('Item name: minimum of 3 characters')
        : itemName.length > 15
        ? toast.error('Item name: maximum of 15 characters')
        : itemPrice === ''
        ? toast.error('Invalid item price')
        : itemPrice < 0
        ? toast.error('Invalid item price')
        : itemPrice > 5000
        ? toast.error('Max price 5000 Ron')
        : itemTVA === ''
        ? toast.error('Invalid item TVA')
        : itemTVA > 100
        ? toast.error('Invalid item TVA')
        : itemTVA < 0 
        ? toast.error('Invalid item TVA')
        : itemQuantity === ''
        ? toast.error('Invalid item quanty')
        : itemQuantity < 0
        ? toast.error('Enter a quantity betweeen 0 - 300')
        : itemQuantity > 300
        ? toast.error('Enter a quantity betweeen 0 - 300')
        : itemUM === ''
        ? toast.error('Select item U.M.')
        : addItemsToData();
    };

    return(
        <>
            <div
            onClick={addItemsToDataEvent} 
            className="w-full mt-[1rem] flex justify-center">
              <SubmitBtn
              name='Add item' 
              />
            </div>
        </>
    );
};

export default AddItems;