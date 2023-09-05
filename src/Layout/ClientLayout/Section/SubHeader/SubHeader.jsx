import React from "react";
import Category from "./Item/Category";
import Slide from "./Item/Slide";
import Ads from "./Item/Ads";

const SubHeader = () => {
  return (
    <div className="grid xl:grid-cols-4  d:px-20 py-10 gap-3 p:grid-cols-1 p:px-2 bg-[url(https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/img%2Fvecteezy_background-gradient-blue-abstract-design-vector-illustration_16513887.jpg?alt=media&token=0e41ca8a-89cb-4099-913a-ce8e0168324b)]">
      <Category />
      <Slide />
      <Ads />
    </div>
  );
};

export default SubHeader;
