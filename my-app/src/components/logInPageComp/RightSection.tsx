import React from "react";
import LogInForm from "./LogInForm";
import SignInForm from "./SignInForm";
import { createStore } from 'state-pool';

const toggleLogIn = createStore();
toggleLogIn.setState('toggleLog', true)

const RightSection: React.FC = () => {

    // eslint-disable-next-line
    const [toggleLog, setToggleLog] = toggleLogIn.useState("toggleLog");
    
    return(
        <>
          <div 
          className="
          w-full 
          bg-white/10 
          h-full
          flex
          flex-col
          text-white
          ">
              {
                toggleLog 
                ? <SignInForm />
                : <LogInForm />
              }
              {
                toggleLog 
                ? <Login />
                : <SignUp />
              }
          </div>
        </>
    );
};

const SignUp: React.FC = () => {

    // eslint-disable-next-line
    const [toggleLog, setToggleLog] = toggleLogIn.useState("toggleLog");

    return(
        <div className="
        w-full
        h-max
        flex
        justify-center
        text-[1.2rem]
        pb-[.2rem]
        ">
            Do not have an account? &nbsp; 
            <span
            onClick={() => setToggleLog(true)} 
            className="
            underline
            cursor-pointer
            ">Sign up</span>
        </div>
    );
};

const Login: React.FC = () => {

    // eslint-disable-next-line
    const [toggleLog, setToggleLog] = toggleLogIn.useState("toggleLog");

    return(
        <div  
        className="
        w-full
        h-max
        flex
        justify-center
        text-[1.2rem]
        pb-[.2rem]
        ">
            Already have an account? &nbsp; 
            <span
            onClick={() =>setToggleLog(false)} 
            className="
            underline
            cursor-pointer
            ">Log in</span>
        </div>
    );
};

export default RightSection;