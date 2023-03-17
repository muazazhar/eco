import React from "react";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="w-full flex flex-col items-center md:flex-row gap-3 md:px-5 md:gap-2">
      <Category
        imageUrl="https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        title="SHIRT STYLE!"
        category="men"
      />
      <Category
        imageUrl="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        title="LOUNGEWEAR LOVE"
        category="women"
      />
      <Category
        imageUrl="https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        title="LIGHT JACKETS"
        category="best"
      />
    </div>
  );
};

export default Categories;
