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

  useEffect(() => {
    const sort = Products.filter((items) => items.type === searchKey);
    if (sort) {
      setLatest(sort);
    }
  }, [searchKey]);

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
          background="bg-[url(https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/img%2Fblue-1142745_960_720.jpg?alt=media&token=c3265f6b-5275-41d7-b739-6f94b65d8640)]"
        />
      </div>
      <Display
        Data={best}
        title=" Sản phẩm bán chạy"
        background="bg-[url(https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/img%2Fvecteezy_background-gradient-blue-abstract-design-vector-illustration_16513887.jpg?alt=media&token=0e41ca8a-89cb-4099-913a-ce8e0168324b)]"
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
