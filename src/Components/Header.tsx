import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../Utils/useSlice'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store:any) => store.user); // Access the user from the Redux store
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch(() => {
        navigate('/error'); // Redirect to an error page if sign out fails
      });
  };

   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    const {uid,email,displayName} = user;
    dispatch(addUser({uid:uid, email:email, displayName:displayName}));
    navigate('/browse'); 
  } else {
    // User is signed out
    dispatch(removeUser())
    navigate('/'); 
  }
});
  }, [])


  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between ">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix-logo"
        className="w-44 cursor-pointer"
      />
     {user && <div className="flex p-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user-icon"
          className="w-12 h-12"
        />
        <button className="font-bold text-white cursor-pointer" onClick={handleSignOut}>
          (Sign out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
