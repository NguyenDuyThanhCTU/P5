import React, { useEffect, useState } from "react";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";

import Display from "../../Item/Display";
import { useStateProvider } from "../../../Context/StateProvider";
import { useData } from "../../../Context/DataProviders";
import ShopCart from "../../../Layout/ClientLayout/Section/ShopCart";

const Home = () => {
  const [discount, setDiscount] = useState([]);
  const [best, setBest] = useState([]);
  const [latest, setLatest] = useState([]);
  const { searchKey, OpenCart } = useStateProvider();
  const { Products } = useData();

  useEffect(() => {
    const productsWithSale = Products.filter(
      (product) => product.sale.discount !== 0
    );

    const sortedBySold = productsWithSale.sort((a, b) => b.access - a.access);
    setDiscount(sortedBySold);

    const productsWithCreatedAt = Products.filter(
      (product) => product.createdAt
    );
    const sortedByCreatedAt = productsWithCreatedAt.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setLatest(sortedByCreatedAt);

    const sortedByAccess = productsWithCreatedAt.sort(
      (a, b) => b.access - a.access
    );
    setBest(sortedByAccess);
  }, [Products, searchKey]);

  return (
    <div>
      <Section1 />
      {discount.length > 0 && <Section2 Data={discount} />}
      <div id="product">
        <Display
          Data={latest}
          title={`${
            searchKey
              ? `Kết quả tìm kiếm cho từ khoá '${searchKey}'`
              : "Sản phẩm mới"
          }`}
          background="bg-[url(https://png.pngtree.com/background/20210710/original/pngtree-cartoon-kid-meadow-green-background-material-picture-image_1023073.jpg)]"
        />
      </div>
      <Display
        Data={best}
        title=" Sản phẩm bán chạy"
        background="bg-[url(https://i.pinimg.com/originals/5d/04/23/5d04238a61c7da84d144b241a8867cc9.jpg)]"
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

export default Home;
