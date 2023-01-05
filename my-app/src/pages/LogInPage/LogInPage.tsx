import React from "react";
import CirclesContainer from "../../components/logInPageComp/Circle";
import LogInContainer from "../../components/logInPageComp/LogInSection";

const LogInPage: React.FC = () => {
    return(
        <>
           <div className="
           w-screen
           h-screen
           bg-gradient-to-bl
           from-navy-100
           to-navy-200
           flex
           justify-center
           items-center
           ">
             <CirclesContainer />
             <LogInContainer />
           </div>
        </>
    );
};

export default LogInPage;