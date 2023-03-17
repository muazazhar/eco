import Link from "next/link";
import React, { useState } from "react";

const SignIn = ({
  clearSignIn,
  setShowSignUp,
}: {
  clearSignIn: any;
  setShowSignUp: any;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="backdrop-blur-[1px] bg-black/30 w-full h-screen absolute z-20 left-0 top-0 flex justify-center items-center">
      <div className="container container-fluid absolute top-1/5 flex justify-center">
        <div className="flex-col justify-center bg-white w-full px-5 md:px-0 md:w-3/6 lg:w-2/5 py-20 relative">
          <button
            onClick={() => clearSignIn()}
            className="absolute right-5 top-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="col-10 col-lg-5 ">
            <form className="" onSubmit={submitHandler}>
              <h1 className="font-semibold text-3xl text-center mb-10">Eco.</h1>
              <div className="space-y-3  px-4 md:px-16">
                <div className="form-outline">
                  <input
                    type="email"
                    id="email_field"
                    className="form-control border border-black focus:drop-shadow-lg outline-none px-5 py-2 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div className="form-outline">
                  <input
                    type="password"
                    id="password_field"
                    className="form-control border border-black focus:drop-shadow-lg outline-none px-5 py-2 w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  // onClick={() => addItem()}
                  className="flex w-full items-center justify-center border border-transparent bg-teal-600 py-2  text-base font-medium text-white hover:bg-teal-700 focus:outline-none "
                >
                  Log In
                </button>
              </div>
              <div className="text-center mt-3">
                <p>
                  Don't have an account?{" "}
                  <button
                    onClick={() => {
                      clearSignIn();
                      setShowSignUp(true);
                    }}
                    className="text-teal-600 font-medium"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
