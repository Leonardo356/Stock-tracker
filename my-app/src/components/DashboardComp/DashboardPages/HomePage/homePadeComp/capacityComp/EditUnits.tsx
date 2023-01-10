import React, { useEffect, useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";

const db = getDatabase();
const auth = getAuth();

interface EditProps {
    color: string,
    uidd: string,
};

const UnitsEditSection: React.FC<EditProps> = ({ color, uidd }) => {

    const [colorBg, setColorBg] = useState<string>(''); 
    const [newStoreName, setNewStoreName] = useState<string>('');

    useEffect(() => {
        color === 'bg-white'
        ? setColorBg('hover:bg-black/20 bg-black/10 blackTextInp')
        : setColorBg('hover:bg-white/30 bg-alphaWhite');
     }, [color]);

     const closeEdit = (event: React.MouseEvent<Element, MouseEvent>) => {
      const unitsOnDOM = Array.from(document.querySelectorAll('.unitOnDOM'));
      const targetButton = event.currentTarget as HTMLElement;
    
      unitsOnDOM.forEach(unit => {
        if (unit.contains(targetButton)) {
          const editUnitsNameSection = unit.querySelector('.editUnitsNameSection');
          if (editUnitsNameSection) editUnitsNameSection.classList.add('hidden');
        };
      });
     };

     const closeEditSection: React.MouseEventHandler = (event) => {
        closeEdit(event);
      };

      const addStorageNameToData = () => {
        let user = auth.currentUser;
        set(ref(db, `users/${user!.uid}/storage/`), { storageName: newStoreName, });
      };

      const editStoreName = () => {
        let user = auth.currentUser;
        set(ref(db, `users/${user!.uid}/stores/${uidd}/storeName`), {name: newStoreName,});
      };

      const ifInputIsAllowed = (event: React.MouseEvent<Element, MouseEvent>) => {
        uidd === 'storage' || uidd.length === 16
        ? addStorageNameToData()
        : editStoreName();

        toast.success('Unit name successfully changed');
        closeEdit(event);
        let editUnitsNameInputs = Array.from(document.querySelectorAll('.editStoreNameOnCapacity'));
        editUnitsNameInputs.forEach(input => {if(input instanceof HTMLInputElement) input.value = '';});
      };

      const editUnitName: React.MouseEventHandler = (event) => {
        newStoreName === ''
        ? toast.error('Invalid unit name')
        : newStoreName.length < 5
        ? toast.error('Minimum of 5 characters')
        : newStoreName.length > 10
        ? toast.error('Maximum of 10 characters')
        : ifInputIsAllowed(event);
      };

    return(
        <>
          <div className="
          w-full
          h-max
          editUnitsNameSection
          flex
          flex-col
          hidden
          duration-[200ms]
          py-[1.5rem]
          gap-[1rem]
          ">
            <input
            onChange={(e) => setNewStoreName(e.target.value)}
            name="editUnitName"
            placeholder="Enter unit name..."
            className={`
            editStoreNameOnCapacity
            ${colorBg}
            h-[3rem]
            rounded-[.5rem]
            `}
            />

            <div className="flex w-full gap-[1rem] items-center leading-[0px] font-normal h-[3rem]">
                <button
                onClick={editUnitName} 
                className={`rounded-[.5rem] w-full ${colorBg} h-[2rem] px-[1rem]`}>Edit</button>
                <button
                onClick={closeEditSection} 
                className={`ml-auto rounded-[.5rem] ${colorBg} w-full h-[2rem] px-[1rem]`}>Cancel</button>
            </div>
          </div>
        </>
    );
};

export default UnitsEditSection;