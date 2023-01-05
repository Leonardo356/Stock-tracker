import React, { useEffect, useState } from 'react';
import LogInPage from './pages/LogInPage/LogInPage';
import { ToastContainer } from 'react-toastify';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Dashboard from './pages/DashboardPage/DashBoard';

const auth = getAuth();

const App: React.FC = () => {

   const [isLoggedIn, setIsLoggedIn] = useState<boolean>();

   useEffect(() => { 
      onAuthStateChanged(auth, (user) => { 
      !user 
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false) 
   }); 
   }, []);

  return (
     <>
        <ToastContainer position='top-center' />
        <div className='
        w-screen
        h-screen
        bg-white
        '>
           {
            isLoggedIn 
            ? <LogInPage />
            : <Dashboard />
           }
        </div>
     </>
  );
}

export default App;
