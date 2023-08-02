import React, { useEffect, useState } from "react";
import Section1 from "./Section/Section1";
import Display from "../../Item/Display";
import { Products } from "../../../Utils/temp";

const ProductDetail = () => {
  const [similarProduct, setSimilarProduct] = useState([]);
  useEffect(() => {
    const similarproduct = Products.filter((item) => item.type === "");
    setSimilarProduct(similarproduct);
  }, []);
  return (
    <div className="flex flex-col gap-5 ">
      <Section1 />
      <Display
        Data={similarProduct}
        title="Sản phẩm cùng loại"
        background="bg-[url(https://png.pngtree.com/background/20210710/original/pngtree-cartoon-kid-meadow-green-background-material-picture-image_1023073.jpg)]"
      />
    </div>
  );
};

export default ProductDetail;
