import React, { useEffect, useState } from "react";
import Section1 from "./Section/Section1";
import Display from "../../Item/Display";
import { useParams } from "react-router-dom";
import { useData } from "../../../Context/DataProviders";
import ShopCart from "../../../Layout/ClientLayout/Section/ShopCart";
import { useStateProvider } from "../../../Context/StateProvider";

const ProductDetail = () => {
  const [similarProduct, setSimilarProduct] = useState([]);
  const [Sort, setSort] = useState();
  const { Products } = useData();
  const { id } = useParams();
  const { OpenCart } = useStateProvider();

  useEffect(() => {
    const sort = Products.filter((item) => item.id === id);
    if (sort) {
      setSort(sort[0]);
    }
  }, [id]);

  useEffect(() => {
    const similarproduct = Products.filter(
      (item) => item.parentParams === Sort?.parentParams
    );
    setSimilarProduct(similarproduct);
  }, [Products, Sort]);

  return (
    <div className="flex flex-col gap-5 ">
      {Sort && <Section1 Data={Sort} />}
      <Display
        Data={similarProduct}
        title="Sản phẩm cùng loại"
        background="bg-[url(https://png.pngtree.com/background/20210710/original/pngtree-cartoon-kid-meadow-green-background-material-picture-image_1023073.jpg)]"
      />
      <div
        className={`fixed bottom-36 right-[-300px] ${
          OpenCart ? " z-50" : "z-0"
        }`}
      >
        <ShopCart />
      </div>
    </div>
  );
};

export default ProductDetail;
