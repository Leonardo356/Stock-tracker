import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { toast } from 'react-toastify';

const auth = getAuth();

interface LogOutBtnProps {
    svgUrl: string;
};

const LogOutBtn: React.FC<LogOutBtnProps> = ({ svgUrl }) => {

    const logOut = () => {
        signOut(auth).then(() => {
            toast.success('User successfully logged out');
          }).catch((error) => {
          });
    };

    return(
        <>
           <div
           onClick={logOut} 
           className="
            w-full
            h-max
            cursor-pointer 
            p-[1rem] 
            gap-[1rem]
            text-[1.4rem]
            leading-none
            hover:bg-babyBlue/30
            mt-auto
            flex
           ">
              <img
              src={svgUrl}
              alt='log out button svg'
              ></img>
              <div className="mt-[.1rem]">Log out</div>
           </div>
        </>
    );
};

export default LogOutBtn;