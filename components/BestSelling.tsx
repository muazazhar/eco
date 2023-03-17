import { use } from "react";
import Product from "./Product";
import { client, urlFor } from "../sanity/client";
import { GetColorName } from "hex-color-to-color-name";

const getBestProducts = async () => {
  return await client.fetch("*[_type == 'product']");
};

const BestSelling = () => {
  const data = use(getBestProducts());
  console.warn("getBestProducts", data);
  return (
    <div className=" flex-col items-center hidden md:flex">
      <h1 className="font-semibold text-xl sm:text-3xl">Best Sellers</h1>
      <div className="grid md:grid-cols-5 items-center px-3 py-5 md:flex-row gap-3 md:gap-2 md:flex-wrap">
        {data.map((item: any) => (
          <Product
            imageUrl={urlFor(item.image[0]).url()}
            name={item.name}
            price={item.price}
            slug={item.slug.current}
            color={GetColorName(item.colors[0])}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
