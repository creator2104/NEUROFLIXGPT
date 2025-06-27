/* eslint-disable @typescript-eslint/no-unused-expressions */
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../Utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/useSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const name = useRef<HTMLInputElement>(null);
  const emailOrPhoneNo = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const createPassword = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = async () => {
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
    const message = checkValidData(
      emailOrPhoneNo?.current?.value || "",
      password?.current?.value || "",
      name?.current?.value || "",
      isSignInForm,
      createPassword?.current?.value || "",
      confirmPassword?.current?.value || ""
    );
    // console.log(message);
    setErrorMessage(message);

    if (message === null) {
      const email = emailOrPhoneNo?.current?.value || "";
      const pwd = isSignInForm
        ? password?.current?.value || ""
        : createPassword?.current?.value || "";
      const userName = name?.current?.value || "";

      if (!isSignInForm) {
        // Sign up logic
        createUserWithEmailAndPassword(auth, email, pwd)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: userName,
            })
              .then(() => {
                console.log("✅ User signed up:", user);
                if (auth.currentUser) {
                  const { uid, email, displayName } = auth.currentUser;
                  dispatch(addUser({ uid, email, displayName }));
                }
                navigate("/browse");
              })
              .catch((profileErr) => {
                console.error("Profile update error:", profileErr);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + errorMessage);
          });
      } else {
        // Sign in logic
        signInWithEmailAndPassword(auth, email, pwd)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("✅ Signed in user:", user);
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + errorMessage);
          });
      }
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    // Clear all inputs when switching between Sign In and Sign Up
    // This is a short-circuit expression in JavaScript.
    // name.current checks if the ref exists (i.e., is not null or undefined).
    // If it does exist, then the code after && is executed: name.current.value = "".
    // "If name.current is not null, then set its input value to an empty string."
    // If you're on the Sign In form, the name field (used only in Sign Up) doesn't exist, so name.current would be null.
    // name.current.value = "";
    // ❌ Cannot read properties of null (reading 'value')
    // That’s why we add the safety check:
    // name.current && (name.current.value = "");
    // 1.name.current → null
    // 2.Since it's falsy, JavaScript does not execute the part after &&.
    // 3.So name.current.value = "" is never run.
    // 4.✅ No error, nothing happens — which is exactly what we want
    name?.current && (name.current.value = "");
    emailOrPhoneNo?.current && (emailOrPhoneNo.current.value = "");
    password?.current && (password.current.value = "");
    createPassword?.current && (createPassword.current.value = "");
    confirmPassword?.current && (confirmPassword.current.value = "");
    setErrorMessage(null); // Clear error message when toggling forms
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
      <section className="forminit">
        <form autoComplete="on"
          className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-90"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              name="name"
              autoComplete="name" // or "username" for sign up
              type="text"
              placeholder="Enter your name"
              className="w-full p-4 my-4 bg-gray-700 opacity-80"
            />
          )}
          <input
            ref={emailOrPhoneNo}
            name="email"
            autoComplete="email"
            type="email"
            placeholder="Email or mobile number"
            className="w-full p-4 my-4 bg-gray-700 opacity-80"
          />

          {!isSignInForm && (
            <input
              ref={createPassword}
              name="new-password"
              autoComplete="new-password" // or "new-password" for sign up
              type="password"
              placeholder="create a password"
              className="w-full p-4 my-4 bg-gray-700 opacity-80"
            />
          )}
          {!isSignInForm && (
            <input
              ref={confirmPassword}
              name="confirm-password"
              autoComplete="new-password" // or "new-password" for sign up
              type="password"
              placeholder="confirm your password"
              className="w-full p-4 my-4 bg-gray-700 opacity-80"
            />
          )}
          {isSignInForm && (
            <input
              ref={password}
              name="password"
              autoComplete="current-password" // or "new-password" for sign up
              type="password"
              placeholder="Enter your password"
              className="w-full p-4 my-4 bg-gray-700 opacity-80"
            />
          )}
          <p className="text-red-500 py-2 ">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-600 hover:bg-red-700 w-full cursor-pointer rounded-lg "
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
      </section>
    </div>
  );
};

export default Login;
