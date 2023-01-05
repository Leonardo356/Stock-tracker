import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
const auth = getAuth();
const database = getDatabase();

const UserProfile: React.FC = () => {

    const [userEmail, setUserEmail] = useState<string>('');
    const [userPhoto, setUserPhoto] = useState<string | null>('');
    const [userFirstLetter, setUserFirstLetter] = useState<string>('');
    const [username, setUsername] = useState<string | null>('');

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserEmail(user.email!);
                setUserPhoto(user.photoURL);
                setUserFirstLetter(user.email![0].toLowerCase())
                setUsername(user.displayName!)

                const starCountRef = ref(database, `users/${user.uid}/username`);
                onValue(starCountRef, (snapshot) => {
                    const data = snapshot.val();
                    if(data!) setUsername(data);
                });
            }
          });
    }, [])

    return(
        <>
           <div className="
           w-full
           h-max
           p-[1rem]
           pt-[2rem]
           border-t-[1px]
           border-white/30
           flex
           gap-[1rem]
           items-center
           ">
             <div className="
             w-[4rem]
             h-[4rem]
             bg-babyBlue/30
             rounded-full
             flex
             justify-center
             items-center
             text-[2vmax]
             overflow-hidden
             ">
                {
                    userPhoto!
                    ? <UserPhoto photoUrl={userPhoto} />
                    : <h1>{userFirstLetter}</h1>
                }
             </div>

             <div className="w-max h-max leading-none gap-[1rem] mt-[.2rem] flex flex-col">
                <div className="font-bold text-[1.2rem]">{username}</div>
                <div className="">{userEmail}</div>
             </div>
           </div>
        </>
    );
};

interface UserPhotoProps {
    photoUrl: string,
};

const UserPhoto: React.FC<UserPhotoProps> = ({ photoUrl }) => {
    return(
        <img
        className="w-full h-full"
        src={photoUrl}
        alt='user profile pictures'
        />
    );
};

export default UserProfile;