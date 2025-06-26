import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../Utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef<HTMLInputElement>(null);
  const emailOrPhoneNo = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  
  const handleButtonClick = () => {
    // validate the form data

    // if i am typing in email and password how will i get the values of email and password?
    // either i can use useState to store the values of email and password or i can use references to get the values of email and password

    // useRef                                          	useState
    // Direct DOM access                               	Reactive value management
    // No re-render on change	                          Triggers re-render on update
    // Best for read-only or focus cases	              Best when UI needs to update
    // stores the reference to the input DOM element, not the value directly.
    // Does NOT cause re-renders when the input changes.
    // Best when you just want to read or manipulate the input (e.g., focus, clear, or grab value on submit).

    // useState is used to store the value of the input field and re-render the component whenever the value changes.
    // useRef is used to get the value of the input field when the user clicks on the button.
    // so i will use useRef to get the values of email and password when the user clicks on the button

    // whenever the user clicks on the button i wanna know the values which are entered in the input fields
    const message = checkValidData(emailOrPhoneNo?.current?.value, password?.current?.value , name?.current?.value, isSignInForm  );
    // console.log(message);
    setErrorMessage(message);
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <section className="header">
        <Header />
      </section>
      <div className="absolute">
        <img
          src="http://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg"
          alt="Netflix-bg-image"
        />
      </div>
      <form
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-90"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Enter your name"
            className="w-full p-4 my-4 bg-gray-700 opacity-80"
          />
        )}
        {!isSignInForm && (
          <input
            type="password"
            placeholder="create a password"
            className="w-full p-4 my-4 bg-gray-700 opacity-80"
          />
        )}
        {!isSignInForm && (
          <input
            type="password"
            placeholder="confirm your password"
            className="w-full p-4 my-4 bg-gray-700 opacity-80"
          />
        )}

        <input
          ref={emailOrPhoneNo}
          type="email"
          placeholder="Email or mobile number"
          className="w-full p-4 my-4 bg-gray-700 opacity-80"
        />
        {isSignInForm && (
          <input
            ref={password}
            type="password"
            placeholder="Enter your password"
            className="w-full p-4 my-4 bg-gray-700 opacity-80"
          />
        )}
        <p className="text-red-500 py-2 ">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-600 w-full cursor-pointer rounded-lg "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-sm text-gray-400">
          {isSignInForm ? "New to Netflix? " : "Already registered? "}
          <span
            onClick={toggleSignInForm}
            className="ml-1 text-white cursor-pointer hover:underline transition"
          >
            {isSignInForm ? "Sign Up Now" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
