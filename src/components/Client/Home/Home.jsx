import React, { useEffect, useState } from "react";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import { Products } from "../../../Utils/temp";
import Section3 from "./Section/Section3";
import Section4 from "./Section/Section4";
import Display from "../../Item/Display";

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

      <Display
        Data={latest}
        title="Sản phẩm mới"
        background="bg-[url(https://png.pngtree.com/background/20210710/original/pngtree-cartoon-kid-meadow-green-background-material-picture-image_1023073.jpg)]"
      />
      <Display
        Data={best}
        title=" Sản phẩm bán chạy"
        background="bg-[url(https://i.pinimg.com/originals/5d/04/23/5d04238a61c7da84d144b241a8867cc9.jpg)]"
      />
    </div>
  );
};

export default Home;
