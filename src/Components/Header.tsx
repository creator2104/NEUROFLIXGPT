import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react'   
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../Utils/useSlice'
import { Netflix_Logo, User_Icon, User_Icon2, User_Icon3, User_Icon4 } from "../Utils/Constants";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  interface RootState {
    user: {
      uid: string;
      email: string | null;
      displayName: string | null;
    } | null;
  }
  const user = useSelector((store: RootState) => store.user) // Access the user from the Redux store
    const [showDropdown, setShowDropdown] = useState(false);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        
      })
      .catch(() => {
        navigate('/error') // Redirect to an error page if sign out fails
      });
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  console.log(toggleDropdown);

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

  return () => {
    // The return inside useEffect is used to define a cleanup function — it’s React's way to clean up side effects 
    // Cleanup function to unsubscribe from the auth state change listener 
    unsubscribe();
  }
  }, [dispatch, navigate])

   return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img
        src={Netflix_Logo}
        alt="Netflix-logo"
        className="w-44 cursor-pointer"
      />

      {user && (
        <div
          className="relative flex items-center p-2"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <img
            src={User_Icon}
            alt="user-icon"
            className="w-12 h-12 rounded-lg cursor-pointer"
          />

          {showDropdown && (
            <div className="absolute top-14 right-0 w-28 bg-black p-2 rounded shadow-md border z-50">
              <div className="flex items-center gap-2 mb-2 cursor-pointer">
                <img src={User_Icon2} alt="user-icon" /><span className="text-white font-semibold hover:underline">Alex</span>
              </div>
              <div className="flex items-center gap-2 mb-2 cursor-pointer">
                <img src={User_Icon3} alt="user-icon" /><span className="text-white font-semibold hover:underline">Jhon</span>
              </div>
              <div className="flex items-center gap-2 mb-2 cursor-pointer">
                <img src={User_Icon4} alt="user-icon" /><span className="text-white font-semibold hover:underline">Tom</span>
              </div>
              <button
                onClick={handleSignOut}
                className="text-white hover:underline px-4 py-2 w-full text-left cursor-pointer"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};


export default Header;
