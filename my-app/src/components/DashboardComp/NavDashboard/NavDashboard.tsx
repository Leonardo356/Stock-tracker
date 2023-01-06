import React from "react";
import ActionBtns from "./actionBtns";
import NavigationBtns from "./NavigationBtns";
import NavLogo from "./NavLogo";
import HomeSvg from './navSvg/homeSvg.svg';
import StorageSvg from './navSvg/storage.svg';
import StoresSvg from './navSvg/storesSvg.svg';
import CreateStoreSvg from './navSvg/addStoresSvg.svg';
import AddItemsSvg from './navSvg/addSvg.svg';
import TransfertSvg from './navSvg/transferSvg.svg';
import ActionSvg from './navSvg/actionSvg.svg';
import DisplayActionBtn from "./displayActionBtns";
import LogOutSvg from './navSvg/logOutSvg.svg';
import LogOutBtn from "./LogOutBtn";
import UserProfile from "./userProfile";

const NavDashBoard: React.FC = () => {
    return(
        <>
          <div className="
          w-[20%]
          h-screen
          bg-navy-100
          shadow-sh2
          relative
          z-[200]
          flex
          flex-col
          p-[1rem]
          gap-[1rem]
          text-white
          ">
             <NavLogo />
             <NavigationBtns
             iconUrl={HomeSvg}
             navBtnName='Home' 
             />

             <NavigationBtns
             iconUrl={StorageSvg}
             navBtnName='Storage' 
             />

             <NavigationBtns
             iconUrl={StoresSvg}
             navBtnName='Stores' 
             />

             <div className="border-b-[1px] border-white/30"></div>

            <DisplayActionBtn 
            svgUrl={ActionSvg}
            />

            <ActionBtnsContainer />  

            <LogOutBtn
            svgUrl={LogOutSvg}
             />       

            <UserProfile />   
          </div>
        </>
    );
};

const ActionBtnsContainer: React.FC = () => {
    return(
        <div 
        className="
        flex
        flex-col
        px-[1rem]
        origin-top
        actionBtnsContainer
        scale-0
        gap-[.5rem]
        ">

          <ActionBtns
          iconUrl={CreateStoreSvg}
          navBtnName='Create store' 
          />

          <ActionBtns
          iconUrl={TransfertSvg}
          navBtnName='Transfer items' 
          />

          <ActionBtns
          iconUrl={AddItemsSvg}
          navBtnName='Add items' 
          />
      </div>
    );
};

export default NavDashBoard;