import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
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
      <form className="w-4/12 absolute bg-opacity-70 bg-black text-white rounded-lg  p-20 mx-auto my-36 right-0 left-0">
        <h1 className="font-bold text-3xl text-white w-full mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="FullName"
            className="p-2 bg-gray-800 my-4 w-full"
          />
        )}
        {!isSignIn && (
          <input
            type="text"
            placeholder="Mobile No."
            className="p-2 my-4 w-full bg-gray-800"
          />
        )}{" "}
        <input
          type="text"
          placeholder="email"
          className="p-2 my-4 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 my-4 w-full bg-gray-800"
        />
        <button className="p-4  my-4 text-white font-bold text-lg bg-red-600 w-full ">
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
