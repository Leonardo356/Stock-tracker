import React from "react";
import CreateStore from "../../components/ActionComp/CreateStore";
import HomePage from "../../components/DashboardComp/DashboardPages/HomePage/HomePage";
import NavDashBoard from "../../components/DashboardComp/NavDashboard/NavDashboard";

const Dashboard: React.FC = () => {
    return(
        <>
          <div className="
          w-screen
          h-screen
          flex
          ">
            <NavDashBoard />
            <HomePage />
            <CreateStore />
          </div>
        </>
    );
};

export default Dashboard;