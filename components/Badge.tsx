import React from "react";

const Badge = ({ count }: { count: boolean }) => {
  return (
    <div className="bg-teal-600 z-10 rounded-full ">
      <h4 className="text-white text-[0.5rem] px-1.5 py-0.5">{count}</h4>
    </div>
  );
};

export default Badge;
