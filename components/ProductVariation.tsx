"use client";
import React, { useState, useContext } from "react";
import { RadioGroup } from "@headlessui/react";
import { GetColorName } from "hex-color-to-color-name";
import CartContext from "@/context/cartContext";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const ProductVariation = ({ product }: { product: any }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const { addItemToCart } = useContext(CartContext);

  const addItem = () => {
    addItemToCart({
      productId: product.slug.current,
      name: product.name,
      price: product.price,
      image: product.image,
      color: {
        colorHex: selectedColor,
        colorName: GetColorName(selectedColor),
      },
      size: selectedSize,
    });
  };
  return (
    <div className="mt-10">
      {/* Colors */}
      <div>
        <h3 className="text-sm font-medium text-gray-900">Color</h3>

        <RadioGroup
          value={selectedColor}
          onChange={setSelectedColor}
          className="mt-4"
        >
          <RadioGroup.Label className="sr-only">
            Choose a color
          </RadioGroup.Label>
          <div className="flex items-center space-x-3">
            {product.colors.map((color: any) => (
              <RadioGroup.Option
                key={color}
                value={color}
                className={({ active, checked }) =>
                  classNames(
                    color.selectedClass,
                    active && checked ? "ring ring-offset-1" : "",
                    !active && checked ? "ring-2" : "",
                    "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                  )
                }
                style={{ backgroundColor: `#${color}` }}
              >
                <RadioGroup.Label as="span" className="sr-only">
                  {color.name}
                </RadioGroup.Label>
                <span
                  aria-hidden="true"
                  className={classNames(
                    color.class,
                    "h-8 w-8 rounded-full border border-black border-opacity-10"
                  )}
                  style={{ backgroundColor: `#${color}` }}
                />
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Sizes */}

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900">Size</h3>
          <a
            href="#"
            className="text-sm font-medium text-teal-600 hover:text-teal-500"
          >
            Size guide
          </a>
        </div>

        <RadioGroup
          value={selectedSize}
          onChange={setSelectedSize}
          className="mt-4"
        >
          <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
            {product.sizes.map((size: any) => (
              <RadioGroup.Option
                key={size}
                value={size}
                className={({ active }) =>
                  classNames(
                    active ? "ring-2 ring-teal-500" : "",
                    "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                  )
                }
              >
                {({ active, checked }) => (
                  <>
                    <RadioGroup.Label as="span">{size}</RadioGroup.Label>
                    <span
                      className={classNames(
                        active ? "border" : "border-2",
                        checked ? "border-teal-500" : "border-transparent",
                        "pointer-events-none absolute -inset-px rounded-md"
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      <button
        onClick={() => addItem()}
        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 py-3 px-8 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        Add to bag
      </button>
    </div>
  );
};

export default ProductVariation;
