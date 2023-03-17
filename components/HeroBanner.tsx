"use client";
import Image from "next/image";
import React, { use } from "react";
import { client, urlFor } from "../sanity/client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

async function getBanners() {
  return await client.fetch("*[_type == 'banner']");
}

const HeroBanner = () => {
  const data = use(getBanners());
  console.log("data", data);

  return (
    <Carousel
      emulateTouch
      // autoPlay
      infiniteLoop
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute z-10 bottom-10 bg-white left-5 rounded-full p-2 md:p-3 opacity-60 hover:opacity-100 justify-center items-center"
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute z-10 bottom-10 bg-white right-5 rounded-full p-2 md:p-3 opacity-60 hover:opacity-100 justify-center items-center"
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        )
      }
    >
      {data.map((item: any) => (
        <div
          key={item._id}
          className="flex flex-col bg-red-100 w-full items-center justify-around md:flex-row md:h-[30rem]"
        >
          <Image
            // src={builder.image(item.image).width(300).height(300).url()}
            src={urlFor(item.image).url()}
            alt={item.heading}
            width={500}
            height={500}
            layout="intrinsic"
            className="order-1 "
            objectFit="contain"
          />

          <div className="flex flex-col order-2 items-center justify-around max-w-md h-44 my-8 md:my-0 md:h-64 md:justify-between md:items-start">
            <h1 className="font-bold text-xl text-center md:text-6xl md:text-left">
              {item.heading}
            </h1>
            <h1 className="font-normal text-lg text-center md:text-left">
              {item.desc}
            </h1>
            <button className="border-2 border-black p-2">
              {item.buttonText}
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HeroBanner;
