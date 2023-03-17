import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = ({ imageUrl, title, category }) => {
  return (
    // <div className="w-full h-[28rem] relative min-[380px]:w-4/5 min-[380px]:h-[25rem]">
    // <div className="w-full h-[28rem] relative max-w-sm max-h-fit min-w-[30%]">
    // <div className="w-full h-[28rem] relative max-w-sm flex-wrap justify-center min-[380px]:h-[25rem]">
    <div className="px-3 w-full md:px-0">
      <div className="w-full h-[28rem] relative flex-wrap justify-center ">
        <Image
          // Absolute URL
          src={imageUrl}
          alt="User profile picture"
          // width={300}
          // height={300}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute w-full h-full flex flex-col justify-center items-center">
          <h2 className="text-white font-bold text-3xl sm:text-4xl text-center mb-5">
            {title}
          </h2>
          <Link
            href={`/${category}`}
            className="text-gray-400 bg-white p-2 font-medium text-md"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
