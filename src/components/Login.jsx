import { useRef, useState } from "react";
import Header from "./Header";
import { validation } from "../utils/Validates";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errormessage, setErrorMessage] = useState(null)
  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const mobilenumber = useRef(null);

  const handleButton = () => {
    const message = validation(fullname.current.value,mobilenumber.current.value,email.current.value,password.current.value)
    setErrorMessage(message)
  };

  const HandleAuthentication = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <div className="absolute z-10 px-8 py-2">
        <Header />
      </div>
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_medium.jpg"
        alt="background image of netflix"
      />
      <form onSubmit={(e)=>e.preventDefault()} className="w-4/12 absolute bg-opacity-70 bg-black text-white rounded-lg  p-20 mx-auto my-36 right-0 left-0">
        <h1 className="font-bold text-3xl text-white w-full mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={fullname}
            type="text"
            placeholder="FullName"
            className="p-2 bg-gray-800 my-4 w-full"
          />
        )}
        {!isSignIn && (
          <input
            ref={mobilenumber}
            type="text"
            placeholder="Mobile No."
            className="p-2 my-4 w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="email"
          className="p-2 my-4 w-full bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-2 my-4 w-full bg-gray-800"
        />
        <p className="text-red-500 font-bold text-lg">{errormessage}</p>
        <button
          className="p-4  my-4 text-white font-bold text-lg bg-red-600 w-full "
          onClick={handleButton}
        >
          {isSignIn ? "Sign in" : "Sign Up"}
        </button>
        <p className="cursor-pointer mt-10" onClick={HandleAuthentication}>
          {isSignIn
            ? "New to Netflix ?  Please Sign up "
            : "Already a user? Please Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
