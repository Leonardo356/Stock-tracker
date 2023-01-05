import React, { ReactEventHandler } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createStore } from 'state-pool';
import { initializeApp } from "firebase/app";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
    apiKey: "AIzaSyBGtjze7ttrPD-2NeFxsACoviCnAYxSj2o",
    authDomain: "strackr-68645.firebaseapp.com",
    databaseURL: "https://strackr-68645-default-rtdb.firebaseio.com",
    projectId: "strackr-68645",
    storageBucket: "strackr-68645.appspot.com",
    messagingSenderId: "567847400013",
    appId: "1:567847400013:web:7bf6457fe9b39c45df6204",
    measurementId: "G-BQVGRL2WKD"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const emailStore = createStore();
emailStore.setState('email', '');

const passwordStore = createStore();
passwordStore.setState('password', '');

const LogInForm: React.FC = () => {
    return(
        <>
           <div className="
           w-full
           h-full
           flex
           flex-col
           justify-center
           items-center
           text-white
           gap-[1.5rem]
           py-[2rem]
           leading-none
           ">
               <LogInTitle />
               <EmailInp />
               <PasswordInp />
               <div className="
               w-max 
               h-max 
               flex 
               gap-[1rem]">
                 <LogInButton />
                 <GoogleBtn />
               </div>
           </div>
        </>
    );
};

const LogInTitle: React.FC = () => {
    return(
        <>
          <h1 className="text-[2rem] textShadow font-bold">Log in!</h1>
        </>
    );
};

const EmailInp: React.FC = () => {

    // eslint-disable-next-line
    const [email, setEmail] = emailStore.useState('email');

    return(
        <>
            <form className="w-[60%] mt-auto flex bg-babyBlue/20 border-[1px] rounded-[.5rem]">
                  <input
                  onChange={e => setEmail(e.currentTarget.value)}
                  name='email'
                  autoComplete="on"
                  placeholder="Email"
                  type='email'
                  className="
                  bg-white/0
                  w-[80%] 
                  h-[3rem]  
                  " />
                  <div className="
                  w-[20%]
                  h-full
                  flex
                  justify-center
                  items-center
                  ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                      </svg>
                  </div>
            </form>
        </>
    );
};

const PasswordInp: React.FC = () => {

    // eslint-disable-next-line
    const [password, setPassword] = passwordStore.useState('password');

    return(
        <>
            <form className="w-[60%] flex mb-auto bg-babyBlue/20 border-[1px] rounded-[.5rem]">
                  <input
                  onChange={e => setPassword(e.currentTarget.value)}
                  name='passwordLog'
                  autoComplete="on"
                  placeholder="Password"
                  type='password'
                  className="
                  bg-white/0
                  w-[80%] 
                  h-[3rem]  
                  " />
                  <div className="
                  w-[20%]
                  h-full
                  flex
                  justify-center
                  items-center
                  ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                      </svg>
                  </div>
            </form>
        </>
    );
};

const LogInButton: React.FC = () => {

    // eslint-disable-next-line
    const [email, setEmail] = emailStore.useState('email');
    // eslint-disable-next-line
    const [password, setPassword] = passwordStore.useState('password');

    const signInExistingUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            toast.success('Welcome back!');
        })
        .catch((error) => {
          const errorCode = error.code;
          let errorTxt = '';
          errorCode === 'auth/internal-error' 
          ? errorTxt = 'invalid password' 
          : errorTxt = errorCode
          .replace('auth/', '')
          .replace(/-/g, ' ');
          toast.error(`${errorTxt}`);
        });
    };

    return(
        <>
          <button
          onClick={signInExistingUser} 
          className="
          w-[10rem] 
          h-[3rem]
          bg-blue
          rounded-[.5rem]
          font-bold
          text-[1.2rem]
          leading-none
          ">
            Log In
          </button>
        </>
    );
};

const GoogleBtn: React.FC = () => {

    const logInpWithGoogle: ReactEventHandler = () => {
        signInWithPopup(auth, provider)
         .then((result) => {
            toast.success('Welcome back');
          }).catch((error) => {
           const errorCode = error.code;
            toast.error(`${errorCode}`);
        });
    };

    return(
        <>
          <button
          onClick={logInpWithGoogle} 
          className="
          w-[10rem] 
          h-[3rem]
          bg-red
          rounded-[.5rem]
          font-bold
          text-[1.2rem]
          leading-none
          ">
             Google
          </button>
        </>
    );
};

export default LogInForm;