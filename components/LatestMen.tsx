import { use } from "react";
import Product from "./Product";
import { client, urlFor } from "../sanity/client";
import { GetColorName } from "hex-color-to-color-name";

const getMenProducts = async () => {
  return await client.fetch("*[_type == 'product']");
};

const LatestMen = () => {
  const data = use(getMenProducts());
  console.warn("getMenProducts", data);

  return (
    <div className="flex flex-col pt-10 items-center">
      <h1 className="font-semibold text-xl sm:text-3xl">
        {"Latest in Men's Fashion"}
      </h1>
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

export default LatestMen;
