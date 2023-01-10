import React, { useEffect, useState } from "react";
import ItemTemplate from "./itemTemplate";
import { getDatabase, ref, onValue} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getDatabase();
const auth = getAuth(); 

interface ItemsData {
    key: {
        date: string,
        destination: string,
        itemName: string,
        itemPrice: string,
        itemQuantity: string,
        itemTVA: string,
        itemUM: string,
        uidd: string,
    }
}

interface itemsDataArr {
    date: string,
    destination: string,
    itemName: string,
    itemPrice: string,
    itemQuantity: string,
    itemTVA: string,
    itemUM: string,
    uidd: string,
}

const StorageItems: React.FC = () => {

    const [itemsData, setItemsData] = useState<itemsDataArr[]>([]);

    useEffect(() => {
        let itemsDataArr: itemsDataArr[] = [];
        onAuthStateChanged(auth, (user) => {
        if(user!) {
          const dataRef = ref(db, `users/${user!.uid}/items`);
          onValue(dataRef, (snapshot) => {
            itemsDataArr = [];
            const data: ItemsData | null = snapshot.val();
            if(data!) Object.values(data).map(item => {
                if(item.destinationID === 'storage') itemsDataArr.push(item);
            });
            itemsDataArr.sort((a, b) => Number(a.date) - Number(b.date));
            setItemsData(itemsDataArr)
          });
        };
      });
      }, []);

    return(
        <>
          <div className="
          w-full
          h-full
          flex
          flex-col
          text-black
          font-bold
          p-[1rem]
          text-[1.4rem]
          ">
            <div className="mb-[1rem]">
                <h1>Items in storage:</h1>
            </div>

            <div className="
            w-full
            h-full
            flex
            flex-col
            gap-[1rem]
            ">
              {
                itemsData.map((item, index) => (
                    <ItemTemplate 
                    key={index}
                    itemName={item.itemName}
                    itemPrice={item.itemPrice}
                    itemTVA={item.itemTVA}
                    itemQTY={item.itemQuantity}
                    itemUM={item.itemUM}
                    itemID={item.uidd}
                    />
                ))
              }
            </div>
          </div>
        </>
    );
};

export default StorageItems;