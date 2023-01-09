import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import EditUnitBtn from "./EditUnitsBtn";
import UnitsEditSection from "./EditUnits";

const db = getDatabase();
const auth = getAuth(); 

interface StoresData {
    storeName: 'string',
    date: string,
    uidd: string,
};
 
const UnitsContainer: React.FC = () => {
 
   const [storesData, setStoresData] = useState<StoresData[]>([]);
 
   useEffect(() => {
     let storesDataArr: StoresData[] = [];
     onAuthStateChanged(auth, (user) => {
     if(user!) {
       const dataRef = ref(db, `users/${user!.uid}/stores`);
       onValue(dataRef, (snapshot) => {
         storesDataArr = [];
         const data: StoresData | null = snapshot.val();
         if(data!) Object.values(data).map(store => storesDataArr.push(store))
         storesDataArr.sort((a, b) => Number(a.date) - Number(b.date));
         setStoresData(storesDataArr);
       });
     };
   });
   }, []);
 
    return(
      <>
         <div className="flex p-[1rem] gap-[2rem] flex-wrap w-full h-max">

           <Unit 
           isStorage={true}
           unitClass="storageOnCapacity"
           bgColor="bg-gradient-to-r from-navy-100 to-navy-200"
           textColor="text-white" 
           unitName="Storage"
           />
           
           {
             storesData.map((values, index) => (
               <Unit 
               isStorage={false}
               unitClass={values.uidd}
               key={index}
               bgColor="bg-white"
               textColor="text-black" 
               unitName={values.storeName}
               />
             ))
           }
 
         </div>
      </>
    );
};
 
interface UnitProps {
    bgColor: string,
    textColor: string,
    unitName: string,
    unitClass: string,
    isStorage: boolean,
};
 
const Unit: React.FC<UnitProps> = ({ bgColor, textColor, unitName }) => {
 
    const [hoverColor, setHoverColor] = useState<string>('');
 
    useEffect(() => {
       bgColor === 'bg-white'
       ? setHoverColor('hover:bg-alphaBlack')
       : setHoverColor('hover:bg-alphaWhite');
    }, [bgColor]);
 
    return(
        <>
           <div
           className={`
           w-[20rem]
           h-max
           ${bgColor}
           ${textColor}
           unitOnDOM
           rounded-[1rem]
           duration-[200ms]
           hover:shadow-shPop
           hover:-translate-y-[5px]
           hover:translate-x-[5px]
           p-[1rem]
           flex
           flex-col
           cursor-pointer
           relative
           `}>
             <EditUnitBtn hoverColor={hoverColor} />
             <div className="text-[2vmax] duration-[200ms] unitNameOnDOM">{unitName}</div>
             <UnitsEditSection color={bgColor} />
             <div className="mt-auto w-full flex">
                <p>Items in:</p>
                <p className="ml-auto">30</p>
             </div>
           </div>
        </>
    );
};

export default UnitsContainer;