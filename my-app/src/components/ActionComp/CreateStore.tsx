import React, { ReactEventHandler } from "react";
import CloseBtn from "../reusableComp/closeBtn";
import SubmitBtn from "../reusableComp/SubmitBtn";
import { CloseActionWindow, GetFullDate } from "../../functions/functions";
import { createStore } from 'state-pool';
import { toast } from 'react-toastify';
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { uid } from 'uid';

const auth = getAuth();

const db = getDatabase();

const storeNameStore = createStore();
storeNameStore.setState('storeName', '')

const CreateStore: React.FC = () => {
    return(
        <>
          <div
          onClick={(e) => CloseActionWindow(e, 'createStorePageContainer', 'createStoreWindowContainer')}
          className="
          w-screen
          hidden
          h-screen
          backdrop-blur-sm
          backdrop-grayscale
          createStorePageContainer
          absolute
          top-0
          left-0
          z-[9000]
          flex
          justify-center
          items-center
          ">
             <CreateStoreWindowContainer />
          </div>
        </>
    );
};

const CreateStoreWindowContainer: React.FC = () => {
    return(
        <>
           <div className="
           w-max
           h-max
           bg-navy-100
           scale-[0]
           createStoreWindowContainer
           shadow-sh2
           rounded-[1rem]
           duration-[200ms]
           rotate-[2deg]
           ">
             <CreateStoreWindow />
           </div>
        </>
    );
};

const CreateStoreWindow: React.FC = () => {
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
           items-center
           py-[1rem]
           px-[2rem]
           text-[1.3rem]
           font-bold
           gap-[2rem]
           ">
              <h1>Create Store</h1>
              <StoreNameInput />
              <CloseBtn actionClass="createStore" />
              <CreateStoreBtn />
           </div>
        </>
    );
};

const StoreNameInput: React.FC = () => {

    // eslint-disable-next-line
    const [storeName, setStoreName] = storeNameStore.useState<string>('storeName');

    return(
        <>
          <input
          onChange={(e) => { setStoreName(e.target.value); }}
          type='text'
          name="storeName"
          placeholder="Enter your store name..."
          className="
          h-[3rem]
          storeNameInput
          w-[25rem]
          font-normal
          blackTextInp
          border-b-[1px]
          "
          />
        </>
    );
};

const CreateStoreBtn: React.FC = () => {

     // eslint-disable-next-line
     const [storeName, setStoreName] = storeNameStore.useState<string>('storeName');

    const writeStoreData = () => {
        const user = auth.currentUser;
        let uidd = uid();
        set(ref(db, `users/${user?.uid}/stores/${uidd}`), {
          storeName: storeName,
          date: GetFullDate(),
          uidd: uidd,
        });

        toast.success(`${storeName} successfully created`);
        setStoreName('');
        let storeNameInput = document.querySelector('.storeNameInput') as HTMLInputElement | null;
        storeNameInput!.value = '';
    };

    const createStoreBtn: ReactEventHandler = () => {
       storeName === ''
       ? toast.error('Invalid store name')
       : storeName.length < 5
       ? toast.error('Minimum of 5 characters')
       : storeName.length > 10
       ? toast.error('Maximum of 10 characters')
       : writeStoreData();
    };

    return(
        <>
          <div
            onClick={createStoreBtn} 
            className="w-max h-max"><SubmitBtn name='Create Store' />
          </div>
        </>
    );
};

export default CreateStore;