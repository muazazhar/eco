import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({
  imageUrl,
  name,
  price,
  slug,
  color,
}: {
  imageUrl: any;
  name: any;
  price: any;
  slug: any;
  color: any;
}) => {
  // console.log("image", data);
  return (
    <div key={slug} className="group relative">
      <div className="min-h-80 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <Image
          src={imageUrl}
          alt="User profile picture"
          width={200}
          height={200}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/product/${slug}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  );
};

export default Product;
