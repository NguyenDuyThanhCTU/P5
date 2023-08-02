import React, { useEffect, useState } from "react";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import { Products } from "../../../Utils/temp";

const Home = () => {
  const [discount, setDiscount] = useState([]);
  const [best, setBest] = useState([]);
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    const productsWithSale = Products.filter(
      (product) => product.sale && Object.keys(product.sale).length > 0
    );
    const sortedBySold = productsWithSale.sort((a, b) => b.sold - a.sold);
    setDiscount(sortedBySold);

    const productsWithCreatedAt = Products.filter(
      (product) => product.createdAt
    );
    const sortedByCreatedAt = productsWithCreatedAt.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setLatest(sortedByCreatedAt);
  }, []);

  useEffect(() => {
    const sortedBySold = Products.sort((a, b) => b.sold - a.sold);
    setBest(sortedBySold);
  }, []);

  return (
    <div>
      <Section1 />
      {discount.length > 0 && <Section2 Data={discount} />}
    </div>
  );
};

export default Home;
