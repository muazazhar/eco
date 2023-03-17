import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full h-[20rem] bg-red-50 flex flex-col items-center justify-around py-20 md:py-16">
      <h1 className="font-bold text-xl sm:text-4xl">Newsletter</h1>
      <h1 className="font-light text-lg sm:text-2xl text-center">
        Get timely updates from your favorite products.
      </h1>
      <div className="w-4/5 md:w-2/5 flex bg-red-400">
        <input
          type="email"
          className="w-11/12 py-2 pl-5 border border-gray-400 outline-none"
          placeholder="Enter Email"
        />
        <button className="bg-teal-600 w-2/12 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
