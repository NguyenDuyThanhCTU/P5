import React, { useEffect, useState } from "react";

import Display from "../../Item/Display";
import { useStateProvider } from "../../../Context/StateProvider";
import { useData } from "../../../Context/DataProviders";
import ShopCart from "../../../Layout/ClientLayout/Section/ShopCart";
import SubHeader from "../../../Layout/ClientLayout/Section/SubHeader/SubHeader";

const Product = () => {
  const [discount, setDiscount] = useState([]);
  const [best, setBest] = useState([]);
  const [latest, setLatest] = useState([]);
  const [DataSearch, setDataSearch] = useState([]);
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
      setDataSearch(sort);
    }
  }, [searchKey]);

  return (
    <div>
      <SubHeader />

      <div id="product">
        <Display
          Data={searchKey !== "" ? DataSearch : latest}
          title={`${
            searchKey !== ""
              ? `Kết quả tìm kiếm cho từ khoá '${searchKey}'`
              : "Sản phẩm mới"
          }`}
          background="bg-[url(https://firebasestorage.googleapis.com/v0/b/dora-a85b2.appspot.com/o/img%2Fblue-1142745_960_720.jpg?alt=media&token=c3265f6b-5275-41d7-b739-6f94b65d8640)]"
        />
      </div>

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

export default Product;
