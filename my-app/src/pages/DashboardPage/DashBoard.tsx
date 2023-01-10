import React from "react";
import AddItems from "../../components/ActionComp/AddItems";
import CreateStore from "../../components/ActionComp/CreateStore";
import HomePage from "../../components/DashboardComp/DashboardPages/HomePage/HomePage";
import NavDashBoard from "../../components/DashboardComp/NavDashboard/NavDashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StoragePage from "../../components/DashboardComp/DashboardPages/StoragePage/Storage";

const Dashboard: React.FC = () => {
    return(
        <>
          <div className="
          w-screen
          h-screen
          flex
          ">
            <NavDashBoard />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/StoragePage' element={<StoragePage />} />
              </Routes>
            </BrowserRouter>
            <CreateStore />
            <AddItems />
          </div>
        </>
    );
};

export default Dashboard;