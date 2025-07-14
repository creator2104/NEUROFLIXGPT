import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react'   
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../Utils/useSlice'
import { Netflix_Logo, SUPPORTED_LANGUAGES, User_Icon, User_Icon2, User_Icon3, User_Icon4 } from "../Utils/Constants";
import { toggleGPTSearchView } from "../Utils/GPTSlice";
import { changeLanguage } from "../Utils/configslice";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false);
  interface RootState {
    user: {
      uid: string;
      email: string | null;
      displayName: string | null;
    } | null;
    gpt: {
      showGPTSearch: boolean;
    };
  }
  const showGPTSearch = useSelector((store: RootState) => store.gpt.showGPTSearch)

  // Access the user from the Redux store
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
  // console.log(toggleDropdown);

  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

   const handleGPTSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGPTSearchView())
  }

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

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
  <header className={`fixed top-0 left-0 w-full z-30 px-6 md:px-12 py-1 transition-colors duration-300 flex justify-between items-center ${
  isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black via-transparent to-transparent'
}`}>

    {/* Left: Logo + Nav */}
     <div className="flex items-center gap-10">
      <img
        src={Netflix_Logo}
        alt="Netflix-logo"
        className="w-44 cursor-pointer"
      />
      {user && (
        <nav className="hidden md:flex gap-6 text-white text-sm font-medium">
          <Link to="/home"><span className="cursor-pointer hover:opacity-80">Home</span></Link>
          <Link to="/shows"><span className="cursor-pointer hover:opacity-80">TV Shows</span></Link>
          <Link to="/movies"><span className="cursor-pointer hover:opacity-80">Movies</span></Link>
          <Link to="/games"><span className="cursor-pointer hover:opacity-80">Games</span></Link>
          <Link to="/newpopular"><span className="cursor-pointer hover:opacity-80">New & Popular</span></Link>
          <Link to="/mylist"><span className="cursor-pointer hover:opacity-80">My List</span></Link>        </nav>
      )}
    </div>

    {/* Right: User Icon */}
    {user && (
      <>
     { showGPTSearch && <select className="text-white bg-gray-900 p-2 m-2" onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
      </select>}
     <div className="flex items-center gap-4">
    <button className="py-2 px-4 bg-purple-800 hover:bg-purple-900 text-white cursor-pointer rounded-lg my-2"
    onClick={handleGPTSearchClick}>{showGPTSearch?"Homepage":"GPT Search"}</button>
      <div
        className="relative flex items-center p-2"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <img
          src={User_Icon}
          alt="user-icon"
          className="w-10 h-10 rounded-lg cursor-pointer "
        />

        {showDropdown && (
          <div className="absolute top-14 right-0 w-28 bg-black p-2 rounded shadow-md border z-50">
            <div className="flex items-center gap-2 mb-2 cursor-pointer text-sm">
              <img src={User_Icon2} alt="user-icon" />
              <span className="text-white font-semibold hover:underline">Alex</span>
            </div>
            <div className="flex items-center gap-2 mb-2 cursor-pointer text-sm">
              <img src={User_Icon3} alt="user-icon" />
              <span className="text-white font-semibold hover:underline">Jhon</span>
            </div>
            <div className="flex items-center gap-2 mb-2 cursor-pointer text-sm">
              <img src={User_Icon4} alt="user-icon" />
              <span className="text-white font-semibold hover:underline">Tom</span>
            </div>
            <button
              onClick={handleSignOut}
              className="text-white hover:underline px-4 py-2 w-full text-left cursor-pointer text-md"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
      </div>
      </>
    )}
  </header>
);
}

export default Header;
