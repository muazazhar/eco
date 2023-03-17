"use client";
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import CartContext from "@/context/cartContext";
import { urlFor } from "@/sanity/client";

const Checkout = () => {
  const { showCart, setShowCart, cartItems, totalPrice, onRemove } =
    useContext(CartContext);
  return (
    // <Dialog as="div" className="relative z-10">
    <div className="flex w-full flex-col md:flex-row">
      <div className="order-1  md:order-2 md:w-2/5 ">
        {/* <Dialog.Panel className="pointer-events-auto w-screen max-w-md"> */}
        <div className="flex h-full md:h-2/3 flex-col overflow-y-scroll bg-white shadow-xl">
          <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
            <div className="flex items-start justify-between">
              <h1 className="text-lg font-medium text-gray-900">
                Order Summary
              </h1>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {cartItems.map((product: any) => (
                    <li key={product.productId} className="flex py-3">
                      <div className="h-[5rem] w-[5rem] flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          // src={product.imageSrc}
                          src={urlFor(product.image[0]).url()}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-sm font-medium text-gray-900">
                            <h3>
                              <a href={product.href}>{product.name}</a>
                            </h3>
                            <p className="ml-4">${product.price}</p>
                          </div>
                          <p className="mt-0 text-sm text-gray-500">
                            {product.color.colorName}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            Qty {product.quantity}
                          </p>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-teal-600 hover:text-teal-500"
                              onClick={() => onRemove(product)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-sm font-normal text-gray-900">
              <p>Subtotal</p>
              <p className="font-medium">${totalPrice}</p>
            </div>
            <div className="flex justify-between text-sm font-normal text-gray-900 mt-2">
              <p>Shipping</p>
              <p>{"Free"}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-lg font-normal text-gray-900">
              <p>Total</p>
              <p className="font-medium">${totalPrice}</p>
            </div>
          </div>
        </div>
        {/* </Dialog.Panel> */}
      </div>
      <div className="order-2 md:order-1 md:w-3/5">
        <div className="flex-1 overflow-y-auto py-10 px-4 sm:px-28 space-y-3 ">
          <div className="flex justify-between text-lg font-normal text-gray-900">
            <p>Contact Information</p>
            {/* <p className="font-medium">${totalPrice}</p> */}
          </div>
          <div className="form-outline">
            <input
              type="email"
              id="email_field"
              className="form-control border border-black rounded-sm focus:drop-shadow-lg outline-none px-5 py-2 w-full"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="flex justify-between text-lg font-normal text-gray-900">
            <p>Shipping Address</p>
          </div>
          <div className="flex gap-3">
            <div className="form-outline w-1/2 ">
              <input
                type="text"
                id="fName_field"
                className="form-control border border-black rounded-sm focus:drop-shadow-lg outline-none px-5 py-2 w-full"
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
                placeholder="First Name"
              />
            </div>
            <div className="form-outline w-1/2 ">
              <input
                type="text"
                id="fName_field"
                className="form-control border border-black rounded-sm focus:drop-shadow-lg outline-none px-5 py-2 w-full"
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-outline">
            <input
              type="text"
              id="address_field"
              className="form-control border border-black rounded-sm focus:drop-shadow-lg outline-none px-5 py-2 w-full"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
              placeholder="Address"
            />
          </div>
          <div className="flex gap-3">
            <div className="form-outline w-1/2 ">
              <input
                type="text"
                id="fName_field"
                className="form-control border border-black rounded-sm focus:drop-shadow-lg outline-none px-5 py-2 w-full"
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
                placeholder="City"
              />
            </div>
            <div className="form-outline w-1/2 ">
              <input
                type="text"
                id="fName_field"
                className="form-control border border-black rounded-sm focus:drop-shadow-lg outline-none px-5 py-2 w-full"
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
                placeholder="Postal Code"
              />
            </div>
          </div>
          <div className="form-outline">
            <input
              type="text"
              id="fName_field"
              className="form-control border border-black rounded-sm focus:drop-shadow-lg outline-none px-5 py-2 w-full"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
              placeholder="Phone Number"
            />
          </div>
          <button
            type="submit"
            // onClick={() => addItem()}
            className="flex w-full items-center justify-center border border-transparent bg-teal-600 py-2  text-base font-medium text-white hover:bg-teal-700 focus:outline-none "
          >
            Submit Order
          </button>
        </div>
      </div>
    </div>
    // </Dialog>
  );
};

export default Checkout;
