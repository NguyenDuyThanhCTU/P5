import React from "react";
import Category from "./Item/Category";
import Slide from "./Item/Slide";
import Ads from "./Item/Ads";

const SubHeader = () => {
  return (
    <div className="grid xl:grid-cols-4  d:px-20 py-10 gap-3 p:grid-cols-1 p:px-2 ">
      <Category />
      <Slide />
      <Ads />
    </div>
  );
};

export default SubHeader;
